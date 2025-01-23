import { q } from '../events/helpers.js';

/**
 * Displays a loading spinner overlay on the screen.
 */
export const renderLoader = () => {
  q('body').insertAdjacentHTML(
    'beforeend',
    '<div class="overlay__loader"><div class="loader"></div></div>'
  );
};

/**
 * Removes the loader element from the DOM.
 */
export const removeLoader = () => {
  q('.overlay__loader').remove();
};
