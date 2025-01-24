import { simpleGifView } from '../views/gif-view.js';
import { renderInfoParagraph } from '../components/info-paragraph.js';
import { renderPageTitle } from '../components/page-title.js';
import { extractGifs } from '../events/helpers.js';

/**
 * Generates the HTML content for the favorites view based on the provided GIFs response.
 *
 * @param {Object} gifsResponse - The response object containing GIFs data.
 * @param {Array} gifsResponse.data - An array of GIF objects.
 * @return {string} The HTML content for the favorites view.
 */
export const toFavoritesView = (gifsResponse) => {
  const gifs = extractGifs(gifsResponse);

  if (!Array.isArray(gifs) || gifs.length === 0) {
    return (
      renderPageTitle('Your Favorite GIFs') +
      renderInfoParagraph(
        'Oops! No favorites found. Add some fun to your collection! 😍'
      )
    );
  }

  return `
    ${renderPageTitle('Your Favorite GIFs')}
    <div class="gif-grid">
      ${gifs.map((gif) => simpleGifView(gif)).join('')}
    </div>
    `;
};
