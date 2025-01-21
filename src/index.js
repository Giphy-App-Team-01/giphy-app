import { TRENDING } from './common/constants.js';
import { loadPage } from './events/navigation-events.js';
import { fetchGifById, fetchGifsByIds } from './requests/request-service.js';

document.addEventListener('DOMContentLoaded', () => {
  loadPage(TRENDING);

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      loadPage(e.target.getAttribute('data-page'));
    }
  });

  // fetchGifById('26his8ERHOSxKuWw8');
  // fetchGifsByIds(['FVOU6vzPq3XtNfgA66', 'PnVVpkwpaAO02qGCc9']);
});
