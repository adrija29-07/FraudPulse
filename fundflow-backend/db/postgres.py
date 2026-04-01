# ============================================================
# db/postgres.py  —  Database models (SQLite for demo)
# Save this at:  fundflow-backend/db/postgres.py
# ============================================================
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, sessionmaker
from sqlalchemy import String, Float, Integer, DateTime, Boolean, Text
from datetime import datetime
from typing import AsyncGenerator, Optional
import os

# Uses SQLite by default — no separate DB server needed!
DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "sqlite+aiosqlite:///./fundflow.db"
)

engine            = create_async_engine(DATABASE_URL, echo=False)
AsyncSessionLocal = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)


class Base(DeclarativeBase):
    pass


# ---- Account model ----------------------------------------
class Account(Base):
    __tablename__ = "accounts"

    id:              Mapped[str]           = mapped_column(String(10),  primary_key=True)
    name:            Mapped[str]           = mapped_column(String(100))
    type:            Mapped[str]           = mapped_column(String(20))
    risk:            Mapped[str]           = mapped_column(String(20))
    risk_score:      Mapped[int]           = mapped_column(Integer)
    declared_income: Mapped[str]           = mapped_column(String(20),  default="Not Declared")
    inflow_30d:      Mapped[str]           = mapped_column(String(20),  default="0")
    outflow_30d:     Mapped[str]           = mapped_column(String(20),  default="0")
    connections:     Mapped[int]           = mapped_column(Integer,     default=0)
    branch:          Mapped[str]           = mapped_column(String(50),  default="Mumbai Central")
    kyc_status:      Mapped[str]           = mapped_column(String(20),  default="Verified")
    created_at:      Mapped[datetime]      = mapped_column(DateTime,    default=datetime.utcnow)


# ---- Transaction model ------------------------------------
class Transaction(Base):
    __tablename__ = "transactions"

    id:          Mapped[int]   = mapped_column(Integer, primary_key=True, autoincrement=True)
    source_id:   Mapped[str]   = mapped_column(String(10))
    target_id:   Mapped[str]   = mapped_column(String(10))
    amount:      Mapped[float] = mapped_column(Float)
    channel:     Mapped[str]   = mapped_column(String(10))
    txn_time:    Mapped[str]   = mapped_column(String(10))
    txn_date:    Mapped[str]   = mapped_column(String(20), default="2026-03-14")
    flagged:     Mapped[bool]  = mapped_column(Boolean,   default=False)
    pattern_tag: Mapped[Optional[str]] = mapped_column(String(50), nullable=True)


# ---- Alert model ------------------------------------------
class Alert(Base):
    __tablename__ = "alerts"

    id:           Mapped[int]  = mapped_column(Integer, primary_key=True, autoincrement=True)
    account_id:   Mapped[str]  = mapped_column(String(10))
    name:         Mapped[str]  = mapped_column(String(100))
    desc:         Mapped[str]  = mapped_column(Text)
    amount:       Mapped[str]  = mapped_column(String(20))
    risk_level:   Mapped[str]  = mapped_column(String(20))
    amount_class: Mapped[str]  = mapped_column(String(10))
    resolved:     Mapped[bool] = mapped_column(Boolean, default=False)
    created_at:   Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


# ---- Case model -------------------------------------------
class Case(Base):
    __tablename__ = "cases"

    id:          Mapped[str]            = mapped_column(String(20), primary_key=True)
    pattern:     Mapped[str]            = mapped_column(String(50))
    risk_score:  Mapped[int]            = mapped_column(Integer)
    amount:      Mapped[float]          = mapped_column(Float)
    status:      Mapped[str]            = mapped_column(String(20), default="open")
    assigned_to: Mapped[Optional[str]]  = mapped_column(String(50), nullable=True)
    created_at:  Mapped[datetime]       = mapped_column(DateTime,   default=datetime.utcnow)
    notes:       Mapped[Optional[str]]  = mapped_column(Text,       nullable=True)


# ---- Session dependency -----------------------------------
async def get_db() -> AsyncGenerator[AsyncSession, None]:
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise


async def init_db():
    """Create all tables on startup."""
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    print("SQLite tables created / verified.")


