import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../Utils/Utils';
import { NofiTypes } from './action';

export const INITIAL_STATE = Immutable({
  loading: false,
  responseNofication: null,
});

export const getNofication = (state, { response }) => state.merge({ loading: true });
export const getNoficationSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    responseNofication: response,
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [NofiTypes.GET_NOFI]: getNofication,
  [NofiTypes.GET_NOFI_SUCCESS]: getNoficationSuccess,
});

export default reducer;
