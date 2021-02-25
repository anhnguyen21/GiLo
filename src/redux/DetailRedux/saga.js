import { call, takeLatest, put } from 'redux-saga/effects';
import DetailActions, { DetailTypes } from './action';
import { getApiProductDetail } from '../../api/auth';
export function* getProductDetail({ data, onSuccess }) {
  try {
    console.log(data);
    const response = yield call(getApiProductDetail, data);
    console.log(data);
    yield put(DetailActions.getDetailProductSuccess(response.data));
    onSuccess && onSuccess();
  } catch (error) {
    console.log(error);
  }
}
const getProductDetailSagas = () => [takeLatest(DetailTypes.GET_PRODUCT_DETAIL, getProductDetail)];
export default getProductDetailSagas();
