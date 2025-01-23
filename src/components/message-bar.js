import { q } from '../events/helpers.js';

/**
 * Renders a message bar with the specified message and type.
 *
 * @param {string} message - The message to display in the message bar.
 * @param {string} type - The type of the message bar, either 'success' or 'error'.
 */
export const renderMessageBar = (message, type) => {
  let messageBarHTML = '';
  if (type === 'success') {
    messageBarHTML = `<div class="message-bar success">${message}</div>`;
  } else if (type === 'error') {
    messageBarHTML = `<div class="message-bar error">${message}</div>`;
  }
  q('body').insertAdjacentHTML('beforeend', messageBarHTML);
  setTimeout(() => {
    q('.message-bar').remove();
  }, 3000);
};
