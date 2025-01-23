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

const renderUploadGif = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadGifView();
};

const renderUploadedGifsView = async () => {
  const uploadedIds = getIdsFromUploads();
  const data = await fetchGifsByIds(uploadedIds);
  q(CONTAINER_SELECTOR).innerHTML = toUploadedGifsView(data);
};

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

export const renderSingleGifView = async (id = null) => {
  const gifObject = await fetchGifById(id);
  q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(gifObject);
};

const renderAboutUsView = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutUsView();
};
