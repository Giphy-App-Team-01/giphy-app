import { EMPTY_HEART_ICON, LINK_ICON } from '../common/constants.js';

export const toSearchView = (gifsResponse, searchTerm) => {
  let gifs = [];
  if (gifsResponse && Array.isArray(gifsResponse.data)) {
    gifs = gifsResponse.data;
  }

  if (!Array.isArray(gifs) || gifs.length === 0) {
    return `
    <p style="text-align: center; font-size: 20px; color: #fff; margin-top: 50px;">
    Error loading search results. Please try again later.
    </p>
    `;
  }

  return `
  <h2>We’ve got the perfect GIFs for: "${searchTerm}"</h2>
  <div class="gif-grid">
    ${gifs
      .map(
        (gif) => `
          <div class="gif-item" id="gif-${gif.id}">
            <img class="gif-item-img" src="${gif.images.fixed_height.url}" alt="${gif.title}">
            <div class="gif-overlay">
              <button class="fav-btn">${EMPTY_HEART_ICON}</button>
              <button class="copy-btn">${LINK_ICON}</button>
            </div>
          </div>
        `
      )
      .join('')}
  </div>
`;
};
