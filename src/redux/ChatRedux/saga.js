import { call, takeLatest, put } from 'redux-saga/effects';
import ChatActions, { ChatTypes } from './action';
import { getApiProductChat, getApiMessageChat } from '../../api/auth';
export function* getProductChat({ data, onSuccessChat }) {
  try {
    console.log(data);
    const response = yield call(getApiProductChat, data);
    console.log(data);
    yield put(ChatActions.getChatSuccess(response.data));
    onSuccessChat && onSuccessChat();
  } catch (error) {
    console.log(error);
  }
}

export function* getInsertMessageChat({ data, onInsertSuccess }) {
  try {
    console.log(data);
    const response = yield call(getApiMessageChat, data);
    console.log(data);
    yield put(ChatActions.getInsertChatSuccess(response.data));
    onInsertSuccess && onInsertSuccess();
  } catch (error) {
    console.log(error);
  }
}

const getProductChatSagas = () => [
  takeLatest(ChatTypes.GET_CHAT, getProductChat),
  takeLatest(ChatTypes.INSERT_MESSAGE, getInsertMessageChat),
];
export default getProductChatSagas();
