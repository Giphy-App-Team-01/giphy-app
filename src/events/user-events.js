import { fetchRandomId } from '../requests/request-service.js';
export const assignRandomId = async () => {
  const randomId = await fetchRandomId();
  localStorage.setItem('randomId', randomId);
};

export const getRandomId = () => {
  return localStorage.getItem('randomId');
};

export const assignIdFromUpload = (id) => {
  const uploadedIds = JSON.parse(localStorage.getItem('uploadId')) || [];


  if (!uploadedIds.includes(id)) {
    uploadedIds.push(id);
    localStorage.setItem('uploadId', JSON.stringify(uploadedIds));
  }
};

export const getIdsFromUploads = () => {
  return JSON.parse(localStorage.getItem('uploadId')) || [];
};
