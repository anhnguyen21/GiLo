import { call, takeLatest, put } from 'redux-saga/effects';
import SearchActions, { SearchTypes } from './action';
import { getSearchApi } from '../../api/auth';

export function* getSearch({ data }) {
  try {
    console.log('search');
    const response = yield call(getSearchApi, data);
    const newResponse = {
      data: response.data,
    };
    console.log(newResponse.data);
    yield put(SearchActions.SearchSuccess(newResponse));
  } catch (error) {
    console.log(error);
    yield put(SearchActions.SearchFail(error));
  }
}
const getSearchSaga = () => [takeLatest(SearchTypes.GET_SEARCH, getSearch)];
export default getSearchSaga();
