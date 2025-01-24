import { renderPageTitle } from '../components/page-title.js';
import { renderInfoParagraph } from '../components/info-paragraph.js';
import { simpleGifView } from './gif-view.js';
import { extractGifs } from '../events/helpers.js';

/**
 * Generates the HTML view for uploaded GIFs.
 *
 * @param {Object} gifsResponse - The response object containing GIF data.
 * @param {Array} gifsResponse.data - An array of GIF objects.
 * @return {string} The HTML string representing the uploaded GIFs view.
 */
export const toUploadedGifsView = (gifsResponse) => {
  const gifs = extractGifs(gifsResponse);

  if (!Array.isArray(gifs) || gifs.length === 0) {
    return renderInfoParagraph('No GIFs uploaded yet. Upload some fun! 😍');
  }

  return `
    ${renderPageTitle('Uploaded GIFs')}
    <div class="gif-grid">
      ${gifs.map((gif) => simpleGifView(gif)).join('')}
    </div>
  `;
};
