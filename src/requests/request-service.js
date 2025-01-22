import {
  API_KEY,
  TRENDING_ENDPOINT,
  GIF_BY_ID_ENDPOINT,
  GIFS_BY_IDs_ENDPOINT,
  SEARCH_ENDPOINT,
  LIMIT_GIFS,
} from '../common/config.js';

export const fetchSearch = async (value) => {
  return await fetchData(`${SEARCH_ENDPOINT}?q=${value}&limit=${LIMIT_GIFS}&api_key=${API_KEY}`);
};

export const fetchTrending = async () => {
  return fetchData(
    `${TRENDING_ENDPOINT}?api_key=${API_KEY}&limit=${LIMIT_GIFS}`
  );
};

export const fetchGifById = async (id) => {
  try {
    const response = await fetch(
      `${GIF_BY_ID_ENDPOINT}${id}?api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch GIF by ID');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    // We can also show here our message bar to the user with some meaningful message
    console.error('Error fetching GIF by ID:', error);
  }
};

export const fetchGifsByIds = async (ids) => {
  const idsToString = ids.join(',');
  try {
    const response = await fetch(
      `${GIFS_BY_IDs_ENDPOINT}?ids=${idsToString}&api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch GIFs by IDs');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    // We can also show here our message bar to the user with some meaningful message
    console.error('Error fetching GIFs by IDs:', error);
  }
};

export const fetchGifsByQuery = async (query) => {
  try {
    const response = await fetch(
      `${SEARCH_ENDPOINT}?q=${query}&limit=${LIMIT_GIFS}&api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch GIFs by query');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    // We can also show here our message bar to the user with some meaningful message
    console.error('Error fetching GIFs by query:', error);
  }
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
    // We can also show here our message bar to the user with some meaningful message
    console.error('Error fetching data:', error);
  }
};
