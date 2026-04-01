# ============================================================
# ml/gnn_model.py  —  GNN Risk Scoring (demo mode)
# Save this at:  fundflow-backend/ml/gnn_model.py
# NOTE: Uses rule-based scoring so PyTorch is NOT required.
#       Swap with real PyTorch Geometric model for production.
# ============================================================
from typing import List, Dict, Optional


# ---- Demo GNN findings (rotated by the frontend) ----------
GNN_FINDINGS = [
    {"confidence": 94, "pattern": "Round-Trip",        "severity": "critical",
     "text": "Circular fund flow A001->A002->A003->A004->A001. Total 18,45,000 cycled in 8h 40m. PMLA Section 3."},
    {"confidence": 91, "pattern": "Structuring",       "severity": "critical",
     "text": "Two ATM withdrawals of 49,900 and 49,800 within 45 minutes — both below 50,000 threshold."},
    {"confidence": 88, "pattern": "Dormant Activation","severity": "high",
     "text": "A/C 7823 inactive 18 months then received 9,80,000 inflow on 14 Mar 2026."},
    {"confidence": 85, "pattern": "Mule Network",      "severity": "high",
     "text": "A016 shows 45L through savings account declared at 1.8L income — 25x ratio."},
    {"confidence": 79, "pattern": "Shell Entity",      "severity": "high",
     "text": "Shell Corp A registered 3 months ago, no declared business purpose, rapid layering."},
    {"confidence": 76, "pattern": "Velocity",          "severity": "medium",
     "text": "Kumar Trading executed 32 transactions in 2 hours — 8x peer average."},
    {"confidence": 72, "pattern": "Profile Mismatch",  "severity": "medium",
     "text": "Partner Entity B: declared 15L annual income but actual monthly inflow 8.4L."},
    {"confidence": 68, "pattern": "Cross-Border",      "severity": "medium",
     "text": "Deepak Exports: 3x baseline increase in cross-border transfers, no documentation."},
]


def compute_risk_score(account: Dict) -> int:
    """
    Rule-based GNN risk scoring.
    In production replace this with PyTorch Geometric GraphSAGE inference.
    """
    score = 0

    # Factor 1: Income mismatch
    def parse(s: str) -> float:
        if not s or s in ("Not Declared", ""):
            return 0.0
        return float(str(s).replace(",", "").strip() or 0)

    declared = parse(account.get("declared_income", "0"))
    inflow   = parse(account.get("inflow_30d", "0"))
    if declared > 0 and inflow > 0:
        ratio = inflow / (declared / 12)
        if ratio > 5:    score += 40
        elif ratio > 3:  score += 25
        elif ratio > 1.5:score += 10

    # Factor 2: Shell entity (no declared income)
    if account.get("declared_income") in ("Not Declared", "0", None, ""):
        score += 30

    # Factor 3: High connections
    conns = account.get("connections", 0)
    if conns >= 7:   score += 20
    elif conns >= 5: score += 10

    # Factor 4: Risk label
    risk = account.get("risk", "clean")
    if risk == "fraud":      score += 20
    elif risk == "suspicious":score += 10
    elif risk == "dormant":  score += 5

    return min(score, 100)


def get_shap_explanation(account_id: str) -> Dict:
    """
    SHAP explanation for a risk score.
    Returns top contributing features.
    """
    # Demo SHAP values — replace with real shap.Explainer in production
    explanations = {
        "A001": [
            {"feature": "Income ratio",      "shap": 0.42, "impact": "increases_risk"},
            {"feature": "Shell entity links","shap": 0.18, "impact": "increases_risk"},
            {"feature": "Connection count",  "shap": 0.14, "impact": "increases_risk"},
            {"feature": "Structuring ratio", "shap": 0.09, "impact": "increases_risk"},
            {"feature": "Dormancy flag",     "shap": 0.05, "impact": "increases_risk"},
        ],
        "A002": [
            {"feature": "Shell entity flag", "shap": 0.55, "impact": "increases_risk"},
            {"feature": "Income ratio",      "shap": 0.30, "impact": "increases_risk"},
            {"feature": "Connection count",  "shap": 0.10, "impact": "increases_risk"},
        ],
        "A016": [
            {"feature": "Income ratio",      "shap": 0.68, "impact": "increases_risk"},
            {"feature": "Connection count",  "shap": 0.20, "impact": "increases_risk"},
            {"feature": "Velocity score",    "shap": 0.10, "impact": "increases_risk"},
        ],
    }
    return {
        "account_id": account_id,
        "model": "GNN v2.4 + IsolationForest",
        "top_contributors": explanations.get(account_id, [
            {"feature": "Income ratio",  "shap": 0.20, "impact": "increases_risk"},
            {"feature": "Network degree","shap": 0.10, "impact": "increases_risk"},
        ]),
    }