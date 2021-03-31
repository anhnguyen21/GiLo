/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import gift from '../../assests/img/gift.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { homeScreen, pushScreen } from '../../navigation/pushScreen';
import { useDispatch, useSelector } from 'react-redux';
import LoginActions from '../../redux/AuthRedux/action';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import SignUpActions from '../../redux/AuthRedux/action';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import { GoogleLogin } from 'react-google-login';

const login = (props) => {
  const [state, setstate] = useState('');
  const [account, setAccount] = useState('');
  const [isSigninInProgress, setisSigninInProgress] = useState('');
  const _signIn = async () => {
    console.log('123');
    GoogleSignin.configure({
      scopes: [],
      webClientId: '1057644567623-qf2ug4dbdakeresdkebgkdis5c1bqaka.apps.googleusercontent.com',
      androidClientId: '1057644567623-qf2ug4dbdakeresdkebgkdis5c1bqaka.apps.googleusercontent.com',
      offlineAccess: false,
      forceConsentPrompt: true,
    });
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('step 1');
    const dataSignUp = {
      account: userInfo.user.name,
      firstName: userInfo.user.givenName,
      lastName: userInfo.user.familyName,
      email: userInfo.user.email,
      password: '123',
      address: userInfo.user.id,
      phone: '0123456789',
      gender: '1',
      brithday: '10/10',
      img: userInfo.user.photo,
    };
    console.log(dataSignUp);
    await dispatch(SignUpActions.userSignUp(dataSignUp, onSuccess()));
    const dataLogin = {
      account: userInfo.user.name,
      password: '123',
    };
    dispatch(LoginActions.userLogin(dataLogin));
    console.log(userInfo);
  };

  const onSuccess = () => {
    console.log('login with google');
    // console.log(state);
    // const dataLogin = {
    //   account: state,
    //   password: '123',
    // };
    // dispatch(LoginActions.userLogin(dataLogin));
  };

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const dataErrors = useSelector((state) => state.user.errorLogin);
  const onLoginToSignUp = () => {
    pushScreen(props.componentId, 'SignUp', '', '', false, 'chevron-left', false);
  };
  const onLoginToHome = () => {
    console.log('login google');
    const dataLogin = {
      account: 'anh1999',
      password: '123',
    };
    dispatch(LoginActions.userLogin(dataLogin));
  };

  return (
    <View style={styles.container}>
      <View style={styles.layoutGiLo}>
        <Text style={styles.txtGi}>Gi</Text>
        <Text style={styles.txtLo}>Lo</Text>
      </View>
      <Image style={styles.imgLogin} source={gift} />
      <View style={styles.rowIp}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUserName(text)}
          placeholder="Tên tài khoản"
        />
        {(() => {
          if (dataErrors !== null) {
            if (dataErrors.data.account !== null) {
              return <Text style={styles.txtErrors}>{dataErrors.data.account}</Text>;
            } else {
              return <View />;
            }
          }
        })()}
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          placeholder="Mật khẩu"
          secureTextEntry={true}
        />
        {(() => {
          if (dataErrors !== null) {
            if (dataErrors.data.password !== null) {
              return <Text style={styles.txtErrors}>{dataErrors.data.password}</Text>;
            }
          }
        })()}
      </View>
      <TouchableOpacity style={styles.btnLogin} onPress={() => onLoginToHome()}>
        <Text style={styles.txtLogin}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSignup} onPress={() => onLoginToSignUp()}>
        <Text style={styles.txtSignup}>Đăng kí</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot}>Lấy lại mật khẩu</Text>
      </TouchableOpacity>
      <Text style={styles.txtOther}>or</Text>
      <View style={styles.layoutIcon}>
        <View style={[styles.itemBorder, { backgroundColor: '#355295' }]}>
          <LoginButton
            style={{
              width: 120,
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 20,
            }}
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
                  console.log('1234');
                });
              }
            }}
            onLogoutFinished={() => console.log('logout.')}
          />
        </View>
        <View style={[styles.itemBorder, { backgroundColor: '#e5423a' }]}>
          <GoogleSigninButton
            style={{ width: 150, height: 55 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => _signIn()}
          />
        </View>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    margin: 50,
    alignItems: 'center',
  },
  layoutGiLo: {
    flexDirection: 'row',
  },
  txtGi: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  txtLo: {
    fontSize: 24,
    color: '#f070a9',
    fontWeight: 'bold',
  },
  imgLogin: {
    width: 250,
    height: 250,
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#f070a9',
    width: 300,
    paddingLeft: 20,
    height: 40,
    marginBottom: 15,
  },
  txtErrors: {
    marginBottom: 10,
    color: 'red',
  },
  btnLogin: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
    borderRadius: 20,
    width: 200,
    height: 40,
  },
  txtLogin: {
    fontSize: 16,
  },
  btnSignup: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f070a9',
    borderRadius: 20,
    width: 200,
    height: 40,
  },
  txtSignup: {
    fontSize: 16,
    color: '#fff',
  },
  forgot: {
    marginTop: 15,
    fontSize: 13,
    color: '#808080',
  },
  txtOther: {
    fontSize: 18,
    color: '#555',
    marginTop: 20,
  },
  layoutIcon: {
    marginTop: 15,
    width: 180,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemBorder: {
    // backgroundColor: '#555',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});
