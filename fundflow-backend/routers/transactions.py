# ============================================================
# routers/transactions.py  —  Transaction endpoints
# Save this at:  fundflow-backend/routers/transactions.py
# ============================================================
from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func
from typing import List, Optional
from pydantic import BaseModel

from db.postgres import get_db, Transaction as TxnModel

router = APIRouter()


class TxnOut(BaseModel):
    id: int
    source_id: str
    target_id: str
    amount: float
    channel: str
    txn_time: str
    txn_date: str
    flagged: bool
    pattern_tag: Optional[str]

    class Config:
        from_attributes = True


@router.get("/", response_model=List[TxnOut])
async def list_transactions(
    account_id: Optional[str]  = Query(None),
    flagged:    Optional[bool] = Query(None),
    channel:    Optional[str]  = Query(None),
    limit:      int            = Query(200, le=1000),
    db:         AsyncSession   = Depends(get_db),
):
    q = select(TxnModel)
    if account_id:
        from sqlalchemy import or_
        q = q.where(or_(TxnModel.source_id == account_id,
                        TxnModel.target_id == account_id))
    if flagged is not None:
        q = q.where(TxnModel.flagged == flagged)
    if channel:
        q = q.where(TxnModel.channel == channel)
    q = q.limit(limit).order_by(TxnModel.amount.desc())
    result = await db.execute(q)
    return result.scalars().all()


@router.get("/stats")
async def stats(db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(
            func.count(TxnModel.id).label("total"),
            func.sum(TxnModel.amount).label("volume"),
            func.count(TxnModel.id).filter(TxnModel.flagged == True).label("flagged"),
        )
    )
    row = result.one()
    return {
        "total_transactions": row.total or 0,
        "total_volume": row.volume or 0,
        "flagged_count": row.flagged or 0,
    }