import http from './http';

export async function userLoginApi(data) {
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

export async function ReviewtypesApis(data) {
  return http.get('api/review/' + data);
}

export async function getCartApi(data) {
  return http.get('api/order/' + data);
}

export async function addToCartApi(data) {
  return http.post('api/addproducttoorder', data);
}
