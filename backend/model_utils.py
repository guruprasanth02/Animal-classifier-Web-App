import joblib
import os

# Get the absolute path to the directory containing this file
_BACKEND_DIR = os.path.dirname(os.path.abspath(__file__))
_MODELS_DIR = os.path.join(_BACKEND_DIR, "models")

# Map frontend model names to actual model filenames
_MODEL_NAME_MAP = {
    'logistic_regression': 'logistic',
    'decision_tree': 'tree',
    'random_forest': 'forest',
    'k_nearest_neighbors': 'knn',
    'support_vector_machine': 'svm',
}

def load_model(name):
    # Map the frontend model name to the actual file name
    file_name = _MODEL_NAME_MAP.get(name, name)
    model_path = os.path.join(_MODELS_DIR, f"{file_name}.pkl")
    return joblib.load(model_path)

def predict(model, features):
    label = model.predict([features])[0]
    prob = model.predict_proba([features])[0].max()
    return label, prob
