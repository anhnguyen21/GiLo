import { all } from 'redux-saga/effects';
import appSaga from './AppRedux/saga';
import authSaga from './AuthRedux/saga';
import homeSaga from './HomeRedux/saga';
import detailSaga from './DetailRedux/saga';
import reviewSaga from './ReviewRedux/saga';
import cartSaga from './CartRedux/saga';

export default function* root() {
  yield all([...appSaga, ...authSaga, ...homeSaga, ...detailSaga, ...reviewSaga, ...cartSaga]);
}
