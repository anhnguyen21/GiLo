import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../Utils/Utils';
import { SearchTypes } from './action';

export const INITIAL_STATE = Immutable({
  loadingData: false,
  responseSearch: null,
  error: null,
});

export const getSearchType = (state) => state.merge({ loadingData: true });

export const responseSearchType = (state, { response }) =>
  state.merge({
    loadingData: false,
    responseSearch: response.data,
  });

export const responseSearchFailure = (state, { error }) =>
  state.merge({
    loadingSignUp: false,
    error: error,
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [SearchTypes.GET_PROMOTION]: getSearchType,
  [SearchTypes.SEARCH_SUCCESS]: responseSearchType,
  [SearchTypes.SEARCH_FAIL]: responseSearchFailure,
});

export default reducer;
