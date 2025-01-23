/**
 * Copies the provided data to the clipboard.
 *
 * @param {string} data - The data to be copied to the clipboard.
 */
export const copyToClipboard = (data) => {
  navigator.clipboard.writeText(data);
};
