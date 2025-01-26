import { uploadGif } from '../requests/request-service.js';
import { renderLoader, removeLoader } from '../components/loader.js';
import { renderMessageBar } from '../components/message-bar.js';
import { assignIdFromUpload } from './user-events.js';
import { ALLOWED_FILE_TYPES_ARRAY } from '../common/config.js';

/**
 * Handles the GIF upload process.
 *
 * This function renders a loader, uploads the GIF file, assigns an ID from the upload response,
 * removes the loader, and renders a success message.
 *
 * @param {File} file - The GIF file to be uploaded.
 * @return {Promise<void>} A promise that resolves when the upload process is complete.
 */
export const handleGifUpload = async (file) => {
  // Validate file type
  if (!ALLOWED_FILE_TYPES_ARRAY.includes(file.type)) {
    renderMessageBar(
      'Invalid file type. Please upload a supported format.',
      'error'
    );
    return;
  }
  renderLoader();
  const responseData = await uploadGif(file);
  assignIdFromUpload(responseData.data.id);
  removeLoader();
  renderMessageBar(
    'Successfully uploaded, visit your uploaded gifs.',
    'success'
  );
  return;
};
