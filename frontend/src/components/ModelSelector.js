import React from 'react';

const ModelSelector = ({ selectedModel, onModelChange }) => {
  const models = [
    { label: 'Logistic Regression', value: 'logistic_regression' },
    { label: 'Decision Tree', value: 'decision_tree' },
    { label: 'Random Forest', value: 'random_forest' },
    { label: 'k-Nearest Neighbors', value: 'k_nearest_neighbors' },
    { label: 'Support Vector Machine', value: 'support_vector_machine' },
  ];

  return (
    <div className="my-4">
      <label htmlFor="model-select" className="block text-sm font-medium text-gray-900 mb-2">
        Select a Model:
      </label>
      <select
        id="model-select"
        value={selectedModel}
        onChange={(e) => onModelChange(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
      >
        {models.map((model) => (
          <option key={model.value} value={model.value}>
            {model.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModelSelector;