import {
  API_KEY,
  TRENDING_ENDPOINT,
  GIF_BY_ID_ENDPOINT,
  GIFS_BY_IDs_ENDPOINT,
  SEARCH_ENDPOINT,
  UPLOAD_GIF_ENDPOINT,
  LIMIT_GIFS,
} from '../common/config.js';
import { renderMessageBar } from '../components/message-bar.js';
import { q } from '../events/helpers.js';

/**
 * Fetches GIFs based on the search query.
 *
 * @param {string} value - The search query to fetch GIFs for.
 * @return {Promise<Object>} A promise that resolves to the fetched data.
 */
export const fetchSearch = async (value) => {
  return await fetchData(
    `${SEARCH_ENDPOINT}?q=${value}&limit=${LIMIT_GIFS}&api_key=${API_KEY}`,
  );
};

export const fetchGifByResponseId = async (randomId) => {
  return fetchData(
    `${GIF_BY_ID_ENDPOINT}?api_key=${API_KEY}&random_id=${randomId}`,
  );
};

/**
 * Fetches trending GIFs from the Giphy API.
 *
 * @async
 * @function fetchTrending
 * @return {Promise<Object>} A promise that resolves to the response data from the Giphy API.
 */
export const fetchTrending = async () => {
  return fetchData(
    `${TRENDING_ENDPOINT}?api_key=${API_KEY}&limit=${LIMIT_GIFS}`,
  );
};

/**
 * Fetches a GIF by its ID.
 *
 * @param {string} id - The ID of the GIF to fetch.
 * @return {Promise<Object>} A promise that resolves to the GIF data.
 */
export const fetchGifById = async (id) => {
  return fetchData(`${GIF_BY_ID_ENDPOINT}${id}?api_key=${API_KEY}`);
};

/**
 * Fetches GIFs by their IDs.
 *
 * @param {string[]} ids - An array of GIF IDs to fetch.
 * @return {Promise<Object>} A promise that resolves to the fetched GIF data.
 */
export const fetchGifsByIds = async (ids) => {
  const idsToString = ids.join(',');
  return fetchData(
    `${GIFS_BY_IDs_ENDPOINT}?ids=${idsToString}&api_key=${API_KEY}`
  );
};

export const fetchRandomId = async () => {
  const response = await fetchData(
    `https://api.giphy.com/v1/randomid?api_key=${API_KEY}`,
  );
  return response.data.random_id;
};

/**
 * Uploads a GIF file to the server.
 *
 * @param {File} file - The GIF file to be uploaded.
 * @return {Promise<Object>} The response data from the server.
 * @throws {Error} If the upload fails.
 */
export const uploadGif = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('api_key', API_KEY);
    // renderLoader();
    const response = await fetch(`${UPLOAD_GIF_ENDPOINT}`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    // removeLoader();
    return data;
  } catch (err) {
    renderMessageBar('Failed to upload gif, please try again.', 'error');
    console.error('Error uploading gif:', err);
  }
};

/**
 * Fetches data from the given URL.
 *
 * @param {string} url - The URL to fetch data from.
 * @return {Promise<Object>} The fetched data as a JSON object.
 * @throws Will throw an error if the fetch operation fails.
 */
const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {

    const uploadLink = q('a.nav-link.active[data-page="my-uploads"]');

    if (!uploadLink) {
      renderMessageBar('Failed to fetch data, please try again.', 'error');
      console.error('Error fetching data:', error);
    }
  }
};
