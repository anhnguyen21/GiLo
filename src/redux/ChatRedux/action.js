import { makeActionCreator, makeConstantCreator } from '../../Utils/Utils';

export const ChatTypes = makeConstantCreator(
  'GET_CHAT',
  'GET_CHAT_SUCCESS',
  'GET_CHAT_FAIL',
  'INSERT_MESSAGE',
  'INSERT_MESSAGE_SUCCESS',
  'INSERT_MESSAGE_FAIL',
);

const getChat = (data, onSuccessChat) =>
  makeActionCreator(ChatTypes.GET_CHAT, { data, onSuccessChat });
const getChatSuccess = (response) => makeActionCreator(ChatTypes.GET_CHAT_SUCCESS, { response });
const getInsertChat = (data, onInsertSuccess) =>
  makeActionCreator(ChatTypes.INSERT_MESSAGE, { data, onInsertSuccess });
const getInsertChatSuccess = (response) =>
  makeActionCreator(ChatTypes.INSERT_MESSAGE_SUCCESS, { response });
export default { getChat, getChatSuccess, getInsertChat, getInsertChatSuccess };
