import {
  API_KEY,
  TRENDING_ENDPOINT,
  GIF_BY_ID_ENDPOINT,
  GIFS_BY_IDs_ENDPOINT,
  SEARCH_ENDPOINT,
  LIMIT_GIFS,
} from '../common/config.js';
import { renderMessageBar } from '../components/message-bar.js';

export const fetchSearch = async (value) => {
  return await fetchData(
    `${SEARCH_ENDPOINT}?q=${value}&limit=${LIMIT_GIFS}&api_key=${API_KEY}`
  );
};

export const fetchTrending = async () => {
  return fetchData(
    `${TRENDING_ENDPOINT}?api_key=${API_KEY}&limit=${LIMIT_GIFS}`
  );
};

export const fetchGifById = async (id) => {
  return fetchData(`${GIF_BY_ID_ENDPOINT}${id}?api_key=${API_KEY}`);
};

export const fetchGifsByIds = async (ids) => {
  const idsToString = ids.join(',');
  return fetchData(
    `${GIFS_BY_IDs_ENDPOINT}?ids=${idsToString}&api_key=${API_KEY}`
  );
};

export const fetchRandomId = async () => {
  return fetchData(`https://api.giphy.com/v1/randomid?api_key=${API_KEY}`);
};

const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    renderMessageBar('Failed to fetch data, please try again.', 'error');
    console.error('Error fetching data:', error);
  }
};
