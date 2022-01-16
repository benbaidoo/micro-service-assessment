from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from datetime import datetime

PORT = 8002
HOST = 'localhost'

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_headers=["*"]
)

@app.get("/")
async def root():
    return {"message":"Hello World"}

# returns the current timestamp
@app.get("/time")
def time():
    now = datetime.utcnow().isoformat()
    # { data: { timestamp: ''}}
    return { "data": { "timestamp": now}}

if __name__ == '__main__':
    uvicorn.run(app, port=PORT, host=HOST)