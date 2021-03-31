// import React, { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import firebase from '@react-native-firebase/app';
// import auth from '@react-native-firebase/auth';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-community/google-signin';
// import { GoogleLogin } from 'react-google-login';

// const uploadImage = () => {
//   const [state, setstate] = useState('');
//   const [isSigninInProgress, setisSigninInProgress] = useState('');
//   const _signIn = async () => {
//     console.log('123');
//     GoogleSignin.configure({
//       scopes: [],
//       webClientId: '1057644567623-qf2ug4dbdakeresdkebgkdis5c1bqaka.apps.googleusercontent.com',
//       androidClientId: '1057644567623-qf2ug4dbdakeresdkebgkdis5c1bqaka.apps.googleusercontent.com',
//       offlineAccess: false,
//       forceConsentPrompt: true,
//     });
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       console.log(userInfo);
//     } catch (error) {
//       console.log(error);
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // user cancelled the login flow
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // operation (e.g. sign in) is in progress already
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // play services not available or outdated
//       } else {
//         // some other error happened
//       }
//     }
//   };
//   const signOut = async () => {
//     try {
//       await GoogleSignin.revokeAccess();
//       await GoogleSignin.signOut();
//       // this.setState({ user: null }); // Remember to remove the user from your app's state as well
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <View>
//       <Text>SignUp</Text>
//       <GoogleSigninButton
//         style={{ width: 192, height: 48 }}
//         size={GoogleSigninButton.Size.Wide}
//         color={GoogleSigninButton.Color.Dark}
//         onPress={() => _signIn()}
//         // disabled={isSigninInProgress}
//       />
//       <TouchableOpacity onPress={() => signOut()}>
//         <Text>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default uploadImage;

// const styles = StyleSheet.create({});

import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';

export default class Login extends Component {
  render() {
    const onLogin = () => {
      LoginManager.logInWithPermissions(['public_profile']).then(
        function (result) {
          if (result.isCancelled) {
            console.log('Login cancelled');
          } else {
            console.log('Login success with permissions: ' + result.grantedPermissions.toString());
          }
        },
        function (error) {
          console.log('Login fail with error: ' + error);
        },
      );
    };
    return (
      <View>
        <LoginButton
          onPress={() => onLogin()}
          onLoginFinished={(error, result) => {
            console.log(result);
            if (error) {
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then((data) => {
                console.log(data);
                console.log(data.accessToken.toString());
              });
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
        />
      </View>
    );
  }
}
