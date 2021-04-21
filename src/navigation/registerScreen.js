import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Login from '../screens/Authur/login';
import Signup from '../screens/Authur/signup';
import Intro from '../screens/intro/index';
import Home from '../screens/Home/index';
import Detail from '../screens/Detail/index';
import Cart from '../screens/Cart/index';
import Profile from '../screens/Profile/index';
import Review from '../screens/Profile/Review';
import NotificationDetail from '../screens/Profile/NonficationDetail';
import Order from '../screens/Cart/order';
import Start from '../screens/Authur/Start';
import UpdateProfile from '../screens/Profile/UpdateProfile';
import Nonfication from '../screens/Profile/Nontification';
import Payment from '../screens/Cart/NewPay';
import Chat from '../screens/Chat/index';
import Map from '../screens/Map/index';
import MyOrder from '../screens/Profile/MyOrder';
import CheckOut from '../screens/Cart/CheckOut';
import PromoCode from '../screens/Profile/PromoCode';
import PromoCodeDetails from '../screens/Profile/PromoteCodeDetail';
import OrderDetail from '../screens/Profile/OrderDetail';
import Address from '../screens/Map/address';
import Search from '../screens/Search/index';
import digitCode from '../screens/Authur/digitCode';
import age from '../screens/Reference/age';
import Ifresender from '../screens/Reference/chooseCategory';
import interested from '../screens/Reference/interested';
import Color from '../screens/Reference/color';
import introReference from '../screens/Reference/introReference';
import gender from '../screens/Reference/gender';
import Result from '../screens/Reference/result';

function ReduxProvider(Component) {
  return (props) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export function registerScreens() {
  Navigation.registerComponent(
    'Intro',
    () => ReduxProvider(Intro),
    () => Intro,
  );
  Navigation.registerComponent(
    'Start',
    () => ReduxProvider(Start),
    () => Start,
  );
  Navigation.registerComponent(
    'SignUp',
    () => ReduxProvider(Signup),
    () => Signup,
  );
  Navigation.registerComponent(
    'Login',
    () => ReduxProvider(Login),
    () => Login,
  );
  Navigation.registerComponent(
    'Home',
    () => ReduxProvider(Home),
    () => Home,
  );
  Navigation.registerComponent(
    'Detail',
    () => ReduxProvider(Detail),
    () => Detail,
  );
  Navigation.registerComponent(
    'Cart',
    () => ReduxProvider(Cart),
    () => Cart,
  );
  Navigation.registerComponent(
    'Profile',
    () => ReduxProvider(Profile),
    () => Profile,
  );
  Navigation.registerComponent(
    'Review',
    () => ReduxProvider(Review),
    () => Review,
  );
  Navigation.registerComponent(
    'NotificationDetail',
    () => ReduxProvider(NotificationDetail),
    () => NotificationDetail,
  );
  Navigation.registerComponent(
    'Order',
    () => ReduxProvider(Order),
    () => Order,
  );
  Navigation.registerComponent(
    'UpdateProfile',
    () => ReduxProvider(UpdateProfile),
    () => UpdateProfile,
  );
  Navigation.registerComponent(
    'Nonfication',
    () => ReduxProvider(Nonfication),
    () => Nonfication,
  );
  Navigation.registerComponent(
    'Payment',
    () => ReduxProvider(Payment),
    () => Payment,
  );
  Navigation.registerComponent(
    'Chat',
    () => ReduxProvider(Chat),
    () => Chat,
  );
  Navigation.registerComponent(
    'Map',
    () => ReduxProvider(Map),
    () => Map,
  );
  Navigation.registerComponent(
    'MyOrder',
    () => ReduxProvider(MyOrder),
    () => MyOrder,
  );
  Navigation.registerComponent(
    'CheckOut',
    () => ReduxProvider(CheckOut),
    () => CheckOut,
  );
  Navigation.registerComponent(
    'PromoCode',
    () => ReduxProvider(PromoCode),
    () => PromoCode,
  );
  Navigation.registerComponent(
    'PromoCodeDetails',
    () => ReduxProvider(PromoCodeDetails),
    () => PromoCodeDetails,
  );
  Navigation.registerComponent(
    'OrderDetail',
    () => ReduxProvider(OrderDetail),
    () => OrderDetail,
  );
  Navigation.registerComponent(
    'Address',
    () => ReduxProvider(Address),
    () => Address,
  );
  Navigation.registerComponent(
    'Search',
    () => ReduxProvider(Search),
    () => Search,
  );
  Navigation.registerComponent(
    'MyOrder',
    () => ReduxProvider(MyOrder),
    () => MyOrder,
  );
  Navigation.registerComponent(
    'digitCode',
    () => ReduxProvider(digitCode),
    () => digitCode,
  );
  Navigation.registerComponent(
    'age',
    () => ReduxProvider(age),
    () => age,
  );
  Navigation.registerComponent(
    'Ifresender',
    () => ReduxProvider(Ifresender),
    () => Ifresender,
  );
  Navigation.registerComponent(
    'interested',
    () => ReduxProvider(interested),
    () => interested,
  );
  Navigation.registerComponent(
    'Color',
    () => ReduxProvider(Color),
    () => Color,
  );
  Navigation.registerComponent(
    'Result',
    () => ReduxProvider(Result),
    () => Result,
  );
  Navigation.registerComponent(
    'introReference',
    () => ReduxProvider(introReference),
    () => introReference,
  );
  Navigation.registerComponent(
    'gender',
    () => ReduxProvider(gender),
    () => gender,
  );
}