# ---- Seed demo data ---------------------------------------
async def seed_demo_data():
    """Insert synthetic accounts and alerts for demo."""
    async with AsyncSessionLocal() as session:
        # Check if already seeded
        from sqlalchemy import select, func
        count = await session.execute(select(func.count()).select_from(Account))
        if count.scalar() > 0:
            return  # Already seeded

        accounts = [
            Account(id="A001", name="Rajesh Mehta",    type="Corporate", risk="fraud",      risk_score=84, declared_income="6,00,000",   inflow_30d="18,45,000", outflow_30d="17,80,000", connections=5),
            Account(id="A002", name="Shell Corp A",    type="Corporate", risk="fraud",      risk_score=92, declared_income="Not Declared",inflow_30d="12,30,000", outflow_30d="12,25,000", connections=3),
            Account(id="A003", name="Dormant 7823",    type="Savings",   risk="suspicious", risk_score=71, declared_income="2,50,000",    inflow_30d="9,80,000",  outflow_30d="9,75,000",  connections=2),
            Account(id="A004", name="Partner Entity B",type="Current",   risk="suspicious", risk_score=65, declared_income="15,00,000",   inflow_30d="8,40,000",  outflow_30d="7,90,000",  connections=4),
            Account(id="A005", name="Priya Sharma",    type="Savings",   risk="clean",      risk_score=12, declared_income="8,00,000",    inflow_30d="3,20,000",  outflow_30d="2,80,000",  connections=3),
            Account(id="A007", name="Kumar Trading",   type="Corporate", risk="suspicious", risk_score=58, declared_income="20,00,000",   inflow_30d="14,50,000", outflow_30d="14,20,000", connections=6),
            Account(id="A010", name="Fast Traders LLC",type="Corporate", risk="suspicious", risk_score=62, declared_income="50,00,000",   inflow_30d="32,00,000", outflow_30d="31,50,000", connections=7),
            Account(id="A012", name="Shell Corp B",    type="Corporate", risk="fraud",      risk_score=88, declared_income="Not Declared",inflow_30d="8,90,000",  outflow_30d="8,85,000",  connections=3),
            Account(id="A016", name="Mule Account X1", type="Savings",  risk="fraud",      risk_score=95, declared_income="1,80,000",    inflow_30d="45,00,000", outflow_30d="44,90,000", connections=8),
            Account(id="A017", name="Deepak Exports",  type="Corporate", risk="suspicious", risk_score=55, declared_income="80,00,000",   inflow_30d="42,00,000", outflow_30d="41,00,000", connections=6),
        ]
        session.add_all(accounts)

        txns = [
            Transaction(source_id="A001", target_id="A002", amount=495000, channel="NEFT", txn_time="09:15", flagged=True,  pattern_tag="round_trip"),
            Transaction(source_id="A002", target_id="A003", amount=490000, channel="RTGS", txn_time="10:42", flagged=True,  pattern_tag="round_trip"),
            Transaction(source_id="A003", target_id="A004", amount=485000, channel="NEFT", txn_time="14:08", flagged=True,  pattern_tag="round_trip"),
            Transaction(source_id="A004", target_id="A001", amount=480000, channel="UPI",  txn_time="17:55", flagged=True,  pattern_tag="round_trip"),
            Transaction(source_id="A007", target_id="A010", amount=350000, channel="RTGS", txn_time="08:30", flagged=True,  pattern_tag="mule_network"),
            Transaction(source_id="A010", target_id="A012", amount=340000, channel="NEFT", txn_time="09:45", flagged=True,  pattern_tag="mule_network"),
            Transaction(source_id="A012", target_id="A016", amount=335000, channel="RTGS", txn_time="11:00", flagged=True,  pattern_tag="mule_network"),
            Transaction(source_id="A016", target_id="A007", amount=330000, channel="UPI",  txn_time="13:30", flagged=True,  pattern_tag="mule_network"),
            Transaction(source_id="A001", target_id="A002", amount=49900,  channel="ATM",  txn_time="08:30", flagged=True,  pattern_tag="structuring"),
            Transaction(source_id="A001", target_id="A002", amount=49800,  channel="ATM",  txn_time="09:15", flagged=True,  pattern_tag="structuring"),
            Transaction(source_id="A005", target_id="A007", amount=75000,  channel="UPI",  txn_time="11:20", flagged=False, pattern_tag=None),
        ]
        session.add_all(txns)

        alert_list = [
            Alert(account_id="A001", name="Rajesh Mehta Enterprises", desc="Round-trip pattern · 4 accounts · 3 hops",      amount="18,45,000", risk_level="critical", amount_class="outflow"),
            Alert(account_id="A016", name="Mule Account X1",          desc="Volume anomaly · 45L through student account",  amount="45,00,000", risk_level="critical", amount_class="outflow"),
            Alert(account_id="A002", name="Shell Corp A",              desc="No business purpose · rapid layering",          amount="12,30,000", risk_level="critical", amount_class="outflow"),
            Alert(account_id="A012", name="Shell Corp B",              desc="Circular fund flow to mule network",            amount="8,90,000",  risk_level="critical", amount_class="outflow"),
            Alert(account_id="A007", name="Kumar Trading Co.",         desc="High velocity · 32 txns in 2 hours",            amount="14,50,000", risk_level="high",     amount_class="outflow"),
            Alert(account_id="A003", name="Dormant A/C 7823",          desc="Dormant 18 months, sudden 9.8L inflow",         amount="9,80,000",  risk_level="high",     amount_class="inflow"),
            Alert(account_id="A004", name="Partner Entity B",          desc="Profile mismatch · declared 15L actual 8.4L",   amount="8,40,000",  risk_level="medium",   amount_class="inflow"),
            Alert(account_id="A017", name="Deepak Exports",            desc="Cross-border spike · 3x baseline",              amount="42,00,000", risk_level="medium",   amount_class="outflow"),
        ]
        session.add_all(alert_list)

        session.add(Case(
            id="FD-2026-00842",
            pattern="Round-Trip Fund Transfer",
            risk_score=84,
            amount=1845000,
            status="in_review",
            assigned_to="Priya Sharma",
        ))

        await session.commit()
        print("Demo data seeded.")