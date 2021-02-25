import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MailBox from '../../assests/icon/mailbox.png';
const { width, height } = Dimensions.get('window');

const digitCode = () => {
  return (
    <View style={styles.container}>
      <View style={styles.layoutContent}>
        <Text style={styles.txtTitle}>Nhập mã code của bạn</Text>
        <View style={styles.layoutImg}>
          <Image style={styles.imgContent} source={MailBox} />
        </View>
        <View style={styles.layoutCode}>
          <TextInput style={styles.ipCode} placeholder="_" />
          <TextInput style={styles.ipCode} placeholder="_" />
          <TextInput style={styles.ipCode} placeholder="_" />
          <TextInput style={styles.ipCode} placeholder="_" />
        </View>
        <View style={styles.layoutForget}>
          <Text style={styles.txtForget}>Bạn chưa nhận được mã? </Text>
          <TouchableOpacity>
            <Text style={styles.txtBtnTake}>Lấy mã</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.layoutBtn}>
          <Text style={styles.txtCheck}>Kiểm tra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default digitCode;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    width: width,
    height: height + 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  layoutContent: {
    backgroundColor: '#fff',
    width: width - 80,
    height: height - 250,
    borderRadius: 20,
    marginLeft: 10,
  },
  txtTitle: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 40,
  },
  layoutImg: {
    backgroundColor: '#f7f7f7',
    marginTop: 30,
    marginLeft: 60,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContent: {
    width: 100,
    height: 100,
    padding: 40,
    margin: 30,
  },
  layoutCode: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ipCode: {
    borderWidth: 1,
    borderColor: '#f070a9',
    width: 45,
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginLeft: 5,
    textAlign: 'center',
  },
  layoutForget: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtForget: {
    color: '#555',
  },
  txtBtnTake: {
    color: '#f070a9',
  },
  layoutBtn: {
    marginTop: 30,
    marginLeft: 60,
    width: 200,
    height: 50,
    backgroundColor: '#f070a9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  txtCheck: {
    color: '#fff',
  },
});
