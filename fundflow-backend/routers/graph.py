
# ============================================================
# routers/graph.py  —  Graph analytics endpoints
# Save this at:  fundflow-backend/routers/graph.py
# ============================================================
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from db.postgres import get_db, Account as AccountModel, Transaction as TxnModel

router = APIRouter()


@router.get("/full")
async def get_full_graph(db: AsyncSession = Depends(get_db)):
    """Return all accounts + transactions for D3 graph rendering."""
    accounts_res = await db.execute(select(AccountModel).limit(200))
    txns_res     = await db.execute(select(TxnModel).limit(500))

    accounts = accounts_res.scalars().all()
    txns     = txns_res.scalars().all()

    return {
        "nodes": [
            {
                "id": a.id, "name": a.name, "type": a.type,
                "risk": a.risk, "riskScore": a.risk_score,
                "connections": a.connections,
            }
            for a in accounts
        ],
        "edges": [
            {
                "source": t.source_id, "target": t.target_id,
                "amount": t.amount,    "channel": t.channel,
                "flagged": t.flagged,
            }
            for t in txns
        ],
    }


@router.get("/patterns")
async def get_patterns(db: AsyncSession = Depends(get_db)):
    """Run fraud pattern matchers on current DB data."""
    from ml.patterns import run_all_detectors

    accounts_res = await db.execute(select(AccountModel))
    txns_res     = await db.execute(select(TxnModel))

    accounts = [
        {"id": a.id, "name": a.name, "risk": a.risk,
         "risk_score": a.risk_score, "type": a.type,
         "declared_income": a.declared_income,
         "inflow_30d": a.inflow_30d, "outflow_30d": a.outflow_30d}
        for a in accounts_res.scalars().all()
    ]
    transactions = [
        {"source_id": t.source_id, "target_id": t.target_id,
         "amount": t.amount, "channel": t.channel}
        for t in txns_res.scalars().all()
    ]
    return run_all_detectors(accounts, transactions)


@router.get("/predict/{account_id}")
async def predict_trajectory(account_id: str):
    """GNN predicted next hops for an account."""
    from db.neo4j_client import predict_next_hops
    hops = await predict_next_hops(account_id)
    return {"account_id": account_id, "predicted_hops": hops}


@router.get("/gnn-findings")
async def gnn_findings():
    """Return current GNN findings for the AI overlay."""
    from ml.gnn_model import GNN_FINDINGS
    return {"findings": GNN_FINDINGS}