import { renderPageTitle } from '../components/page-title.js';
import { renderInfoParagraph } from '../components/info-paragraph.js';
export const toUploadGifView = () => {
  return (
    renderPageTitle('Upload your own GIF') +
    `
    <input type="file" class="upload-gif-input" accept="image/gif,video/mp4,video/mov,video/quicktime,video/webm,youtube,vimeo" multiple="">
  `
  );
};
