import { uploadGif } from '../requests/request-service.js';
import { renderLoader, removeLoader } from '../components/loader.js';
import { renderMessageBar } from '../components/message-bar.js';
export const handleGifUpload = async (file) => {
  renderLoader();
  const responseData = await uploadGif(file);
  console.log(responseData);
  removeLoader();
  renderMessageBar(
    'Successfully uploaded, visit your uploaded gifs.',
    'success'
  );
};
