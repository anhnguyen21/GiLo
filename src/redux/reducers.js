import { combineReducers } from 'redux';
import app from './AppRedux/reducer';
import user from './AuthRedux/reducer';
import home from './HomeRedux/reducer';
import detail from './DetailRedux/reducer';
const rootReducer = combineReducers({
  app,
  user,
  home,
  detail,
});
export default rootReducer;
