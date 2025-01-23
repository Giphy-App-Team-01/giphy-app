import { fetchRandomId } from '../requests/request-service.js';
export const assignRandomId = async () => {
  const randomId = await fetchRandomId();
  localStorage.setItem('randomId', randomId);
};

export const getRandomId = () => {
  return localStorage.getItem('randomId');
};
