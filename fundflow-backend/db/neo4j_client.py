async def predict_next_hops(account_id: str):
    # Mocking the next hops for now to avoid actual Neo4j dependency
    return [
        {"hop": f"{account_id}-HOP1", "confidence": 0.89},
        {"hop": f"{account_id}-HOP2", "confidence": 0.76}
    ]
