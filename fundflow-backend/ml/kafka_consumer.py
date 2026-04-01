# ============================================================
# ml/kafka_consumer.py  —  Kafka consumer (with fallback)
# Save this at:  fundflow-backend/ml/kafka_consumer.py
# NOTE: Skipped gracefully if Kafka is not running.
# ============================================================
import asyncio
import os
import logging

logger = logging.getLogger(__name__)
KAFKA_BOOTSTRAP = os.getenv("KAFKA_BOOTSTRAP", "localhost:9092")


async def start_kafka_pipeline(on_alert=None):
    """
    Start Kafka consumer pipeline.
    Skips silently if Kafka is not running — demo mode works without it.
    """
    try:
        from aiokafka import AIOKafkaConsumer
        consumer = AIOKafkaConsumer(
            "fundflow.transactions",
            bootstrap_servers=KAFKA_BOOTSTRAP,
            group_id="fundflow-detector",
        )
        await consumer.start()
        logger.info("Kafka consumer started.")
        asyncio.create_task(_consume_loop(consumer, on_alert))
    except ImportError:
        logger.info("aiokafka not installed — running without Kafka streaming.")
    except Exception as e:
        logger.info(f"Kafka not available (demo mode): {e}")


async def _consume_loop(consumer, on_alert):
    import json
    try:
        async for msg in consumer:
            txn = json.loads(msg.value)
            amount  = txn.get("amount", 0)
            channel = txn.get("channel", "")
            if channel == "ATM" and 40_000 <= amount < 50_000 and on_alert:
                await on_alert({
                    "type": "structuring",
                    "account_id": txn.get("source"),
                    "amount": amount,
                    "confidence": 0.82,
                    "pattern": "Structuring",
                })
    except Exception as e:
        logger.error(f"Kafka consumer error: {e}")
    finally:
        await consumer.stop()