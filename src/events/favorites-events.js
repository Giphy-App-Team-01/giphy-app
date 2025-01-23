import { EMPTY_HEART_ICON, FULL_HEART_ICON } from '../common/constants.js';
import { renderMessageBar } from '../components/message-bar.js';

export const toggleFavorite = (gifId, buttonElement) => {
  let favorites = getFavorites();
  if (favorites.includes(gifId)) {
    favorites = favorites.filter((id) => id !== gifId);
    buttonElement.textContent = `${EMPTY_HEART_ICON}`;
    renderMessageBar('GIF removed from favorites', 'error');
  } else {
    favorites.push(gifId);
    buttonElement.textContent = `${FULL_HEART_ICON}`;
    renderMessageBar('GIF added to favorites', 'success');
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const updateFavoriteButtons = () => {
  const favorites = getFavorites();

  document.querySelectorAll('.gif-item').forEach((gif) => {
    const gifId = gif.id;
    const favButton = gif.querySelector('.fav-btn');

    if (favorites.includes(gifId)) {
      favButton.textContent = `${FULL_HEART_ICON}`;
    } else {
      favButton.textContent = `${EMPTY_HEART_ICON}`;
    }
  });
};

export const renderFavoriteStatus = (id) => {
  const favorites = getFavorites();
  if (favorites.includes(id)) {
    return `${FULL_HEART_ICON}`;
  } else {
    return `${EMPTY_HEART_ICON}`;
  }
  // if (favorites)
  // get favorites from localStorage
  // Check if the gif id exists
  // render favorite status
};

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem('favorites')) || [];
};
