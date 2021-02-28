import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../Utils/Utils';
import { CartType, AddCartType } from './action';

export const INITIAL_STATE = Immutable({
  loadingData: false,
  responseCart: null,
  error: null,
  responseItemCart: null,
});

export const getCartState = (state) =>
  state.merge({
    loadingData: true,
    error: null,
  });

export const cartSuccessState = (state, { response }) =>
  state.merge({ loadingData: false, error: null, responseCart: response });

export const cartErrorState = (state, { error }) =>
  state.merge({ loadingData: false, error: error });

export const getAddCartState = (state) =>
  state.merge({
    loadingData: true,
    error: null,
  });

export const cartAddSuccessState = (state, { response }) =>
  state.merge({ loadingData: false, error: null, responseItemCart: response });

export const cartAddErrorState = (state, { error }) =>
  state.merge({ loadingData: false, error: error });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [CartType.CARTTYPE]: getCartState,
  [CartType.CARTSUCCESS]: cartSuccessState,
  [CartType.CARTFAILARE]: cartErrorState,
  [AddCartType.ADDCARTTYPE]: getAddCartState,
  [AddCartType.ADDCARTSUCCESS]: cartAddSuccessState,
  [AddCartType.ADDCARTFAILARE]: cartAddErrorState,
});

export default reducer;
