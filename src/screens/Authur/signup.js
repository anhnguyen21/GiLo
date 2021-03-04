/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Navigation } from 'react-native-navigation';
// import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
// import SignUpActions from '../../redux/AuthRedux/action';

const signup = (props) => {
  const [account, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [brithday, setBrithday] = useState('');
  // const dispatch = useDispatch();
  // const onSignUp = () => {
  //   const dataSignUp = {
  //     account: account,
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: email,
  //     password: password,
  //     address: address,
  //     phone: phone,
  //     gender: 1,
  //   };
  //   if (dataSignUp.account === '' || dataSignUp.password === '') {
  //     alert('Bạn phải nhập đầy đủ thông tin !');
  //   } else {
  //     dispatch(SignUpActions.userSignUp(dataSignUp, onSuccess));
  //   }
  // };
  // const onSuccess = () => {
  //   Navigation.pop(props.componentId);
  // };
  // const backLogin = () => {
  //   Navigation.pop(props.componentId);
  // };
  return (
    <View style={styles.container}>
      <View style={styles.backLogin}>
        <TouchableOpacity onPress={() => backLogin()}>
          <Icon name="chevron-left" size={18} />
        </TouchableOpacity>
        <Text style={styles.txtBack}>Đăng nhập</Text>
      </View>
      <View style={styles.rowIp}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUserName(text)}
          placeholder="Tên tài khoản"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFirstName(text)}
          placeholder="Tên"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setLastName(text)}
          placeholder="Họ"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          placeholder="Mật khẩu"
          secureTextEntry={true}
        />
        <TextInput style={styles.input} placeholder="Nhập lại mật khẩu" secureTextEntry={true} />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPhone(text)}
          placeholder="Số điện thoại"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setAddress(text)}
          placeholder="Địa chỉ"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setBrithday(text)}
          placeholder="Ngày sinh"
        />
        <Text style={styles.txtConfirm}>Xác nhận đăng nhập</Text>
        <TouchableOpacity style={styles.btnSignup} onPress={() => onSignUp()}>
          <Text style={styles.txtSignup}>Đăng kí</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default signup;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  backLogin: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  txtBack: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  rowIp: {
    alignItems: 'center',
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
  txtConfirm: {
    marginTop: 20,
    marginBottom: 20,
  },
  btnSignup: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
    borderRadius: 20,
    width: 200,
    height: 40,
  },
  txtSignup: {
    fontSize: 16,
  },
});
