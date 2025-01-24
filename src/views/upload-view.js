import { renderPageTitle } from '../components/page-title.js';

/**
 * Renders the upload GIF view.
 * @return {string} The HTML markup for the upload GIF view.
 */
export const toUploadGifView = () => {
  return (
    renderPageTitle('Upload your own GIF') +
    `<div class="upload-container">
  <label for="gif-file-input" class="custom-file-label">
    <span class="upload-icon">📤</span>
    <span class="upload-text">Upload a GIF, MP4, MOV, or WebM.</span>
  </label>
  <input id="gif-file-input" type="file" class="upload-gif-input hidden" accept="image/gif,video/mp4,video/mov,video/quicktime,video/webm,youtube,vimeo" />
</div>
  `
  );
};
