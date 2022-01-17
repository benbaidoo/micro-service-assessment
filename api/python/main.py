from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
# from datetime import datetime

PORT = 8002
# HOST = 'localhost'
HOST = '0.0.0.0'

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

class Counter():
    count = 0

counter = Counter()
@app.get("/")
async def root():
    return {"message":"Hello World"}

# returns the current timestamp
@app.get("/counter")
def get_count():
    counter.count +=1
    return { "data": { "count": counter.count}}

if __name__ == '__main__':
    uvicorn.run(app, port=PORT, host=HOST)