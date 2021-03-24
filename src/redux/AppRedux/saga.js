import { takeLatest, select, put } from 'redux-saga/effects';
import { AppTypes } from './action';
import http from '../../api/http';
import { introScreen, homeScreen } from '../../navigation/pushScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductActions, { PRODUCT_TYPES } from '../HomeRedux/action';
import NonficationActions, { NofiTypes } from '../noficationRedux/action';
import LoginActions, { LoginTypes } from '../AuthRedux/action';
import SearchActions from '../SearchRedux/action';
import ProgressActions, { ProductType } from '../ProgressRedux/action';
import PromotionActions, { PromotionTypes } from '../PromotionRedux/action';
export function* loadingAppSagas() {
  try {
    const storeToken = yield AsyncStorage.getItem('id_token');
    console.log(storeToken);
    let token = null;
    if (storeToken) {
      token = storeToken;
    } else {
      token = yield select((state) => state.users.token);
    }

    http.setAuthorizationHeader(token);
    if (token) {
      yield put(SearchActions.getSearch());
      yield put(PromotionActions.getPromotion());
      yield put(NonficationActions.getNofication(token));
      yield put(ProgressActions.getProgresscation(token));
      yield put(ProductActions.getProductTypes());
      yield put(LoginActions.userLoginSuccess(token));
    } else {
      homeScreen();
    }
  } catch (error) {
    // homeScreen();
    console.log(error);
  }
}

export function* goToIntroSagas() {
  introScreen();
}

export function* makeSkipIntroSagas() {
  yield AsyncStorage.setItem('skip', JSON.stringify(true));
  yield loadingAppSagas();
}

const appSagas = () => [
  takeLatest(AppTypes.START_APP, loadingAppSagas),
  takeLatest(AppTypes.GO_TO_INTRO, goToIntroSagas),
  takeLatest(AppTypes.MAKE_SKIP_INTRO, makeSkipIntroSagas),
];
export default appSagas();
