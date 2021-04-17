import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import gift from '../../assests/img/hoacuc.png';

const EmptyCart = () => {
  return (
    <View style={styles.layoutContent}>
      <View style={styles.layoutCenter}>
        <View style={styles.bgImg}>
          <Image style={styles.imgCart} source={gift} />
        </View>
        <Text style={styles.txtTitle}>Giỏ hàng của bạn rỗng</Text>
        <Text style={styles.txtDetais}>Giỏ hàng rỗng</Text>
        <TouchableOpacity style={styles.btnAddCart}>
          <Text style={styles.txtBtn}>Mua hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmptyCart;

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
    height: 750,
    borderTopColor: '#e7eaeb',
    borderTopWidth: 1,
  },
  layoutCenter: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    height: 650,
  },
  bgImg: {
    marginTop: 100,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#e7eaeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgCart: {
    width: 200,
    height: 200,
  },
  txtTitle: {
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 20,
  },
  txtDetais: {
    color: '#e7eaeb',
    marginTop: 10,
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
});
