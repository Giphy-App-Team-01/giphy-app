import { simpleGifView } from '../views/gif-view.js';
import { renderInfoParagraph } from '../components/info-paragraph.js';
import { renderPageTitle } from '../components/page-title.js';
import { extractGifs } from '../events/helpers.js';

/**
 * Generates the HTML for the trending GIFs view.
 *
 * @param {Object} gifsResponse - The response object containing GIF data.
 * @param {Array} gifsResponse.data - An array of GIF objects.
 * @return {string} The HTML string for the trending GIFs view.
 */
export const toTrendingView = (gifsResponse) => {
  const gifs = extractGifs(gifsResponse);

  if (!Array.isArray(gifs) || gifs.length === 0) {
    return renderInfoParagraph('No trending GIFs available.');
  }

  return `
  ${renderPageTitle('Trending GIFs')}
  <div class="gif-grid">
    ${gifs.map((gif) => simpleGifView(gif)).join('')}
  </div>
`;
};
