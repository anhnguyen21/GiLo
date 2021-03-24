import { makeActionCreator, makeConstantCreator } from '../../Utils/Utils';
export const CartType = makeConstantCreator('CARTTYPE', 'CARTSUCCESS', 'CARTFAILARE');

export const AddCartType = makeConstantCreator('ADDCARTTYPE', 'ADDCARTSUCCESS', 'ADDCARTFAILARE');

export const DeleteCartType = makeConstantCreator(
  'DELETECARTTYPE',
  'DELETECARTSUCCESS',
  'DELETECARTFAILARE',
);

const getCart = (data, onSuccess) => makeActionCreator(CartType.CARTTYPE, { data, onSuccess });

const cartSuccess = (response) => makeActionCreator(CartType.CARTSUCCESS, { response });

const cartFailure = (error) => makeActionCreator(CartType.CARTFAILARE, { error });

const getAddCart = (data) => makeActionCreator(AddCartType.ADDCARTTYPE, { data });

const cartAddSuccess = (response) => makeActionCreator(AddCartType.ADDCARTSUCCESS, { response });

const cartAddFailure = (error) => makeActionCreator(AddCartType.ADDCARTFAILARE, { error });

const getDeleteCart = (data) => makeActionCreator(DeleteCartType.DELETECARTTYPE, { data });

const cartDeleteSuccess = (response) =>
  makeActionCreator(DeleteCartType.DELETECARTSUCCESS, { response });

const cartDeleteFailure = (error) => makeActionCreator(DeleteCartType.DELETECARTFAILARE, { error });

export default {
  getCart,
  cartSuccess,
  cartFailure,
  getAddCart,
  cartAddFailure,
  cartAddSuccess,
  getDeleteCart,
  cartDeleteSuccess,
  cartDeleteFailure,
};
