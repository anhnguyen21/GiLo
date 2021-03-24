import { makeActionCreator, makeConstantCreator } from '../../Utils/Utils';
export const PromotionTypes = makeConstantCreator(
  'GET_PROMOTION',
  'PROMOTION_SUCCESS',
  'PROMOTION_FAIL',
  'SAVE_PROMOTION',
  'SAVE_PROMOTION_SUCCESS',
  'SAVE_PROMOTION_FAIL',
);

const getPromotion = () => makeActionCreator(PromotionTypes.GET_PROMOTION);

const promotionSuccess = (response) =>
  makeActionCreator(PromotionTypes.PROMOTION_SUCCESS, { response });

const promotionFail = () => makeActionCreator(PromotionTypes.PROMOTION_FAIL);

const savePromotion = () => makeActionCreator(PromotionTypes.SAVE_PROMOTION);

const savePromotionSuccess = (response) =>
  makeActionCreator(PromotionTypes.SAVE_PROMOTION_SUCCESS, { response });

const savePromotionFail = () => makeActionCreator(PromotionTypes.SAVE_PROMOTION_FAIL);

export default {
  getPromotion,
  promotionSuccess,
  promotionFail,
  savePromotion,
  savePromotionSuccess,
  savePromotionFail,
};
