import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const signup = (props) => {
  const backLogin = () => {
    Navigation.pop(props.componentId);
  };
  return (
    <View style={styles.container}>
      <View style={styles.backLogin}>
        <TouchableOpacity onPress={() => backLogin()}>
          <Icon name="chevron-left" size={18} />
        </TouchableOpacity>
        <Text style={styles.txtBack}>Đăng nhập</Text>
      </View>
      <View style={styles.rowIp}>
        <TextInput style={styles.input} placeholder="Tên tài khoản" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Mật khẩu" secureTextEntry={true} />
        <TextInput style={styles.input} placeholder="Nhập lại mật khẩu" secureTextEntry={true} />
        <TextInput style={styles.input} placeholder="Số điện thoại" />
        <TextInput style={styles.input} placeholder="Địa chỉ" />
        <TextInput style={styles.input} placeholder="Ngày sinh" />
        <Text style={styles.txtConfirm}>Xác nhận đăng nhập</Text>
        <TouchableOpacity style={styles.btnSignup}>
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
