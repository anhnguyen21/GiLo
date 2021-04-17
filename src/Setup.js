import { Navigation } from 'react-native-navigation';
import { registerScreens } from './navigation/registerScreen';
import { userStartApp, goToIntro } from './redux/AppRedux/action';
import store from './redux/store';
import { loginScreen } from './navigation/pushScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  Navigation.events().registerAppLaunchedListener(async () => {
    try {
      await registerScreens();
      const token = await AsyncStorage.getItem('id_token');
      const skip = await AsyncStorage.getItem('skip');
      console.log(token);
      console.log(skip);
      if (token !== null) {
        await store.dispatch(userStartApp());
      } else {
        if (skip === 'true') {
          loginScreen();
        } else {
          await AsyncStorage.setItem('skip', JSON.stringify(true));
          const skip1 = await AsyncStorage.getItem('skip');
          console.log(skip1);
          await store.dispatch(goToIntro());
        }
      }
    } catch (error) {
      console.log('Init unsuccessful', error.message);
    }
  });
};

export default App;

// import { introScreen } from './src/navigation/pushScreen';
// import { registerScreens } from './src/navigation/registerScreen';
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
