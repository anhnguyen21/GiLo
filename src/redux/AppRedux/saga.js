import { takeLatest, select, put } from 'redux-saga/effects';
import { AppTypes } from './action';
import { introScreen } from '../../navigation/pushScreen';

export function* goToIntroSagas() {
  introScreen();
}

const appSagas = () => [takeLatest(AppTypes.GO_TO_INTRO, goToIntroSagas)];
export default appSagas();
