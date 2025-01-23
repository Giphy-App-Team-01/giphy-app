import { q } from '../events/helpers.js';
export const renderLoader = () => {
  q('body').insertAdjacentHTML(
    'beforeend',
    '<div class="overlay__loader"><div class="loader"></div></div>'
  );
};

export const removeLoader = () => {
  q('.overlay__loader').remove();
};
