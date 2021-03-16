// import { Navigation } from 'react-native-navigation';
// // -import {AppRegistry} from 'react-native';
// import App from './src/screens/Search/SearchResult';
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

import { introScreen } from './src/navigation/pushScreen';
import { registerScreens } from './src/navigation/registerScreen';
registerScreens();
introScreen();
