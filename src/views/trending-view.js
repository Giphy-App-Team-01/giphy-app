import { EMPTY_HEART_ICON, LINK_ICON } from '../common/constants.js';

export const toTrendingView = (gifsResponse) => {
  let gifs = [];
  if (gifsResponse && Array.isArray(gifsResponse.data)) {
    gifs = gifsResponse.data;
  }

  if (!Array.isArray(gifs) || gifs.length === 0) {
    return `
    <p style="text-align: center; font-size: 20px; color: #fff; margin-top: 50px;">
    No trending GIFs available.
    </p>
    `;
  }

  return `
  <h2>Trending GIFs</h2>
  <div class="gif-grid">
    ${gifs
      .map(
        (gif) => `
          <div class="gif-item" id="${gif.id}">
            <img class="gif-item-img" src="${gif.images.fixed_height.url}" alt="${gif.title}">
            <div class="gif-overlay">
              <button class="fav-btn" data-gif-id="${gif.id}">${EMPTY_HEART_ICON}</button>
              <button class="copy-btn" data-gif-url="${gif.bitly_gif_url}">${LINK_ICON}</button>
            </div>
          </div>
        `
      )
      .join('')}
  </div>
`;
};
