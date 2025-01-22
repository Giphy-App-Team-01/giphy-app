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
import { fetchTrending } from '../requests/request-service.js';

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
  } catch (error) {
    // We could add here some message to the user if it fails, instead of only console.error
    console.error('Failed to load trending gifs:', error);
  }
};
