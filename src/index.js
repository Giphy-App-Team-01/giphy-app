import { TRENDING } from './common/constants.js';
import { loadPage } from './events/navigation-events.js';

document.addEventListener('DOMContentLoaded', () => {
  loadPage(TRENDING);

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      loadPage(e.target.getAttribute('data-page'));
    }
  });
});
