import { q } from '../events/helpers.js';
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
