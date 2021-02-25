import { call, takeLatest, put } from 'redux-saga/effects';
import ProductypeActions, { ProductTypes } from './action';
import { ProductypesApis } from '../../api/auth';
import { homeScreen } from '../../navigation/pushScreen';
export function* ProductypesApi() {
  try {
    const response = yield call(ProductypesApis);
    const newResponse = {
      data: response.data,
    };
    yield put(ProductypeActions.responseSuccess(newResponse));
    homeScreen();
  } catch (error) {
    console.log(error);
    yield put(ProductypeActions.responseFailure(error));
  }
}
const userProductypesSaga = () => [takeLatest(ProductTypes.PRODUCT_TYPES, ProductypesApi)];
export default userProductypesSaga();
