# ============================================================
# ml/patterns.py  —  Fraud Pattern Matchers (NetworkX)
# Save this at:  fundflow-backend/ml/patterns.py
# ============================================================
import networkx as nx
from typing import List, Dict, Any
from collections import defaultdict


def build_graph(accounts: List[Dict], transactions: List[Dict]) -> nx.DiGraph:
    """Build directed graph from account + transaction data."""
    G = nx.DiGraph()
    for acc in accounts:
        G.add_node(
            acc["id"],
            name=acc.get("name", acc["id"]),
            risk=acc.get("risk", "unknown"),
            risk_score=acc.get("risk_score", 0),
            type=acc.get("type", "Unknown"),
        )
    for txn in transactions:
        src = txn.get("source_id") or txn.get("source")
        tgt = txn.get("target_id") or txn.get("target")
        if src and tgt and src in G and tgt in G:
            G.add_edge(src, tgt,
                       amount=txn.get("amount", 0),
                       channel=txn.get("channel", "UNKNOWN"))
    return G


def detect_round_trips(G: nx.DiGraph, min_amount: float = 100_000) -> List[Dict]:
    """Find circular fund flows (round-tripping)."""
    results = []
    try:
        cycles = list(nx.simple_cycles(G))
    except Exception:
        return []

    for cycle in cycles:
        if len(cycle) < 3:
            continue
        total = 0.0
        edges = []
        valid = True
        for i in range(len(cycle)):
            src = cycle[i]
            tgt = cycle[(i + 1) % len(cycle)]
            if G.has_edge(src, tgt):
                amt = G[src][tgt].get("amount", 0)
                total += amt
                edges.append({"from": src, "to": tgt, "amount": amt})
            else:
                valid = False
                break
        if valid and total >= min_amount:
            results.append({
                "type": "round_trip",
                "accounts": cycle,
                "hops": len(cycle),
                "total_amount": total,
                "edges": edges,
                "risk_score": min(95, 50 + len(cycle) * 8),
            })
    results.sort(key=lambda x: x["total_amount"], reverse=True)
    return results


def detect_structuring(transactions: List[Dict], threshold: float = 50_000) -> List[Dict]:
    """Detect structuring — multiple ATM withdrawals just below threshold."""
    account_atm: Dict[str, list] = defaultdict(list)
    for txn in transactions:
        amt     = txn.get("amount", 0)
        channel = txn.get("channel", "")
        if channel == "ATM" and threshold * 0.8 <= amt < threshold:
            src = txn.get("source_id") or txn.get("source")
            if src:
                account_atm[src].append(txn)

    results = []
    for account_id, txns in account_atm.items():
        if len(txns) >= 2:
            results.append({
                "type": "structuring",
                "account_id": account_id,
                "txn_count": len(txns),
                "total": sum(t.get("amount", 0) for t in txns),
                "transactions": txns,
                "risk_score": min(95, 50 + len(txns) * 10),
            })
    return sorted(results, key=lambda x: x["txn_count"], reverse=True)


def detect_dormant_activation(accounts: List[Dict], transactions: List[Dict]) -> List[Dict]:
    """Find dormant accounts suddenly receiving large inflows."""
    dormant_ids = {a["id"] for a in accounts if a.get("risk") == "dormant"}
    results = []
    for txn in transactions:
        tgt = txn.get("target_id") or txn.get("target")
        if tgt in dormant_ids and txn.get("amount", 0) > 300_000:
            acc = next((a for a in accounts if a["id"] == tgt), {})
            results.append({
                "type": "dormant_activation",
                "account_id": tgt,
                "account_name": acc.get("name", tgt),
                "inflow_amount": txn.get("amount"),
                "channel": txn.get("channel"),
                "risk_score": 75,
            })
    return results


def detect_profile_mismatch(accounts: List[Dict]) -> List[Dict]:
    """Flag accounts where actual flow far exceeds declared income."""
    def parse(s: str) -> float:
        if not s or s in ("Not Declared", "N/A", ""):
            return 0.0
        return float(str(s).replace(",", "").strip() or 0)

    results = []
    for acc in accounts:
        declared = parse(acc.get("declared_income", "0"))
        inflow   = parse(acc.get("inflow_30d", "0"))
        if declared <= 0 or inflow <= 0:
            continue
        monthly_income = declared / 12
        ratio = inflow / monthly_income
        if ratio > 2.5:
            results.append({
                "type": "profile_mismatch",
                "account_id": acc["id"],
                "account_name": acc.get("name"),
                "declared_income": acc.get("declared_income"),
                "actual_inflow_30d": acc.get("inflow_30d"),
                "mismatch_ratio": round(ratio, 2),
                "risk_score": min(90, int(40 + ratio * 5)),
            })
    return sorted(results, key=lambda x: x["mismatch_ratio"], reverse=True)


def run_all_detectors(accounts: List[Dict], transactions: List[Dict]) -> Dict[str, Any]:
    """Run every fraud pattern matcher and return all results."""
    G = build_graph(accounts, transactions)
    return {
        "round_trips":         detect_round_trips(G),
        "structuring":         detect_structuring(transactions),
        "dormant_activations": detect_dormant_activation(accounts, transactions),
        "profile_mismatches":  detect_profile_mismatch(accounts),
    }