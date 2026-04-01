# ============================================================
# ml/redis_cache.py  —  Redis caching (with fallback)
# Save this at:  fundflow-backend/ml/redis_cache.py
# NOTE: Falls back to in-memory dict if Redis not installed.
# ============================================================
import json
import os
from typing import Any, Optional

REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")

# In-memory fallback cache (used when Redis is not available)
_memory_cache: dict = {}
_redis = None
_redis_available = False


async def _get_redis():
    global _redis, _redis_available
    if _redis is not None:
        return _redis
    try:
        import redis.asyncio as redis_lib
        _redis = redis_lib.from_url(REDIS_URL, decode_responses=True)
        await _redis.ping()
        _redis_available = True
        return _redis
    except Exception:
        _redis_available = False
        return None


async def cache_get(key: str) -> Optional[Any]:
    r = await _get_redis()
    if r and _redis_available:
        try:
            val = await r.get(key)
            return json.loads(val) if val else None
        except Exception:
            pass
    # Fallback to memory
    return _memory_cache.get(key)


async def cache_set(key: str, value: Any, ttl: int = 60) -> bool:
    r = await _get_redis()
    if r and _redis_available:
        try:
            await r.setex(key, ttl, json.dumps(value))
            return True
        except Exception:
            pass
    # Fallback to memory
    _memory_cache[key] = value
    return True


async def cache_delete(key: str) -> bool:
    if key in _memory_cache:
        del _memory_cache[key]
    r = await _get_redis()
    if r and _redis_available:
        try:
            await r.delete(key)
        except Exception:
            pass
    return True


# Specific helpers
async def get_cached_alerts() -> Optional[list]:
    return await cache_get("alerts:active")

async def set_cached_alerts(alerts: list) -> bool:
    return await cache_set("alerts:active", alerts, ttl=10)

async def get_cached_patterns() -> Optional[dict]:
    return await cache_get("patterns:all")

async def set_cached_patterns(patterns: dict) -> bool:
    return await cache_set("patterns:all", patterns, ttl=60)