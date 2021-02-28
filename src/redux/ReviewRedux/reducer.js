import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../Utils/Utils';
import { ReviewTypes } from './action';

export const INITIAL_STATE = Immutable({
  loadingData: false,
  responseReviewType: null,
  error: null,
});

export const ReviewType = (state) => state.merge({ loadingData: true, error: null });

export const responseTypesReviewSuccess = (state, { response }) =>
  state.merge({
    loadingData: false,
    responseReviewType: response.data,
    error: null,
  });
export const responseTypesReviewFailure = (state, { error }) =>
  state.merge({
    loadingSignUp: false,
    error: error,
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [ReviewTypes.REVIEWTYPES]: ReviewType,
  [ReviewTypes.REVIEWSUCCESS]: responseTypesReviewSuccess,
  [ReviewTypes.REVIEWFAIL]: responseTypesReviewFailure,
});

export default reducer;
