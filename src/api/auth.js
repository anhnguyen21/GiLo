import http from './http';

export async function userLoginApi(data) {
  return http.post('api/login', data);
}

export async function ProductypesApis() {
  return http.get('api/products');
}

export async function getApiProductDetail(data) {
  return http.get('api/product/' + data);
}
