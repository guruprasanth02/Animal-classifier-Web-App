from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
import joblib, os
import numpy as np
from preprocessing import extract_color_histogram

_BACKEND_DIR = os.path.dirname(os.path.abspath(__file__))

def load_dataset(data_dir):
    X, y = [], []
    for label in os.listdir(data_dir):
        folder = os.path.join(data_dir, label)
        for img_file in os.listdir(folder):
            img_path = os.path.join(folder, img_file)
            with open(img_path, 'rb') as f:
                features = extract_color_histogram(f)
            X.append(features)
            y.append(label)
    return np.array(X), np.array(y)

images_dir = os.path.join(_BACKEND_DIR, "images")
X_train, y_train = load_dataset(images_dir)

models = {
    "logistic": LogisticRegression(max_iter=1000),
    "tree": DecisionTreeClassifier(),
    "forest": RandomForestClassifier(),
    "knn": KNeighborsClassifier(),
    "svm": SVC(probability=True)
}

for name, model in models.items():
    model.fit(X_train, y_train)
    models_dir = os.path.join(_BACKEND_DIR, "models")
    os.makedirs(models_dir, exist_ok=True)
    model_path = os.path.join(models_dir, f"{name}.pkl")
    joblib.dump(model, model_path)

print("Models trained and saved successfully.")
