import { call, takeLatest, put } from 'redux-saga/effects';
import ProductypeActions, { ProductTypes } from './action';
import { ProductypesApis } from '../../api/auth';
import { homeScreen } from '../../navigation/pushScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
export function* ProductypesApi() {
  try {
    const response = yield call(ProductypesApis);
    const newResponse = {
      data: response.data,
    };
    yield put(ProductypeActions.responseSuccess(newResponse));
    readData();
    homeScreen();
  } catch (error) {
    console.log(error);
    yield put(ProductypeActions.responseFailure(error));
  }
}
const readData = async () => {
  try {
    const userAge = await AsyncStorage.getItem('id_token');
    console.log("Hiển thị token");
    console.log(userAge);
  } catch (e) {
    console.log('Failed to fetch the data from storage');
  }
};
const userProductypesSaga = () => [takeLatest(ProductTypes.PRODUCT_TYPES, ProductypesApi)];
export default userProductypesSaga();
