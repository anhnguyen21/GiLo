import { makeActionCreator, makeConstantCreator } from '../../Utils/Utils';
export const NofiTypes = makeConstantCreator('GET_NOFI', 'GET_NOFI_SUCCESS', 'GET_NOFI_FAIL');

const getNofication = (data) => makeActionCreator(NofiTypes.GET_NOFI, { data });
const getNoficationSuccess = (response) =>
  makeActionCreator(NofiTypes.GET_NOFI_SUCCESS, { response });
export default { getNofication, getNoficationSuccess };
