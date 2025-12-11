import React, { useState } from 'react';

const UploadForm = ({ onFileSelect, selectedFile }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFileSelect(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-300 ${
        isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="file-upload"
        className="hidden"
        onChange={handleFileChange}
        accept="image/png, image/jpeg"
      />
      <label htmlFor="file-upload" className="cursor-pointer">
        <p className="text-gray-500">
          {selectedFile
            ? `Selected: ${selectedFile.name}`
            : 'Drag and drop an image here, or click to select one'}
        </p>
        {!selectedFile && (
          <span className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Browse File
          </span>
        )}
      </label>
    </div>
  );
};

export default UploadForm;