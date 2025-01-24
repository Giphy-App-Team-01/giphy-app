import { copyToClipboard } from './helpers.js';
/**
 * Copies the provided data to the clipboard.
 *
 * @param {string} data - The data to be copied to the clipboard.
 */

export const handleCopyToClipboard = (e) => {
  const gifUrl = e.target.getAttribute('data-gif-url');
  copyToClipboard(gifUrl);
};
