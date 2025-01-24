import { simpleGifView } from './gif-view.js';
import { renderPageTitle } from '../components/page-title.js';
import { renderInfoParagraph } from '../components/info-paragraph.js';
import { extractGifs } from '../events/helpers.js';


/**
 * Generates the search view HTML based on the provided GIFs response and search term.
 *
 * @param {Object} gifsResponse - The response object containing GIFs data.
 * @param {Array} gifsResponse.data - The array of GIF objects.
 * @param {string} searchTerm - The search term used to find the GIFs.
 * @return {string} The HTML string for the search view.
 */
export const toSearchView = (gifsResponse, searchTerm) => {
  const gifs = extractGifs(gifsResponse);

  if (!Array.isArray(gifs) || gifs.length === 0) {
    return renderInfoParagraph(
      'Error loading search results. Please try again later.',
    );
  }

  return `
  ${renderPageTitle(`We’ve got the perfect GIFs for: "${searchTerm}"`)}
  <div class="gif-grid">
    ${gifs.map((gif) => simpleGifView(gif)).join('')}
  </div>
`;
};
