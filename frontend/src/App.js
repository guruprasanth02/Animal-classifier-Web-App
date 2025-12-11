import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import ModelSelector from './components/ModelSelector';
import ResultDisplay from './components/ResultDisplay';
import { classifyAnimal } from './api/predict';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [modelName, setModelName] = useState('random_forest');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileSelect = (file) => {
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    setSelectedFile(file);
    setResult(null); // Reset result when a new file is selected
    setError(null);

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const handleClear = () => {
    handleFileSelect(null);
  };
  const handleClassify = async () => {
    if (!selectedFile) {
      setError('Please select an image file first.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await classifyAnimal(selectedFile, modelName);
      setResult(data);
    } catch (err) {
      setError('Classification failed. Please check the backend and try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {isLoading && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className="max-w-2xl w-full bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white border-opacity-20">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Animal Classifier 🦁
        </h1>

        {imagePreview ? (
          <div className="mt-4 text-center">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-w-full max-h-64 mx-auto rounded-lg shadow-md"
            />
            <button
              onClick={handleClear}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Clear Image
            </button>
          </div>
        ) : (
          <UploadForm onFileSelect={handleFileSelect} selectedFile={selectedFile} />
        )}
        <ModelSelector selectedModel={modelName} onModelChange={setModelName} />

        <button
          onClick={handleClassify}
          disabled={!selectedFile || isLoading}
          className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Classifying...' : 'Classify'}
        </button>

        {error && (
          <div className="mt-4 text-center text-red-500 bg-red-100 p-3 rounded-md">
            {error}
          </div>
        )}

        <ResultDisplay result={result} />
      </div>
      <footer className="text-center mt-8 text-white bg-gradient-to-r from-blue-500 to-purple-600 bg-opacity-80 p-4 rounded-lg shadow-lg">
        <p>Built with React, FastAPI, and Scikit-learn.</p>
      </footer>
    </div>
  );
}

export default App;