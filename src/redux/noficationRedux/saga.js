import { call, takeLatest, put } from 'redux-saga/effects';
import Nonfication, { NofiTypes } from './action';
import { getApiNofication } from '../../api/auth';

export function* getNofication({ data }) {
  try {
    console.log(data);
    const response = yield call(getApiNofication, data);
    console.log(data);
    yield put(Nonfication.getNoficationSuccess(response.data));
    // onSuccess && onSuccess();
  } catch (error) {
    console.log(error);
  }
}
const getNoficationSagas = () => [takeLatest(NofiTypes.GET_NOFI, getNofication)];
export default getNoficationSagas();
