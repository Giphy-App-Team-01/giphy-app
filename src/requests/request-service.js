import { API_KEY } from '../common/config.js';

export const fetchTrending = async () => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=24`,
    );

    if (!response.ok) {
      throw new Error('Failed to fetch trending GIFs');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching trending GIFs:', error);
  }
};
