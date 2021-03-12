import { makeActionCreator, makeConstantCreator } from '../../Utils/Utils';
export const PromotionTypes = makeConstantCreator(
  'GET_PROMOTION',
  'PROMOTION_SUCCESS',
  'PROMOTION_FAIL',
);

const getPromotion = () => makeActionCreator(PromotionTypes.GET_PROMOTION);

const promotionSuccess = (response) =>
  makeActionCreator(PromotionTypes.PROMOTION_SUCCESS, { response });

const promotionFail = () => makeActionCreator(PromotionTypes.PROMOTION_FAIL);

export default {
  getPromotion,
  promotionSuccess,
  promotionFail,
};
