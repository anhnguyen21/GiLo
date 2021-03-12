import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../Utils/Utils';
import { PromotionTypes } from './action';

export const INITIAL_STATE = Immutable({
  loadingData: false,
  responsePromotion: null,
  error: null,
});

export const getPromotionType = (state) => state.merge({ loadingData: true });

export const responsePromotionType = (state, { response }) =>
  state.merge({
    loadingData: false,
    responsePromotion: response.data,
  });

export const responsePromotionFailure = (state, { error }) =>
  state.merge({
    loadingSignUp: false,
    error: error,
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [PromotionTypes.GET_PROMOTION]: getPromotionType,
  [PromotionTypes.PROMOTION_SUCCESS]: responsePromotionType,
  [PromotionTypes.PROMOTION_FAIL]: responsePromotionFailure,
});

export default reducer;
