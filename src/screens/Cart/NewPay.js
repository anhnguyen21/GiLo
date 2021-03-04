import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import bankcard from '../../assests/img/bankcard.png';

const NewPay = () => {
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <View style={styles.backLogin}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Thêm tài khoản</Text>
          </View>
        </View>
      </View>
      <View style={styles.layoutContent}>
        <Image style={styles.imgBank} source={bankcard} />
        <View style={styles.layoutInform}>
          <View style={styles.layoutRow}>
            <Text style={styles.txtRow}>Tên tài khoản</Text>
            <TextInput style={styles.ipRow} placeholder="Nguyễn Thế Anh" />
          </View>
          <View style={styles.layoutRow}>
            <Text style={styles.txtRow}>Tên tài khoản</Text>
            <TextInput style={styles.ipRow} placeholder="Nguyễn Thế Anh" />
          </View>
          <View style={styles.rowlayout}>
            <View style={styles.layoutRow}>
              <Text style={styles.txtRow}>Tên tài khoản</Text>
              <TextInput style={[styles.ipRow, { width: 140 }]} placeholder="Nguyễn Thế Anh" />
            </View>
            <View style={styles.layoutRow}>
              <Text style={styles.txtRow}>Tên tài khoản</Text>
              <TextInput style={[styles.ipRow, { width: 140 }]} placeholder="Nguyễn Thế Anh" />
            </View>
          </View>
        </View>
        <View style={styles.layoutRowCheck}>
          <Text style={styles.txtCheck}>Tên tài khoản</Text>
          
        </View>
        <TouchableOpacity style={styles.btnAddCart}>
          <Text style={styles.txtBtn}>Thêm tài khoản</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewPay;

const styles = StyleSheet.create({
  layoutTop: {
    backgroundColor: '#fff',
    height: 65,
  },
  container: {
    margin: 20,
  },
  backLogin: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  txtBack: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  layoutContent: {
    backgroundColor: '#fff',
    padding: 30,
    marginLeft: 10,
    alignItems: 'center',
  },
  imgBank: {
    width: 320,
    height: 200,
  },
  layoutInform: {
    marginTop: 20,
  },
  layoutRow: {
    marginTop: 15,
  },
  rowlayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtRow: {
    color: '#e7eaeb',
    fontWeight: 'bold',
  },
  ipRow: {
    marginTop: 10,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: '#e7eaeb',
    borderRadius: 5,
    width: 300,
  },
  btnAddCart: {
    backgroundColor: '#f070a9',
    marginTop: 60,
    height: 50,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  txtBtn: {
    color: '#fff',
  },
  layoutRowCheck: {
    marginTop: 25,
  },
  txtCheck: {
    fontWeight: 'bold',
    color: '#000',
  },
});
