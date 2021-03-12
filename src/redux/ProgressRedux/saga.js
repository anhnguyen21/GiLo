import { call, takeLatest, put } from 'redux-saga/effects';
import ProgressActions, { ProgressTypes } from './action';
import { getApiProgress } from '../../api/auth';

export function* getProgress({ data }) {
  try {
    console.log(data);
    const response = yield call(getApiProgress, data);
    console.log(data);
    yield put(ProgressActions.getProgressactionSuccess(response.data));
    // onSuccess && onSuccess();
  } catch (error) {
    console.log(error);
  }
}
const getProgressSagas = () => [takeLatest(ProgressTypes.GET_PROGRESS, getProgress)];
export default getProgressSagas();
