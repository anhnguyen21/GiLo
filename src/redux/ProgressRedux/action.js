import { makeActionCreator, makeConstantCreator } from '../../Utils/Utils';
export const ProgressTypes = makeConstantCreator(
  'GET_PROGRESS',
  'GET_PROGRESS_SUCCESS',
  'GET_PROGRESS_FAIL',
);

const getProgresscation = (data) => makeActionCreator(ProgressTypes.GET_PROGRESS, { data });
const getProgressactionSuccess = (response) =>
  makeActionCreator(ProgressTypes.GET_PROGRESS_SUCCESS, { response });
export default { getProgresscation, getProgressactionSuccess };
