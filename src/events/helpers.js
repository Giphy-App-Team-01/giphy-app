/**
 * Shorthand for document.querySelector
 * @param {string} selector
 * @return {Element}
 */
export const q = (selector) => document.querySelector(selector);

/**
 * Shorthand for document.querySelectorAll
 * @param {string} selector
 * @return {NodeLists<Element>}
 */
export const qs = (selector) => document.querySelectorAll(selector);

/**
 * Sets the active navigation link based on the provided page.
 *
 * @param {string} page - The page identifier to set as active.
 */
export const setActiveNav = (page) => {
  const navs = qs('a.nav-link');

  Array.from(navs).forEach((element) =>
    element.getAttribute('data-page') === page
      ? element.classList.add('active')
      : element.classList.remove('active')
  );
};


/**
 * Extracts the GIF ID from a given GIF string.
 *
 * @param {string} gifString - The string containing the GIF ID.
 * @return {string} The extracted GIF ID.
 */
export const getGifId = (gifString) => {
  return gifString.split('-')[1];
};

/**
 * Extracts and validates GIF data from API response.
 * @param {Object} gifsResponse - The response object from Giphy API.
 * @return {Array} - Returns an array of GIFs (empty array if no valid data).
 */
export const extractGifs = (gifsResponse) => {
  if (gifsResponse && Array.isArray(gifsResponse.data)) {
    return gifsResponse.data;
  }
  return [];
};

/**
 * Copies the provided text to the clipboard.
 * @param {string} text
 * @return {Promise<void>}
 */
export const copyToClipboard = (text) => navigator.clipboard.writeText(text);


/**
 * Debounces a function by delaying its execution until after a specified
 * amount of time has passed since it was last called.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The number of milliseconds to delay execution.
 * @return {Function} A debounced version of the input function.
 */
export const debounce = (func, delay = 300) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), delay);
  };
};
