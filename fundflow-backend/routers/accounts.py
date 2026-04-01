# ============================================================
# routers/accounts.py  —  Account endpoints
# Save this at:  fundflow-backend/routers/accounts.py
# ============================================================
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

from db.postgres import get_db, Account as AccountModel

router = APIRouter()


class AccountOut(BaseModel):
    id: str
    name: str
    type: str
    risk: str
    risk_score: int
    declared_income: str
    inflow_30d: str
    outflow_30d: str
    connections: int
    branch: str
    kyc_status: str

    class Config:
        from_attributes = True


@router.get("/", response_model=List[AccountOut])
async def list_accounts(
    risk:   Optional[str] = Query(None),
    search: Optional[str] = Query(None),
    limit:  int           = Query(100, le=500),
    db:     AsyncSession  = Depends(get_db),
):
    q = select(AccountModel)
    if risk:
        q = q.where(AccountModel.risk == risk)
    if search:
        q = q.where(AccountModel.name.ilike(f"%{search}%"))
    q = q.limit(limit).order_by(AccountModel.risk_score.desc())
    result = await db.execute(q)
    return result.scalars().all()


@router.get("/{account_id}", response_model=AccountOut)
async def get_account(account_id: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(AccountModel).where(AccountModel.id == account_id))
    acc = result.scalar_one_or_none()
    if not acc:
        raise HTTPException(status_code=404, detail="Account not found")
    return acc


@router.get("/{account_id}/risk-explanation")
async def risk_explanation(account_id: str):
    from ml.gnn_model import get_shap_explanation
    return get_shap_explanation(account_id)


@router.get("/{account_id}/next-hops")
async def next_hops(account_id: str):
    from db.neo4j_client import predict_next_hops
    hops = await predict_next_hops(account_id)
    return {"account_id": account_id, "predicted_hops": hops}