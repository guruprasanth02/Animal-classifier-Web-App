import axios from 'axios';

export const classifyAnimal = async (file, modelName) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('model_name', modelName);
  const response = await axios.post('http://localhost:8000/predict', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};