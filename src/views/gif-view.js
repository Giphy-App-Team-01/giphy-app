import { renderFavoriteStatus } from './../events/favorites-events.js';
import { EMPTY_HEART_ICON, LINK_ICON } from '../common/constants.js';


/**
 * Generates the HTML string for a single GIF view.
 *
 * @param {Object} gifObject - The GIF object containing data to be displayed.
 * @param {Object} gifObject.data - The main data object for the GIF.
 * @param {string} gifObject.data.title - The title of the GIF.
 * @param {string} gifObject.data.import_datetime - The import date and time of the GIF.
 * @param {Object} gifObject.data.images - The images object containing different formats of the GIF.
 * @param {Object} gifObject.data.images.original - The original image object.
 * @param {string} gifObject.data.images.original.width - The width of the original GIF.
 * @param {string} gifObject.data.images.original.height - The height of the original GIF.
 * @param {string} gifObject.data.images.original.size - The size of the original GIF in bytes.
 * @param {string} gifObject.data.images.original.webp - The URL of the original GIF in WebP format.
 * @param {string} gifObject.data.alt_text - The alt text for the GIF image.
 * @param {string} gifObject.data.bitly_gif_url - The shortened URL for the GIF.
 * @param {string} gifObject.data.url - The URL for downloading the GIF.
 * @param {string} gifObject.data.id - The unique identifier for the GIF.
 * @param {string} gifObject.data.rating - The rating of the GIF.
 * @return {string} The HTML string for the single GIF view.
 */
export const toSingleGifView = (gifObject) => {
  const date = new Date(gifObject.data.import_datetime);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dayOfMonth = date.getDate();
  return `
  <div class="single-gif-view">
    <div class="info-box__single-gif-view">
    <div class="title__single-gif-view">
        ${gifObject.data.title}
    </div>
    <div class="container-gif-details">
    <div class="gif-details__single-gif-view">
        <span class="title__gif-details">Dimensions</span>
        <span class="value__gif-details">${
  gifObject.data.images.original.width
} x ${gifObject.data.images.original.height}</span>
    </div>
    <div class="gif-details__single-gif-view">
        <span class="title__gif-details">Upload date</span>
        <span class="value__gif-details">${dayOfMonth}/${month}/${year}</span>
    </div>
    <div class="gif-details__single-gif-view">
        <span class="title__gif-details">Size</span>
        <span class="value__gif-details">${(
    Number(gifObject.data.images.original.size) /
          (1024 * 1024)
  ).toFixed(2)} MB</span>
    </div>
    <div class="gif-details__single-gif-view">
        <span class="title__gif-details">Rating</span>
        <span class="value__gif-details">${gifObject.data.rating.toUpperCase()}</span>
    </div>
    </div>
    </div>
    <div class="main-image__single-gif-view">
        <img src="${gifObject.data.images.original.webp}" alt="${
  gifObject.data.alt_text
}" />
    </div>
    <div class="controls__single-gif-view">
        <div class="copy-link__single-gif-view" data-gif-url="${
  gifObject.data.bitly_gif_url
}">Copy Link</div>
        <div class="download__single-gif-view"><a href="${
  gifObject.data.url
}" download>Download</a></div>
        <div class="favorites-toggle__single-gif-view" data-gif-id="${
  gifObject.data.id
}">${renderFavoriteStatus(gifObject.data.id)}</div>
    </div>
  </div>
  `;
};

export const simpleGifView = (gif) => `
    <div class="gif-item" id="${gif.id}">
      <img class="gif-item-img" src="${gif.images.fixed_height.url}" alt="${gif.title}">
      <div class="gif-overlay">
        <button class="fav-btn" data-gif-id="${gif.id}">${EMPTY_HEART_ICON}</button>
        <button class="copy-btn" data-gif-url="${gif.bitly_gif_url}">${LINK_ICON}</button>
     </div>
    </div>
`;
