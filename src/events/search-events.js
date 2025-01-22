import { CONTAINER_SELECTOR } from '../common/constants.js';
import { fetchSearch } from '../requests/request-service.js';
import { toSearchView } from '../views/search-view.js';

import { q } from './helpers.js';

export const renderSearchGifs = async (searchTerm) => {
  const result = await fetchSearch(searchTerm);
  const searchHTML = toSearchView(result, searchTerm);
  q('#search-input').value = '';
  q(CONTAINER_SELECTOR).innerHTML = searchHTML;
};
