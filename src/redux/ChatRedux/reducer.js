import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../Utils/Utils';
import { ChatTypes } from './action';

export const INITIAL_STATE = Immutable({
  loadingProductChat: false,
  responseProductChat: null,
  typeProductChat: '',
});

export const getProductChat = (state, { response }) =>
  state.merge({ loadingProductChat: true, typeProductChat: 'User get Chat Product ' });
export const getProductChatSuccess = (state, { response }) =>
  state.merge({
    loadingProductChat: false,
    responseProductChat: response,
    typeProductChat: 'User  get Chat Product success',
  });
export const getInsertProductChat = (state, { response }) =>
  state.merge({ loadingProductChat: true, typeProductChat: 'Insert Message ' });
export const getInsertProductChatSuccess = (state, { response }) =>
  state.merge({
    loadingProductChat: false,
    typeProductChat: 'insert message success',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [ChatTypes.GET_CHAT]: getProductChat,
  [ChatTypes.GET_CHAT_SUCCESS]: getProductChatSuccess,
  [ChatTypes.INSERT_MESSAGE]: getInsertProductChat,
  [ChatTypes.INSERT_MESSAGE_SUCCESS]: getInsertProductChatSuccess,
});

export default reducer;
