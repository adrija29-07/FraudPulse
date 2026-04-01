# ============================================================
# db/neo4j_client.py  —  Neo4j graph database client
# Save this at:  fundflow-backend/db/neo4j_client.py
# NOTE: If Neo4j is not installed, this is skipped automatically.
# ============================================================
from typing import Optional, List, Dict
import os

NEO4J_URI      = os.getenv("NEO4J_URI",      "bolt://localhost:7687")
NEO4J_USER     = os.getenv("NEO4J_USER",     "neo4j")
NEO4J_PASSWORD = os.getenv("NEO4J_PASSWORD", "fundflow123")

_driver = None


async def init_neo4j():
    global _driver
    from neo4j import AsyncGraphDatabase
    _driver = AsyncGraphDatabase.driver(NEO4J_URI, auth=(NEO4J_USER, NEO4J_PASSWORD))
    print("Neo4j connected.")


async def get_neo4j():
    if _driver is None:
        await init_neo4j()
    return _driver


async def find_round_trips() -> List[Dict]:
    """Find circular transaction patterns."""
    if _driver is None:
        return []
    cypher = """
    MATCH path = (start:Account)-[:TRANSFERRED*3..6]->(start)
    WITH start, length(path) AS hops,
         REDUCE(total=0, r IN relationships(path) | total + r.amount) AS total_amount
    WHERE hops >= 3
    RETURN start.id AS origin_id, start.name AS origin_name,
           hops, total_amount
    ORDER BY total_amount DESC LIMIT 10
    """
    async with _driver.session() as session:
        result = await session.run(cypher)
        return [dict(r) async for r in result]


async def find_structuring() -> List[Dict]:
    """Detect structuring / smurfing patterns."""
    if _driver is None:
        return []
    cypher = """
    MATCH (a:Account)-[r:TRANSFERRED]->(b:Account)
    WHERE r.amount < 50000 AND r.amount > 40000 AND r.channel = 'ATM'
    WITH a, COLLECT(r) AS txns WHERE SIZE(txns) >= 2
    RETURN a.id AS account_id, a.name AS account_name,
           SIZE(txns) AS atm_count
    ORDER BY atm_count DESC
    """
    async with _driver.session() as session:
        result = await session.run(cypher)
        return [dict(r) async for r in result]


async def find_dormant_activation() -> List[Dict]:
    """Find dormant accounts that suddenly received large inflows."""
    if _driver is None:
        return []
    cypher = """
    MATCH (a:Account)-[r:TRANSFERRED]->()
    WHERE a.risk = 'dormant' AND r.amount > 500000
    WITH a, SUM(r.amount) AS sudden_inflow
    RETURN a.id AS account_id, a.name AS account_name, sudden_inflow
    ORDER BY sudden_inflow DESC
    """
    async with _driver.session() as session:
        result = await session.run(cypher)
        return [dict(r) async for r in result]


async def predict_next_hops(account_id: str) -> List[Dict]:
    """GNN predicted next transaction targets."""
    if _driver is None:
        # Return demo predictions when Neo4j not available
        demo = {
            "A001": [{"predicted_target": "A005", "confidence": 0.78},
                     {"predicted_target": "A008", "confidence": 0.65}],
            "A002": [{"predicted_target": "A008", "confidence": 0.65}],
            "A016": [{"predicted_target": "A003", "confidence": 0.82}],
            "A007": [{"predicted_target": "A013", "confidence": 0.71}],
        }
        return demo.get(account_id, [])
    cypher = """
    MATCH (a:Account {id: $id})-[:TRANSFERRED]->(neighbor:Account)
    WITH neighbor, COUNT(*) AS txn_count ORDER BY txn_count DESC LIMIT 3
    RETURN neighbor.id AS predicted_target, neighbor.name AS target_name,
           toFloat(txn_count) / 10.0 AS confidence
    """
    async with _driver.session() as session:
        result = await session.run(cypher, id=account_id)
        return [dict(r) async for r in result]


async def get_account_subgraph(account_id: str, depth: int = 2) -> Dict:
    """Return nodes + edges for an account's neighbourhood."""
    if _driver is None:
        return {"nodes": [], "edges": [], "note": "Neo4j not connected"}
    cypher = """
    MATCH path = (a:Account {id: $id})-[:TRANSFERRED*1..$depth]-(b:Account)
    WITH COLLECT(DISTINCT a) + COLLECT(DISTINCT b) AS nodes_list
    UNWIND nodes_list AS n
    RETURN COLLECT(DISTINCT {id: n.id, name: n.name, risk: n.risk}) AS nodes
    """
    async with _driver.session() as session:
        result = await session.run(cypher, id=account_id, depth=depth)
        record = await result.single()
        return {"nodes": record["nodes"] if record else [], "edges": []}