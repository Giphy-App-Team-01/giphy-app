import { EMPTY_HEART_ICON, FULL_HEART_ICON } from '../common/constants.js';
import { renderMessageBar } from '../components/message-bar.js';

/**
 * Toggles the favorite status of a GIF.
 *
 * @param {string} gifId - The ID of the GIF to toggle.
 * @param {HTMLElement} buttonElement - The button element that was clicked to toggle the favorite status.
 */
export const toggleFavorite = (gifId, buttonElement) => {
  let favorites = getFavorites();
  if (favorites.includes(gifId)) {
    favorites = favorites.filter((id) => id !== gifId);
    buttonElement.innerHTML = `${EMPTY_HEART_ICON}`;
    renderMessageBar('GIF removed from favorites', 'error');
  } else {
    favorites.push(gifId);
    buttonElement.innerHTML = `${FULL_HEART_ICON}`;
    renderMessageBar('GIF added to favorites', 'success');
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Updates the favorite buttons for each GIF item on the page.
 */
export const updateFavoriteButtons = () => {
  const favorites = getFavorites();

  document.querySelectorAll('.gif-item').forEach((gif) => {
    const gifId = gif.id;
    const favButton = gif.querySelector('.fav-btn');

    if (favorites.includes(gifId)) {
      favButton.innerHTML = `${FULL_HEART_ICON}`;
    } else {
      favButton.innerHTML = `${EMPTY_HEART_ICON}`;
    }
  });
};

/**
 * Renders the favorite status icon based on whether the given ID is in the favorites list.
 *
 * @param {string} id - The ID of the item to check.
 * @return {string} - The HTML string for the full heart icon if the item is a favorite, otherwise the empty heart icon.
 */
export const renderFavoriteStatus = (id) => {
  const favorites = getFavorites();
  if (favorites.includes(id)) {
    return `${FULL_HEART_ICON}`;
  } else {
    return `${EMPTY_HEART_ICON}`;
  }
};

/**
 * Retrieves the list of favorite items from local storage.
 *
 * @return {Array} An array of favorite items. If no favorites are found, returns an empty array.
 */
export const getFavorites = () => {
  return JSON.parse(localStorage.getItem('favorites')) || [];
};
