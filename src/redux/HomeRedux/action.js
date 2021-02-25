import { makeActionCreator, makeConstantCreator } from '../../Utils/Utils';
export const ProductTypes = makeConstantCreator(
  'PRODUCT_TYPES',
  'RESPONSE_SUCCESS',
  'RESPONSE_FAILURE',
  'GET_SUGGESTION',
  'GET_SUGGESTION_SUCCESS',
);

// function
const getProductTypes = () => makeActionCreator(ProductTypes.PRODUCT_TYPES);
const responseSuccess = (response) =>
  makeActionCreator(ProductTypes.RESPONSE_SUCCESS, { response });
const responseFailure = (error) => makeActionCreator(ProductTypes.RESPONSE_FAILURE, { error });
const getSuggestion = () => makeActionCreator(ProductTypes.GET_SUGGESTION);
const getSuggestionSuccess = () => makeActionCreator(ProductTypes.GET_SUGGESTION_SUCCESS);

export default {
  getProductTypes,
  responseSuccess,
  responseFailure,
  getSuggestion,
  getSuggestionSuccess,
};
