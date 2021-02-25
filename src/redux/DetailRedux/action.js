import { makeActionCreator, makeConstantCreator } from '../../Utils/Utils';

export const DetailTypes = makeConstantCreator('GET_PRODUCT_DETAIL', 'GET_PRODUCT_DETAIL_SUCCESS');

const getDetailProduct = (data, onSuccess) =>
  makeActionCreator(DetailTypes.GET_PRODUCT_DETAIL, { data, onSuccess });
const getDetailProductSuccess = (response) =>
  makeActionCreator(DetailTypes.GET_PRODUCT_DETAIL_SUCCESS, { response });
export default { getDetailProduct, getDetailProductSuccess };
