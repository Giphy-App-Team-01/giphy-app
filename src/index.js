import { TRENDING } from './common/constants.js';
import { q, getGifId } from './events/helpers.js';
import { loadPage, renderSingleGifView } from './events/navigation-events.js';
import { renderSearchGifs } from './events/search-events.js';
import { toggleFavorite } from './events/favorites-events.js';
import { copyToClipboard } from './events/single-gif-events.js';
import { renderMessageBar } from './components/message-bar.js';
import { renderLoader, removeLoader } from './components/loader.js';
import { fetchRandomId, uploadGif } from './requests/request-service.js';

document.addEventListener('DOMContentLoaded', () => {
  loadPage(TRENDING);

  (async () => {
    const randomId = await fetchRandomId();
    console.log(randomId);
  })();
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
    }

    // Single view Gif
    if (e.target.classList.contains('gif-item-img')) {
      const gifId = e.target.parentElement.id;
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

  document.addEventListener('input', (e) => {
    if (e.target.classList.contains('upload-gif-input')) {
      try {
        uploadGif(e.target.files[0]).then((data) => {
          renderMessageBar(
            'Successfully uploaded, visit your uploaded gifs.',
            'success'
          );
        });
      } catch (err) {
        renderMessageBar('Error reading the file, try again.', 'error');
        console.log(err);
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });
});
