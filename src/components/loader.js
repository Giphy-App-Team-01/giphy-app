import { q } from '../events/helpers.js';
export const renderLoader = () => {
  q('body').insertAdjacentHTML('beforeend', '<div class="loader"></div>');
  setTimeout(() => {
    q('.loader').remove();
  }, 3000);
};
