import { EMPTY_HEART_ICON, FULL_HEART_ICON } from '../common/constants.js';

export const toggleFavorite = (gifId, buttonElement) => {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  if (favorites.includes(gifId)) {
    favorites = favorites.filter((id) => id !== gifId);
    buttonElement.textContent = `${EMPTY_HEART_ICON}`;
  } else {
    favorites.push(gifId);
    buttonElement.textContent = `${FULL_HEART_ICON}`;
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const updateFavoriteButtons = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

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
