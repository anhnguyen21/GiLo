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

export function* userSignUpApi({ data, onSuccess }) {
  console.log(data);
  try {
    const response = yield call(userRegisterApi, data);
    const newResponse = {
      data: response.data,
    };
    yield put(SignUpActions.userSignUpSuccess(newResponse));
    onSuccess && onSuccess();
    console.log('SignUp success');
  } catch (error) {
    console.log(error);
    yield put(SignUpActions.userSignUpFailure(error));
  }
}

const userLoginSagas = () => [
  takeLatest(LoginTypes.USER_LOGIN, userLogin),
  takeLatest(SignUpTypes.USER_SIGNUP, userSignUpApi),
];
export default userLoginSagas();
