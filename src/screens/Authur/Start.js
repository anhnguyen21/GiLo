import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// const { width, height } = Dimensions.get('window');
import gift from '../../assests/img/gift.png';
import { loginScreen } from '../../navigation/pushScreen';

const Start = () => {
  const onNextLogin = () => {
    loginScreen();
  };
  return (
    <View style={styles.container}>
      <View style={styles.layoutTop}>
        <Text style={styles.txtGui}>Tặng quà cùng GiLo</Text>
        <Text style={styles.txtDescription}>
          Bao gồm nhiều loại sản phẩm cùng với những lời nhắn gửi cửa người tặng
        </Text>
      </View>
      <Image style={styles.imgGift} source={gift} />
      <TouchableOpacity style={styles.btnLogin} onPress={() => onNextLogin()}>
        <Text style={styles.txtLogin}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSignUp}>
        <Text style={styles.txtSignUp}>Đăng kí tài khoản.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    margin: 30,
    alignItems: 'center',
  },
  txtGui: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold',
  },
  txtDescription: {
    marginTop: 10,
  },
  imgGift: {
    marginTop: 60,
    width: 500,
  },
  btnLogin: {
    marginTop: 60,
    width: 250,
    height: 40,
    backgroundColor: '#f070a9',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtLogin: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '800',
  },
  txtSignUp: {
    marginTop: 20,
  },
});
