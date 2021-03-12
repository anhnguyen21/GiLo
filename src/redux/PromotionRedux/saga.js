import { call, takeLatest, put } from 'redux-saga/effects';
import PromotionActions, { PromotionTypes } from './action';
import { getPromotionApi } from '../../api/auth';

export function* getPromotion() {
  try {
    console.log('review');
    const response = yield call(getPromotionApi);
    const newResponse = {
      data: response.data,
    };
    console.log(newResponse.data);
    yield put(PromotionActions.promotionSuccess(newResponse));
  } catch (error) {
    console.log(error);
    yield put(PromotionActions.promotionFail(error));
  }
}
const getPromotionSaga = () => [takeLatest(PromotionTypes.GET_PROMOTION, getPromotion)];
export default getPromotionSaga();
