import { simpleGifView } from './gif-view.js';
import { renderPageTitle } from '../components/page-title.js';
import { renderInfoParagraph } from '../components/info-paragraph.js';
export const toSearchView = (gifsResponse, searchTerm) => {
  let gifs = [];
  if (gifsResponse && Array.isArray(gifsResponse.data)) {
    gifs = gifsResponse.data;
  }

  if (!Array.isArray(gifs) || gifs.length === 0) {
    return renderInfoParagraph(
      'Error loading search results. Please try again later.'
    );
  }

  return `
  ${renderPageTitle(`We’ve got the perfect GIFs for: "${searchTerm}"`)}
  <div class="gif-grid">
    ${gifs.map((gif) => simpleGifView(gif)).join('')}
  </div>
`;
};
