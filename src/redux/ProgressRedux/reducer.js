import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../Utils/Utils';
import { ProgressTypes } from './action';

export const INITIAL_STATE = Immutable({
  loading: false,
  responseProgress: null,
});

export const getProgress = (state, { response }) => state.merge({ loading: true });
export const getProgressSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    responseProgress: response,
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [ProgressTypes.GET_PROGRESS]: getProgress,
  [ProgressTypes.GET_PROGRESS_SUCCESS]: getProgressSuccess,
});

export default reducer;
