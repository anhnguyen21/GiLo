import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../Utils/Utils';
import { AppTypes } from './action';

export const INITIAL_STATE = Immutable({
  loadingApp: true,
  AppTypes: '',
});

export const userStartApp = (state, { response }) =>
  state.merge({ loadingApp: false, AppTypes: '' });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [AppTypes.GO_TO_INTRO]: userStartApp,
});

export default reducer;
