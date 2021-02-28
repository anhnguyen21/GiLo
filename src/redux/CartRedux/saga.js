import { call, takeLatest, put } from 'redux-saga/effects';
import CartAction, { CartType, AddCartType } from './action';
import { getCartApi, addToCartApi } from '../../api/auth';

export function* getCart({ data, onSuccess }) {
  try {
    console.log(data);
    const response = yield call(getCartApi, data);
    console.log(data);
    yield put(CartAction.cartSuccess(response.data));
    onSuccess && onSuccess();
  } catch (error) {
    console.log(error);
    yield put(CartAction.cartFailure(error));
  }
}

export function* addToCart({ data }) {
  try {
    const response = yield call(addToCartApi, data);
    console.log('add to cart');
    yield put(CartAction.cartAddSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(CartAction.cartAddFailure(error));
  }
}
const getCartSagas = () => [
  takeLatest(CartType.CARTTYPE, getCart),
  takeLatest(AddCartType.ADDCARTTYPE, addToCart),
];
export default getCartSagas();
