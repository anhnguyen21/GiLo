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
import Payment from '../screens/Cart/CheckOut';

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
}
