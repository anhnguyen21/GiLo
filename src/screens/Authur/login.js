/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import gift from '../../assests/img/gift.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { homeScreen, pushScreen } from '../../navigation/pushScreen';
import { useDispatch, useSelector } from 'react-redux';
import LoginActions from '../../redux/AuthRedux/action';

const login = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const onLoginToSignUp = () => {
    pushScreen(props.componentId, 'SignUp', '', '', false, 'chevron-left');
  };
  const onLoginToHome = () => {
    const dataLogin = {
      account: 'anh1999',
      password: '123',
    };
    if (dataLogin.account === '' || dataLogin.password === '') {
      alert('Bạn phải nhập đầy đủ thông tin !');
    } else {
      dispatch(LoginActions.userLogin(dataLogin));
    }
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
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          placeholder="Mật khẩu"
          secureTextEntry={true}
        />
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
          <Icon styles={styles.iconBorder} name="facebook" size={20} color="#fff" />
        </View>
        <View style={[styles.itemBorder, { backgroundColor: '#e5423a' }]}>
          <Icon styles={styles.iconBorder} name="envelope" size={20} color="#fff" />
        </View>
        <View style={[styles.itemBorder, { backgroundColor: '#56a5e2' }]}>
          <Icon styles={styles.iconBorder} name="twitter" size={20} color="#fff" />
        </View>
        <View style={[styles.itemBorder, { backgroundColor: '#355295' }]}>
          <Icon styles={styles.iconBorder} name="instagram" size={20} color="#fff" />
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
    marginBottom: 20,
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
    width: 150,
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
