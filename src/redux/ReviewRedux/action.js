import { makeActionCreator, makeConstantCreator } from '../../Utils/Utils';
export const ReviewTypes = makeConstantCreator('REVIEWTYPES', 'REVIEWSUCCESS', 'REVIEWFAIL');

const getReview = (data, onSuccess) =>
  makeActionCreator(ReviewTypes.REVIEWTYPES, { data, onSuccess });

const getReviewSuccess = (response) => makeActionCreator(ReviewTypes.REVIEWSUCCESS, { response });

const getReviewFail = () => makeActionCreator(ReviewTypes.REVIEWFAIL);

export default {
  getReview,
  getReviewSuccess,
  getReviewFail,
};
