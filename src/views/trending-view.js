import { simpleGifView } from '../views/gif-view.js';
import { renderInfoParagraph } from '../components/info-paragraph.js';
import { renderPageTitle } from '../components/page-title.js';

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
