# ============================================================
# routers/reports.py  —  STR report + AI chat endpoint
# Save this at:  fundflow-backend/routers/reports.py
# ============================================================
from fastapi import APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
import os

router = APIRouter()

DEFAULT_SYSTEM = """You are an expert financial crime analyst generating Suspicious Transaction Reports
(STR) for submission to FIU-IND under PMLA 2002.
Generate professional, legally precise reports with:
- Case reference and timeline
- Subject details and KYC status
- Pattern description with specific transaction steps
- Red flags identified
- Regulatory basis (PMLA 2002 sections)
- Recommended actions
Be factual, cite specific amounts and timestamps."""


class ReportRequest(BaseModel):
    case_id:          str
    pattern:          str
    risk_score:       int
    total_amount:     float
    accounts:         List[dict] = []
    transactions:     List[dict] = []
    additional_notes: Optional[str] = None


class ChatRequest(BaseModel):
    messages:     List[dict]
    case_context: dict = {}


@router.post("/generate")
async def generate_report(req: ReportRequest):
    """Generate STR report using Anthropic API."""
    api_key = os.getenv("ANTHROPIC_API_KEY", "")

    if not api_key or "YOUR-KEY-HERE" in api_key:
        return {
            "case_id": req.case_id,
            "report":  _demo_report(req),
            "model":   "demo-mode — add ANTHROPIC_API_KEY to .env",
        }
    try:
        import anthropic
        client = anthropic.Anthropic(api_key=api_key)
        prompt = (
            f"Generate a complete FIU-IND Suspicious Transaction Report for:\n"
            f"Case ID: {req.case_id}\n"
            f"Pattern: {req.pattern}\n"
            f"Risk Score: {req.risk_score}/100\n"
            f"Total Amount: Rs {req.total_amount:,.0f}\n"
            f"Accounts involved: {len(req.accounts)}\n"
        )
        if req.additional_notes:
            prompt += f"Notes: {req.additional_notes}\n"

        message = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=2000,
            system=DEFAULT_SYSTEM,
            messages=[{"role": "user", "content": prompt}],
        )
        return {
            "case_id":     req.case_id,
            "report":      message.content[0].text,
            "model":       "claude-sonnet-4-20250514",
            "tokens_used": message.usage.output_tokens,
        }
    except Exception as e:
        raise HTTPException(500, f"Report generation failed: {str(e)}")


@router.post("/chat")
async def ai_chat(req: ChatRequest):
    """
    AI co-investigator chat endpoint.
    Frontend sends messages here → backend calls Anthropic → returns reply.
    This avoids CORS issues with direct browser-to-Anthropic calls.
    """
    api_key = os.getenv("ANTHROPIC_API_KEY", "")

    if not api_key or "YOUR-KEY-HERE" in api_key:
        return {
            "reply": (
                "Anthropic API key not configured.\n\n"
                "To fix this:\n"
                "1. Open fundflow-backend/.env\n"
                "2. Replace sk-ant-YOUR-KEY-HERE with your real key\n"
                "3. Get your key from: console.anthropic.com/settings/keys\n"
                "4. Save .env and restart uvicorn (Ctrl+C then uvicorn main:app --reload --port 8000)"
            )
        }

    try:
        import anthropic
        client = anthropic.Anthropic(api_key=api_key)

        # Use system prompt from request if provided, else use default
        system_prompt = req.case_context.get("system_prompt", DEFAULT_SYSTEM)

        # Clean messages — only keep role + content
        clean_messages = [
            {"role": m["role"], "content": m["content"]}
            for m in req.messages
            if m.get("role") in ("user", "assistant") and m.get("content")
        ]

        if not clean_messages:
            return {"reply": "No message received."}

        response = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=1000,
            system=system_prompt,
            messages=clean_messages,
        )
        return {"reply": response.content[0].text}

    except Exception as e:
        error_msg = str(e)
        if "401" in error_msg or "authentication" in error_msg.lower():
            return {"reply": "Invalid API key. Check your key at console.anthropic.com and update .env"}
        raise HTTPException(500, f"AI chat failed: {error_msg}")


def _demo_report(req: ReportRequest) -> str:
    return f"""SUSPICIOUS TRANSACTION REPORT (STR)
FIU-IND Reference Format

Case Reference: {req.case_id}
Pattern: {req.pattern}
Risk Score: {req.risk_score}/100
Total Amount: Rs {req.total_amount:,.0f}

EXECUTIVE SUMMARY
Suspicious circular fund flow detected across 4 accounts.
Total Rs 18,45,000 cycled in 8h 40m on 14 March 2026.

TRANSACTION SEQUENCE
Step 1: Rs 4,95,000 Rajesh Mehta to Shell Corp A via NEFT at 09:15
Step 2: Rs 4,90,000 Shell Corp A to Dormant 7823 via RTGS at 10:42
Step 3: Rs 4,85,000 Dormant 7823 to Partner Entity B via NEFT at 14:08
Step 4: Rs 4,80,000 Partner Entity B to Rajesh Mehta via UPI at 17:55

RED FLAGS
- Round-trip in 8h 40m, Rs 15,000 lost in transit
- Income mismatch factor 3.07x
- Shell entity with no declared business purpose
- Dormant account activated for high-value transfer
- Structuring: two sub-Rs 50,000 ATM withdrawals

RECOMMENDATION
Immediate STR filing with FIU-IND under PMLA 2002 Section 12.

NOTE: Add ANTHROPIC_API_KEY to fundflow-backend/.env for real AI-generated reports."""