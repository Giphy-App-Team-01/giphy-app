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
import { fetchGifsByIds, fetchTrending } from '../requests/request-service.js';
import { updateFavoriteButtons } from './favorites-events.js';
import { toFavoritesView } from '../views/favorites-view.js';

export const loadPage = (page = '') => {
  switch (page) {
  case TRENDING:
    setActiveNav(TRENDING);
    return renderTrending();

  case ABOUT:
    setActiveNav(ABOUT);

  case MY_UPLOADS:
    setActiveNav(MY_UPLOADS);

  case FAVORITES:
    setActiveNav(FAVORITES);
    return renderFavorites();

  case UPLOAD_GIF:
    setActiveNav(UPLOAD_GIF);

  default:
    return null;
  }
};

const renderTrending = async () => {
  try {
    const data = await fetchTrending();
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(data);
    updateFavoriteButtons()
  } catch (error) {
    // We could add here some message to the user if it fails, instead of only console.error
    console.error('Failed to load trending gifs:', error);
  }
};

const renderFavorites = async () => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const ids = storedFavorites.map((id) => id.replace('gif-', ''));

  const data = await fetchGifsByIds(ids);
  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(data);
};
