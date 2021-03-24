import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../Utils/Utils';
import { PromotionTypes } from './action';

export const INITIAL_STATE = Immutable({
  loadingData: false,
  responsePromotion: null,
  savePromotion: null,
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

export const savePromotionType = (state) => state.merge({ loadingData: true });

export const saveResponsePromotionType = (state, { response }) =>
  state.merge({
    loadingData: false,
    savePromotion: response.data,
  });

export const saveResponsePromotionFailure = (state, { error }) =>
  state.merge({
    loadingSignUp: false,
    error: error,
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [PromotionTypes.GET_PROMOTION]: getPromotionType,
  [PromotionTypes.PROMOTION_SUCCESS]: responsePromotionType,
  [PromotionTypes.PROMOTION_FAIL]: responsePromotionFailure,
  [PromotionTypes.SAVE_PROMOTION]: savePromotionType,
  [PromotionTypes.SAVE_PROMOTION_SUCCESS]: saveResponsePromotionType,
  [PromotionTypes.SAVE_PROMOTION_FAIL]: saveResponsePromotionFailure,
});

export default reducer;
