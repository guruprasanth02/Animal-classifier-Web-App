import React from 'react';

const ResultDisplay = ({ result }) => {
  if (!result) {
    return null;
  }

  const prediction = result.predicted_animal || result.prediction || 'N/A';
  const confidence = result.confidence;

  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-inner animate-fade-in">
      <h3 className="text-lg font-semibold text-gray-800">Prediction Result:</h3>
      <p className="text-2xl font-bold text-green-600 capitalize">{prediction}</p>
      {confidence !== undefined && (
        <p className="text-md text-gray-600">
          Confidence: {(confidence * 100).toFixed(2)}%
        </p>
      )}
    </div>
  );
};

export default ResultDisplay;