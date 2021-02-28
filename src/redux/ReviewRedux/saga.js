import { call, takeLatest, put } from 'redux-saga/effects';
import ReviewActions, { ReviewTypes } from './action';
import { ReviewtypesApis } from '../../api/auth';

export function* ReviewtypesApi({ data, onSuccess }) {
  try {
    console.log('review');
    const response = yield call(ReviewtypesApis, data);
    const newResponse = {
      data: response.data,
    };
    console.log(newResponse.data);
    yield put(ReviewActions.getReviewSuccess(newResponse));
    onSuccess && onSuccess();
  } catch (error) {
    console.log(error);
    yield put(ReviewActions.getReviewFail(error));
  }
}
const userReviewtypesSaga = () => [takeLatest(ReviewTypes.REVIEWTYPES, ReviewtypesApi)];
export default userReviewtypesSaga();
