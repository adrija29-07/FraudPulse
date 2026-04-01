# ============================================================
# main.py  —  FastAPI entry point
# Save this at:  fundflow-backend/main.py
# ============================================================
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import uvicorn

load_dotenv()  # loads your .env file

from routers import accounts, transactions, alerts, reports, graph
from ws.stream import router as ws_router
from db.postgres import init_db

app = FastAPI(
    title="FundFlow Fraud Detection API",
    version="1.0.0",
    docs_url="/api/docs",
)

# Allow frontend (live-server on :8080) to call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register all routers
app.include_router(accounts.router,     prefix="/api/accounts",     tags=["Accounts"])
app.include_router(transactions.router, prefix="/api/transactions",  tags=["Transactions"])
app.include_router(alerts.router,       prefix="/api/alerts",        tags=["Alerts"])
app.include_router(reports.router,      prefix="/api/reports",       tags=["Reports"])
app.include_router(graph.router,        prefix="/api/graph",         tags=["Graph"])
app.include_router(ws_router)


@app.on_event("startup")
async def startup():
    await init_db()
    from db.postgres import seed_demo_data   # ADD THIS LINE
    await seed_demo_data()                      # ADD THIS LINE
    print("Database ready.")
    try:
        from db.neo4j_client import init_neo4j
        await init_neo4j()
    except Exception as e:
        print(f"Neo4j not available (demo mode): {e}")
@app.get("/api/health")
async def health():
    return {"status": "ok", "version": "1.0.0", "model": "GNN v2.4"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)