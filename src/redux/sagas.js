import { all } from 'redux-saga/effects';
import appSaga from './AppRedux/saga';
import authSaga from './AuthRedux/saga';
import homeSaga from './HomeRedux/saga';
import detailSaga from './DetailRedux/saga';
import reviewSaga from './ReviewRedux/saga';
import cartSaga from './CartRedux/saga';
import chatSage from './ChatRedux/saga';
import noficationSagas from './noficationRedux/saga';
import progressSaga from './ProgressRedux/saga';
import promotionSaga from './PromotionRedux/saga';

export default function* root() {
  yield all([
    ...appSaga,
    ...authSaga,
    ...homeSaga,
    ...detailSaga,
    ...reviewSaga,
    ...cartSaga,
    ...chatSage,
    ...noficationSagas,
    ...progressSaga,
    ...promotionSaga,
  ]);
}
