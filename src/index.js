import { FAVORITES, TRENDING } from './common/constants.js';
import { q } from './events/helpers.js';
import { loadPage, renderSingleGifView } from './events/navigation-events.js';
import { renderSearchGifs } from './events/search-events.js';
import { toggleFavorite } from './events/favorites-events.js';
import { copyToClipboard } from './events/single-gif-events.js';
import { renderMessageBar } from './components/message-bar.js';
import { handleGifUpload } from './events/upload-gif-events.js';
import { assignRandomId } from './events/user-events.js';

document.addEventListener('DOMContentLoaded', () => {
  loadPage(TRENDING);
  assignRandomId();

  /**
   * Handles the search functionality by retrieving the input value,
   * trimming any leading or trailing whitespace, and if the input
   * value is not empty, it calls the renderSearchGifs function with
   * the input value as an argument.
   */
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

    if (
      e.target.classList.contains('fav-btn') ||
      e.target.classList.contains('favorites-toggle__single-gif-view')
    ) {
      // const gifId = e.target.closest('.gif-item').id;
      const gifId = e.target.getAttribute('data-gif-id');
      toggleFavorite(gifId, e.target);

      const favoritesLink = q('a.nav-link.active[data-page="favorites"]');

      if (favoritesLink) {
        loadPage(FAVORITES);
      }
    }

    // Single view Gif
    if (e.target.classList.contains('gif-item-img')) {
      const gifId = e.target.parentElement.id;
      console.log(gifId);
      renderSingleGifView(gifId);
    }

    // Copy link - single gif view
    if (
      e.target.classList.contains('copy-link__single-gif-view') ||
      e.target.classList.contains('copy-btn')
    ) {
      const gifUrl = e.target.getAttribute('data-gif-url');
      copyToClipboard(gifUrl);
      renderMessageBar('Link copied to clipboard!', 'success');
    }
  });

  document.addEventListener('input', async (e) => {
    if (e.target.classList.contains('upload-gif-input')) {
      await handleGifUpload(e.target.files[0]);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });
});
