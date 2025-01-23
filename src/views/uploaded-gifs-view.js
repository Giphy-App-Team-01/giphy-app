import { renderPageTitle } from '../components/page-title.js';
import { renderInfoParagraph } from '../components/info-paragraph.js';
import { simpleGifView } from './gif-view.js';
export const toUploadedGifsView = (gifsResponse) => {
  let gifs = [];
  if (gifsResponse && Array.isArray(gifsResponse.data)) {
    gifs = gifsResponse.data;
  }

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
