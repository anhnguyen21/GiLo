import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../Utils/Utils';
import { ProductTypes } from './action';

export const INITIAL_STATE = Immutable({
  loadingData: false,
  responseDataType: null,
  error: null,
  responseSuggestion: null,
});

export const ProductType = (state) => state.merge({ loadingData: true, signUpError: null });

export const responseTypesProductSuccess = (state, { response }) =>
  state.merge({
    loadingData: false,
    error: null,
    responseDataType: response.data,
  });
export const responseTypesProductFailure = (state, { error }) =>
  state.merge({
    loadingSignUp: false,
    error: error,
  });
export const getSuggestion = (state) => state.merge({ responseSuggestion: null });
export const getSuggestionSuccess = (state, response) =>
  state.merge({ responseSuggestion: response });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [ProductTypes.PRODUCT_TYPES]: ProductType,
  [ProductTypes.RESPONSE_SUCCESS]: responseTypesProductSuccess,
  [ProductTypes.RESPONSE_FAILURE]: responseTypesProductFailure,
  [ProductTypes.GET_SUGGESTION]: getSuggestion,
  [ProductTypes.GET_SUGGESTION_SUCCESS]: getSuggestionSuccess,
});

export default reducer;
