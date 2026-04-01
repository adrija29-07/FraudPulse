# ============================================================
# ws/stream.py  —  WebSocket real-time transaction stream
# Save this at:  fundflow-backend/ws/stream.py
# ============================================================
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from typing import List
import asyncio
import json
import random
from datetime import datetime

router = APIRouter()


class ConnectionManager:
    def __init__(self):
        self.active: List[WebSocket] = []

    async def connect(self, ws: WebSocket):
        await ws.accept()
        self.active.append(ws)
        print(f"WS: client connected ({len(self.active)} total)")

    def disconnect(self, ws: WebSocket):
        if ws in self.active:
            self.active.remove(ws)
        print(f"WS: client disconnected ({len(self.active)} remaining)")

    async def broadcast(self, message: dict):
        data = json.dumps(message)
        dead = []
        for ws in self.active:
            try:
                await ws.send_text(data)
            except Exception:
                dead.append(ws)
        for ws in dead:
            if ws in self.active:
                self.active.remove(ws)


manager = ConnectionManager()

ACCOUNTS  = ["A001","A002","A003","A004","A005","A007","A010","A012","A016","A017"]
CHANNELS  = ["NEFT","RTGS","UPI","ATM"]
PATTERNS  = ["Round-Trip","Structuring","Velocity","Profile Mismatch","Dormant Activation"]


async def live_stream_simulation():
    """
    Simulates live transaction stream every 3-8 seconds.
    In production: replace with aiokafka consumer reading from Kafka.
    """
    while True:
        await asyncio.sleep(random.uniform(3, 8))
        if not manager.active:
            continue

        src    = random.choice(ACCOUNTS)
        tgt    = random.choice([a for a in ACCOUNTS if a != src])
        amount = random.randint(10_000, 5_000_000)
        is_suspicious = amount > 2_000_000 or src in ("A001","A002","A016")

        # Broadcast transaction
        await manager.broadcast({
            "type": "transaction",
            "data": {
                "id":      f"TXN-{random.randint(100000,999999)}",
                "source":  src,
                "target":  tgt,
                "amount":  amount,
                "channel": random.choice(CHANNELS),
                "time":    datetime.now().strftime("%H:%M:%S"),
                "flagged": is_suspicious,
            }
        })

        # Occasionally broadcast a fraud alert
        if is_suspicious and random.random() > 0.6:
            await asyncio.sleep(0.5)
            await manager.broadcast({
                "type": "alert",
                "data": {
                    "account_id": src,
                    "pattern":    random.choice(PATTERNS),
                    "confidence": round(random.uniform(0.65, 0.97), 2),
                    "amount":     amount,
                    "time":       datetime.now().strftime("%H:%M:%S"),
                }
            })


_simulation_started = False


@router.websocket("/ws/stream")
async def websocket_stream(ws: WebSocket):
    """
    WebSocket endpoint for live transaction + alert stream.
    Connect from browser: new WebSocket('ws://localhost:8000/ws/stream')
    Message types: 'transaction' | 'alert' | 'connected' | 'pong'
    """
    global _simulation_started
    await manager.connect(ws)

    # Send welcome message
    await ws.send_text(json.dumps({
        "type": "connected",
        "data": {
            "message": "FundFlow live stream connected",
            "clients": len(manager.active),
        }
    }))

    # Start simulation only once
    if not _simulation_started:
        _simulation_started = True
        asyncio.create_task(live_stream_simulation())

    try:
        while True:
            data = await ws.receive_text()
            cmd  = json.loads(data)
            if cmd.get("action") == "ping":
                await ws.send_text(json.dumps({"type": "pong"}))
            elif cmd.get("action") == "freeze_account":
                await manager.broadcast({
                    "type": "account_frozen",
                    "data": {
                        "account_id": cmd.get("account_id"),
                        "by": "analyst",
                        "time": datetime.now().strftime("%H:%M:%S"),
                    }
                })
    except WebSocketDisconnect:
        manager.disconnect(ws)