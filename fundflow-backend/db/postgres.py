from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime
from datetime import datetime

DATABASE_URL = "sqlite+aiosqlite:///./fundflow.db"

engine = create_async_engine(DATABASE_URL, echo=False)
AsyncSessionLocal = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

Base = declarative_base()

class Account(Base):
    __tablename__ = "accounts"
    id = Column(String, primary_key=True, index=True)
    name = Column(String)
    type = Column(String)
    risk = Column(String)
    risk_score = Column(Integer)
    declared_income = Column(String)
    inflow_30d = Column(String)
    outflow_30d = Column(String)
    connections = Column(Integer)
    branch = Column(String)
    kyc_status = Column(String)

class Transaction(Base):
    __tablename__ = "transactions"
    id = Column(Integer, primary_key=True, index=True)
    source_id = Column(String)
    target_id = Column(String)
    amount = Column(Float)
    channel = Column(String)
    txn_time = Column(String)
    txn_date = Column(String)
    flagged = Column(Boolean, default=False)
    pattern_tag = Column(String, nullable=True)

class Alert(Base):
    __tablename__ = "alerts"
    id = Column(Integer, primary_key=True, index=True)
    account_id = Column(String)
    name = Column(String)
    desc = Column(String)
    amount = Column(String)
    risk_level = Column(String)
    amount_class = Column(String)
    resolved = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)

async def get_db():
    async with AsyncSessionLocal() as session:
        yield session

async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
