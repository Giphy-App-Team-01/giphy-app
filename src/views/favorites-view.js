import { simpleGifView } from '../views/gif-view.js';
import { renderInfoParagraph } from '../components/info-paragraph.js';
import { renderPageTitle } from '../components/page-title.js';

export const toFavoritesView = (gifsResponse) => {
  let gifs = [];
  if (gifsResponse && Array.isArray(gifsResponse.data)) {
    gifs = gifsResponse.data;
  }

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
