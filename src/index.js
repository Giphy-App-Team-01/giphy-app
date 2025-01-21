import { q, qs } from './events/helpers.js';
import { CONTAINER_SELECTOR } from './common/constants.js';
document.addEventListener('DOMContentLoaded', (e) => {
  console.log('hello');
  const container = q(CONTAINER_SELECTOR);
  const renderButton = function () {
    return '<button>hello</button>';
  };
  container.innerHTML = renderButton();
});
