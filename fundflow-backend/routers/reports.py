# ============================================================
# routers/reports.py  —  STR report + AI chat endpoint
# Powered by Google Gemini API
# ============================================================
from fastapi import APIRouter, HTTPException

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

AI_SYSTEM_CHAT = """You are FraudPulse AI — an expert AML (Anti-Money Laundering) co-investigator 
for bank analysts. You assist in fraud detection, pattern analysis, and case building.
When asked about accounts, transactions, or fraud patterns, provide precise forensic analysis.
Cite risk scores, amounts, and timelines. Be concise but thorough."""


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


def _get_gemini_client(api_key: str):
    """Initialize and return a Gemini GenerativeModel."""
    import google.generativeai as genai
    genai.configure(api_key=api_key)
    return genai.GenerativeModel("gemini-1.5-flash")


@router.post("/generate")
async def generate_report(req: ReportRequest):
    """Generate STR report using Google Gemini API."""
    api_key = os.getenv("GOOGLE_API_KEY", "")

    if not api_key:
        return {
            "case_id": req.case_id,
            "report":  _demo_report(req),
            "model":   "demo-mode",
            "tokens_used": 0
        }

    try:
        model = _get_gemini_client(api_key)
        prompt = (
            f"{DEFAULT_SYSTEM}\n\n"
            f"Generate a complete FIU-IND Suspicious Transaction Report for:\n"
            f"Case ID: {req.case_id}\n"
            f"Pattern: {req.pattern}\n"
            f"Risk Score: {req.risk_score}/100\n"
            f"Total Amount: Rs {req.total_amount:,.0f}\n"
            f"Accounts involved: {len(req.accounts)}\n"
        )
        if req.additional_notes:
            prompt += f"Additional Notes: {req.additional_notes}\n"

        response = model.generate_content(prompt)
        return {
            "case_id":     req.case_id,
            "report":      response.text,
            "model":       "gemini-1.5-flash",
            "tokens_used": response.usage_metadata.total_token_count if hasattr(response, 'usage_metadata') else 0,
        }
    except Exception as e:
        error_msg = str(e)
        if "API_KEY_INVALID" in error_msg or "403" in error_msg:
            return {"case_id": req.case_id, "report": _demo_report(req), "model": "demo-mode (invalid key)"}
        raise HTTPException(500, f"Report generation failed: {error_msg}")


@router.post("/chat")
async def ai_chat(req: ChatRequest):
    """
    AI co-investigator chat endpoint.
    Frontend sends messages here → backend calls Google Gemini → returns reply.
    """
    api_key = os.getenv("GOOGLE_API_KEY", "")

    if not api_key:
        return {
            "reply": (
                "Google Gemini API key not configured.\n\n"
                "To fix this:\n"
                "1. Open fundflow-backend/.env\n"
                "2. Add: GOOGLE_API_KEY=your_key_here\n"
                "3. Get your key from: aistudio.google.com/app/apikey"
            )
        }

    try:
        import google.generativeai as genai
        genai.configure(api_key=api_key)

        system_prompt = req.case_context.get("system_prompt", AI_SYSTEM_CHAT)

        # Build conversation history for Gemini
        history = []
        messages = [m for m in req.messages if m.get("role") in ("user", "assistant") and m.get("content")]

        if not messages:
            return {"reply": "No message received."}

        # Convert to Gemini chat format
        for m in messages[:-1]:
            role = "user" if m["role"] == "user" else "model"
            history.append({"role": role, "parts": [m["content"]]})

        model = genai.GenerativeModel(
            model_name="gemini-1.5-flash",
            system_instruction=system_prompt
        )
        chat = model.start_chat(history=history)
        last_msg = messages[-1]["content"]
        response = chat.send_message(last_msg)

        return {"reply": response.text}

    except Exception as e:
        error_msg = str(e)
        if "API_KEY_INVALID" in error_msg or "403" in error_msg:
            return {"reply": "Invalid Google API key. Check your key at aistudio.google.com and update .env"}
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

NOTE: Add GOOGLE_API_KEY to fundflow-backend/.env for real AI-generated reports."""