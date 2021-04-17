// import { Navigation } from 'react-native-navigation';
// // -import {AppRegistry} from 'react-native';
// import App from './src/screens/Cart/EmptyCart';
// // -import {name as appName} from './app.json';
// // -AppRegistry.registerComponent(appName, () => App);
// Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'com.myApp.WelcomeScreen',
//               options: {
//                 topBar: {
//                   visible: false,
//                 },
//               },
//             },
//           },
//         ],
//       },
//     },
//   });
// });

// import { introScreen } from './src/navigation/pushScreen';
// import { registerScreens } from './src/navigation/registerScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { homeScreen } from './src/navigation/pushScreen';

// registerScreens();
// introScreen();
import { registerScreens } from './src/navigation/registerScreen';
import Setup from './src/Setup';
Setup();
registerScreens();

// readData();
// const readData = async () => {
//   try {
//     const userAge = await AsyncStorage.getItem('id_token');
//     if (userAge !== null) {
//       registerScreens();
//       homeScreen();
//     } else {
//       registerScreens();
//       introScreen();
//     }
//   } catch (e) {
//     console.log('Failed to fetch the data from storage');
//   }
// };
