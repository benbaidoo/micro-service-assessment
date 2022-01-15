from fastapi import FastAPI
import uvicorn
from datetime import datetime

PORT = 8002
HOST = 'localhost'

app = FastAPI()

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