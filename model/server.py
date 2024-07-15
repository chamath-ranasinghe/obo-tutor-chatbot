from fastapi import FastAPI
from pydantic import BaseModel
from app_to_client import run_model
from fastapi.middleware.cors import CORSMiddleware



class Request(BaseModel):
    session_id:str
    user_id:str
    input_text:str

app = FastAPI()

# Allowing Cross Origin Resource Sharing
origins = [
    "http://localhost:3000",  # React dev server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows requests from the specified origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all HTTP headers
)

@app.post("/run-model")
async def process_input(req:Request):
    session_id = req.session_id
    user_id = req.user_id
    input_text = req.input_text
    response = run_model(session_id,user_id,input_text)
    return(response)

# Run the app using Uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
