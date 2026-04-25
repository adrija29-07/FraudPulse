from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

from db.postgres import init_db
from routers import accounts, alerts, graph, reports, transactions
from ws import stream

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize database tables on startup
    await init_db()
    yield
    # Clean up on shutdown if needed

app = FastAPI(title="FundFlow Backend", lifespan=lifespan)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include HTTP routers
app.include_router(accounts.router, prefix="/api/accounts", tags=["accounts"])
app.include_router(transactions.router, prefix="/api/transactions", tags=["transactions"])
app.include_router(alerts.router, prefix="/api/alerts", tags=["alerts"])
app.include_router(graph.router, prefix="/api/graph", tags=["graph"])
app.include_router(reports.router, prefix="/api/reports", tags=["reports"])

# Include WebSocket router (stream.py handles its own prefix /ws/stream)
app.include_router(stream.router, tags=["websocket"])

@app.get("/")
async def root():
    return {"message": "FundFlow Backend API is running"}
