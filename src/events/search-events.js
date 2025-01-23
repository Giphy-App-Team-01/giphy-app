import { CONTAINER_SELECTOR } from '../common/constants.js';
import { fetchSearch } from '../requests/request-service.js';
import { toSearchView } from '../views/search-view.js';
import { updateFavoriteButtons } from './favorites-events.js';

import { q } from './helpers.js';

/**
 * Renders the search results for GIFs based on the provided search term.
 *
 * @param {string} searchTerm - The term to search for GIFs.
 * @return {Promise<void>} A promise that resolves when the search results are rendered.
 */
export const renderSearchGifs = async (searchTerm) => {
  const result = await fetchSearch(searchTerm);
  const searchHTML = toSearchView(result, searchTerm);
  q('#search-input').value = '';
  q(CONTAINER_SELECTOR).innerHTML = searchHTML;
  updateFavoriteButtons();
};
