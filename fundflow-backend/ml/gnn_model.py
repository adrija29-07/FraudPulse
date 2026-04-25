GNN_FINDINGS = [
    {"pattern": "Round-Trip", "confidence": "94%"},
    {"pattern": "Structuring", "confidence": "88%"}
]

def get_shap_explanation(account_id: str):
    return {
        "explanation": f"SHAP values indicate high risk due to structuring behavior in {account_id}.",
        "features": [
            {"name": "Transaction Velocity", "value": 0.45},
            {"name": "Network Centrality", "value": 0.32},
            {"name": "Dormant Activation", "value": 0.18}
        ]
    }
