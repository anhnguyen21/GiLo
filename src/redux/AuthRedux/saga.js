import { call, takeLatest, put } from 'redux-saga/effects';
import SignUpActions, { SignUpTypes } from './action';
import LoginActions, { LoginTypes } from './action';
import ProductActions, { PRODUCT_TYPES } from '../HomeRedux/action';
import NonficationActions, { NofiTypes } from '../noficationRedux/action';
import { userLoginApi, userRegisterApi } from '../../api/auth';
import SearchActions from '../SearchRedux/action';
import ProgressActions, { ProductType } from '../ProgressRedux/action';
import PromotionActions, { PromotionTypes } from '../PromotionRedux/action';
import { goToIntro } from '../AppRedux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
export function* userLogin({ data }) {
  console.log('Login');
  try {
    console.log('Login');
    const response = yield call(userLoginApi, data);
    const newResponse = {
      data: response.data,
    };
    // yield put(AsyncStorage.setItem('id', JSON.stringify(newResponse.data.idToken)));
    yield put(SearchActions.getSearch());
    yield put(PromotionActions.getPromotion());
    yield put(NonficationActions.getNofication(newResponse.data.idToken));
    yield put(ProgressActions.getProgresscation(newResponse.data.idToken));
    yield put(LoginActions.userLoginSuccess(newResponse.data.idToken));
    saveData(newResponse.data.idToken);
    yield put(ProductActions.getProductTypes());
  } catch (error) {
    console.log(error);
    yield put(LoginActions.userLoginFailure(error));
  }
}
const saveData = async (id) => {
  try {
    await AsyncStorage.setItem('id_token', JSON.stringify(id));
    console.log('Data successfully saved');
  } catch (e) {
    console.log('Failed to save the data to the storage');
  }
};

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

export function* userLogout() {
  yield AsyncStorage.clear();
  yield AsyncStorage.setItem('id_token', '');
  yield put(goToIntro());
}

const userLoginSagas = () => [
  takeLatest(LoginTypes.USER_LOGIN, userLogin),
  takeLatest(LoginTypes.USER_LOGOUT, userLogout),
  takeLatest(SignUpTypes.USER_SIGNUP, userSignUpApi),
];
export default userLoginSagas();
