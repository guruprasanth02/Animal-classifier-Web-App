import sys
import os
# Add the backend directory to the Python path to ensure modules are found
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from preprocessing import extract_color_histogram
from model_utils import load_model, predict
import io

# Allow wildcard CORS for deployment (can be restricted later)
import os

app = FastAPI()

# Add CORS middleware to allow requests from your React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for deployment; restrict later with specific frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
async def classify_animal(file: UploadFile = File(...), model_name: str = Form(...)):
    # Read the uploaded image file into an in-memory stream
    image_data = await file.read()
    image_stream = io.BytesIO(image_data)

    # Extract features directly from the image stream
    features = extract_color_histogram(image_stream)
    
    model = load_model(model_name)
    label, prob = predict(model, features)
    
    return {"predicted_animal": label, "confidence": float(prob)}