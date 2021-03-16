import { makeActionCreator, makeConstantCreator } from '../../Utils/Utils';
export const SearchTypes = makeConstantCreator('GET_SEARCH', 'SEARCH_SUCCESS', 'SEARCH_FAIL');

const getSearch = () => makeActionCreator(SearchTypes.GET_SEARCH);

const SearchSuccess = (response) => makeActionCreator(SearchTypes.SEARCH_SUCCESS, { response });

const SearchFail = () => makeActionCreator(SearchTypes.SEARCH_FAIL);

export default {
  getSearch,
  SearchSuccess,
  SearchFail,
};
