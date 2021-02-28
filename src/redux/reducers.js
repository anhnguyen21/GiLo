import { combineReducers } from 'redux';
import app from './AppRedux/reducer';
import user from './AuthRedux/reducer';
import home from './HomeRedux/reducer';
import detail from './DetailRedux/reducer';
import review from './ReviewRedux/reducer';
import cart from './CartRedux/reducer';
const rootReducer = combineReducers({
  app,
  user,
  home,
  detail,
  review,
  cart,
});
export default rootReducer;
