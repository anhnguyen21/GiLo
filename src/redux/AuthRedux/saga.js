import { call, takeLatest, put } from 'redux-saga/effects';
import SignUpActions, { SignUpTypes } from './action';
import LoginActions, { LoginTypes } from './action';
import ProductActions, { PRODUCT_TYPES } from '../HomeRedux/action';
import { userLoginApi, userRegisterApi } from '../../api/auth';
import { homeScreen } from '../../navigation/pushScreen';
export function* userLogin({ data }) {
  console.log('Login');
  try {
    console.log('Login');
    const response = yield call(userLoginApi, data);
    const newResponse = {
      data: response.data,
    };
    yield put(LoginActions.userLoginSuccess(newResponse));
    yield put(ProductActions.getProductTypes());
  } catch (error) {
    console.log(error);
    yield put(LoginActions.userLoginFailure(error));
  }
}

const userLoginSagas = () => [takeLatest(LoginTypes.USER_LOGIN, userLogin)];
export default userLoginSagas();
