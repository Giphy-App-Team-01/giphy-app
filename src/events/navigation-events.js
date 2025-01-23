import { q, setActiveNav } from './helpers.js';
import {
  TRENDING,
  ABOUT,
  FAVORITES,
  MY_UPLOADS,
  UPLOAD_GIF,
  CONTAINER_SELECTOR,
} from '../common/constants.js';
import { toTrendingView } from '../views/trending-view.js';
import {
  fetchGifsByIds,
  fetchTrending,
  fetchGifById,
} from '../requests/request-service.js';
import { updateFavoriteButtons, getFavorites } from './favorites-events.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toSingleGifView } from '../views/gif-view.js';
import { toUploadedGifsView } from '../views/uploaded-gifs-view.js';
import { toUploadGifView } from '../views/upload-view.js';
import { toAboutUsView } from '../views/about-view.js';
import { getIdsFromUploads } from './user-events.js';

/**
 * Loads the specified page and renders the corresponding view.
 *
 * @param {string} [page=''] - The page to load. Possible values are:
 *   - TRENDING: Loads the trending GIFs view.
 *   - ABOUT: Loads the about us view.
 *   - MY_UPLOADS: Loads the user's uploaded GIFs view.
 *   - FAVORITES: Loads the user's favorite GIFs view.
 *   - UPLOAD_GIF: Loads the upload GIF view.
 *   - Any other value will result in no action.
 * @returns {null|void} Returns null if the page is not recognized, otherwise renders the corresponding view.
 */
export const loadPage = (page = '') => {
  switch (page) {
  case TRENDING:
    setActiveNav(TRENDING);
    return renderTrending();

  case ABOUT:
    setActiveNav(ABOUT);
    return renderAboutUsView();

  case MY_UPLOADS:
    setActiveNav(MY_UPLOADS);
    return renderUploadedGifsView();

  case FAVORITES:
    setActiveNav(FAVORITES);
    return renderFavorites();

  case UPLOAD_GIF:
    setActiveNav(UPLOAD_GIF);
    return renderUploadGif();

  default:
    return null;
  }
};

/**
 * Renders the trending GIFs by fetching data from the API and updating the DOM.
 * If the fetch operation fails, logs an error message to the console.
 * 
 * @async
 * @function renderTrending
 * @returns {Promise<void>} A promise that resolves when the trending GIFs are rendered.
 */
const renderTrending = async () => {
  try {
    const data = await fetchTrending();
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(data);
    updateFavoriteButtons();
  } catch (error) {
    // We could add here some message to the user if it fails, instead of only console.error
    console.error('Failed to load trending gifs:', error);
  }
};

/**
 * Renders the upload GIF view by setting the inner HTML of the container
 * element to the upload GIF view template.
 */
const renderUploadGif = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadGifView();
};

/**
 * Renders the view for uploaded GIFs.
 * 
 * This function retrieves the IDs of uploaded GIFs, fetches the corresponding GIF data,
 * and updates the inner HTML of the container with the uploaded GIFs view.
 * 
 * @async
 * @function renderUploadedGifsView
 * @returns {Promise<void>} A promise that resolves when the view has been rendered.
 */
const renderUploadedGifsView = async () => {
  const uploadedIds = getIdsFromUploads();
  const data = await fetchGifsByIds(uploadedIds);
  q(CONTAINER_SELECTOR).innerHTML = toUploadedGifsView(data);
};

/**
 * Renders the favorite GIFs.
 * 
 * This function retrieves the list of favorite GIFs, fetches their data if there are any,
 * and updates the container with the favorite GIFs view. If there are no favorites, it
 * updates the container with an empty favorites view. Finally, it updates the favorite buttons.
 * 
 * @async
 * @function renderFavorites
 * @returns {Promise<void>} A promise that resolves when the favorites have been rendered.
 */
const renderFavorites = async () => {
  const favorites = getFavorites();
  if (favorites.length === 0) {
    q(CONTAINER_SELECTOR).innerHTML = toFavoritesView([]);
  } else {
    const data = await fetchGifsByIds(favorites);
    q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(data);
  }
  updateFavoriteButtons();
};

/**
 * Renders a single GIF view by fetching the GIF data using the provided ID.
 *
 * @param {string|null} id - The ID of the GIF to fetch. If null, no GIF will be fetched.
 * @returns {Promise<void>} A promise that resolves when the GIF view has been rendered.
 */
export const renderSingleGifView = async (id = null) => {
  const gifObject = await fetchGifById(id);
  q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(gifObject);
};

const renderAboutUsView = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutUsView();
};
