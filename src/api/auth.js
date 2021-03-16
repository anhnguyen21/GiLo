import http from './http';

export async function userLoginApi(data) {
  console.log("check api");
  return http.post('api/login', data);
}

export async function userRegisterApi(data) {
  return http.post('api/account', data);
}

export async function ProductypesApis() {
  return http.get('api/products');
}

export async function getApiProductDetail(data) {
  return http.get('api/product/' + data);
}

export async function getApiProductChat(data) {
  return http.post('api/getChat', data);
}

export async function getApiMessageChat(data) {
  return http.post('api/getInsertChat', data);
}

export async function ReviewtypesApis(data) {
  return http.get('api/review/' + data);
}

export async function getCartApi(data) {
  return http.get('api/order/' + data);
}

export async function addToCartApi(data) {
  return http.post('api/addproducttoorder', data);
}

export async function getApiNofication(data) {
  return http.get('api/nofication/' + data);
}

export async function getApiProgress(data) {
  return http.get('api/progress/' + data);
}

export async function getPromotionApi() {
  return http.get('api/promotion');
}

export async function getSearchApi() {
  return http.get('api/search');
}
