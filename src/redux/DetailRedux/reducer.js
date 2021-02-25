import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../Utils/Utils';
import { DetailTypes } from './action';

export const INITIAL_STATE = Immutable({
  loadingProductDetail: false,
  responseProductDetail: null,
  typeProductDetail: '',
});

export const getProductDetail = (state, { response }) =>
  state.merge({ loadingProductDetail: true, typeProductDetail: 'User get detail Product ' });
export const getProductDetailSuccess = (state, { response }) =>
  state.merge({
    loadingProductDetail: false,
    responseProductDetail: response,
    typeProductDetail: 'User  get detail Product success',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [DetailTypes.GET_PRODUCT_DETAIL]: getProductDetail,
  [DetailTypes.GET_PRODUCT_DETAIL_SUCCESS]: getProductDetailSuccess,
});

export default reducer;
