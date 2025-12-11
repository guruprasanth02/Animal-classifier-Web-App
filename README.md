# 🐾 Animal Classifier Web App

A beginner-friendly machine learning project that lets users upload animal images and classify them using traditional ML models like Logistic Regression, Decision Trees, Random Forests, k-NN, and SVM — no deep learning required!

---

## 🎯 Project Goals

- Teach image classification using traditional ML models for animals
- Allow users to select models and compare predictions
- Build a complete web app using React (frontend) and FastAPI (backend)

---

## 🧠 What You'll Learn

- How to extract features from images (color histograms)
- How to train and compare multiple ML models
- How to build a REST API with FastAPI
- How to create a React frontend to interact with ML models
- How to deploy and test a full-stack ML application

---

## 🗂️ Project Structure

```bash
animal-classifier/
├── backend/ 
 ├── main.py # FastAPI app 
 ├── train_models.py # Train and save models 
 ├── preprocessing.py # Image feature extraction 
 ├── model_utils.py # Load and predict 
 └── models/ # Saved .pkl models 
 └── images/ #dataset

├── frontend/ 
│ ├── src/ 
│ │ ├── App.js 
│ │ └── components/ 
│ └── public/ 
└── README.md 
```
---

## 🚀 Getting Started

### 🔧 Prerequisites

- Python 3.8+
- Node.js + npm
- Git
- Basic command line usage

---

### 🐍 Backend Setup (FastAPI)

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/animal-classifier.git
   cd animal-classifier/backend
   ```
2. **Install dependencies**

```bash
pip install fastapi uvicorn scikit-learn joblib Pillow numpy
```
3. **Download dataset**

Go to Kaggle Dataset(https://www.kaggle.com/datasets/shreyapmaher/fruits-dataset-images)

Place it inside backend/ 

4. **Train models**

```bash
python train_models.py
```
5. **Run backend**

```bash
uvicorn main:app --reload
```
---
### Clean React Frontend Setup (Step-by-Step)
🧼 1. **Create the React App**
Open your terminal and run:

```bash
npx create-react-app animal-classifier-frontend
```
This scaffolds a working React app with everything preconfigured.

📁 2. **Project Structure**
Once created, navigate into the folder:

```bash
cd fruit-classifier-frontend
```
You should see:
```bash
fruit-classifier-frontend/
├── public/
├── src/
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
```
🎨 3. **Add Tailwind CSS (Optional but Recommended)**
If Tailwind setup was giving trouble earlier, let’s skip the build tools and use the CDN method:

Edit public/index.html:
Inside the <head> tag, add:

```html
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
```
This lets you use Tailwind classes instantly without installing anything.

🧩 4. **Add Your Components**
Inside src/, create a components/ folder:

```bash
mkdir src/components
```

Add these files:

- UploadForm.js

- ModelSelector.js

- ResultDisplay.js


🔌 5. **Add Axios for API Calls**
Install Axios:

```bash
npm install axios
```
Create src/api/predict.js:

```js
import axios from 'axios';

export const classifyFruit = async (file, modelName) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('model_name', modelName);
  const response = await axios.post('http://localhost:8000/predict', formData);
  return response.data;
};
````
🚀 6. **Run the Frontend**
```bash
npm start
```
Your app should open at http://localhost:3000

🧪 **Troubleshooting Checklist**
✅ Backend running on localhost:8000

✅ CORS middleware added in FastAPI

✅ Axios URL matches backend

✅ No syntax errors in React components

✅ CDN Tailwind loaded in index.html

---
## 🖼️ Using the App
Upload a fruit image (JPG or PNG)

Select a model from the dropdown

Click Classify

View predicted fruit and confidence score

---
## 🧪 Supported Models
- Logistic Regression

- Decision Tree

- Random Forest

- k-Nearest Neighbors

- Support Vector Machine

Each model is trained on color histogram features extracted from fruit images.

---
## 🧑‍🏫 For Educators & Learners
This project is designed to be modular and teachable:

No deep learning required

Easy to extend with new models or features

Great for workshops, bootcamps, and self-paced learning

---
## 🐞 Troubleshooting
Network Error: Ensure backend is running on localhost:8000

CORS Error: Backend must include CORS middleware

Model Not Found: Run train_models.py before using the app

Image Misclassification: Try different models or improve dataset quality

---
## 📚 Credits
Dataset: Kaggle Fruits Dataset

Built by: Shreenidhi — Full-stack ML engineer & educational architect

---
## 📌 License
This project is open-source and free to use for educational purposes.

---