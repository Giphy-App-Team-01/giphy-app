import { simpleGifView } from '../views/gif-view.js';
import { renderInfoParagraph } from '../components/info-paragraph.js';
import { renderPageTitle } from '../components/page-title.js';

/**
 * Generates the HTML for the trending GIFs view.
 *
 * @param {Object} gifsResponse - The response object containing GIF data.
 * @param {Array} gifsResponse.data - An array of GIF objects.
 * @return {string} The HTML string for the trending GIFs view.
 */
export const toTrendingView = (gifsResponse) => {
  let gifs = [];
  if (gifsResponse && Array.isArray(gifsResponse.data)) {
    gifs = gifsResponse.data;
  }

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
