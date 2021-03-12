import { combineReducers } from 'redux';
import app from './AppRedux/reducer';
import user from './AuthRedux/reducer';
import home from './HomeRedux/reducer';
import detail from './DetailRedux/reducer';
import review from './ReviewRedux/reducer';
import cart from './CartRedux/reducer';
import chat from './ChatRedux/reducer';
import nofication from './noficationRedux/reducer';
import progress from './ProgressRedux/reducer';
import promotion from './PromotionRedux/reducer';
const rootReducer = combineReducers({
  app,
  user,
  home,
  detail,
  review,
  cart,
  chat,
  nofication,
  progress,
  promotion,
});
export default rootReducer;
