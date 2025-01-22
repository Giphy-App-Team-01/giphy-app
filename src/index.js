import { TRENDING } from './common/constants.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchGifs } from './events/search-events.js';
import { toggleFavorite } from './events/favorites-events.js';

import { fetchGifById, fetchGifsByIds } from './requests/request-service.js';

document.addEventListener('DOMContentLoaded', () => {
  loadPage(TRENDING);

  const handleSearch = () => {
    const inputValue = q('#search-input').value.trim();
    if (inputValue) {
      renderSearchGifs(inputValue);
    }
  };

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      loadPage(e.target.getAttribute('data-page'));
    }

    if (e.target.id.includes('search-btn')) {
      handleSearch();
    }

    if (e.target.classList.contains('fav-btn')) {
      const gifId = e.target.closest('.gif-item').id;
      toggleFavorite(gifId, e.target);
    }


  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });

});
