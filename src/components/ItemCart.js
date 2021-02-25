import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import hoacuc from '../assests/img/hoacuc.png';

const ItemCart = () => {
  return (
    <View>
      <View style={styles.layoutItemCart}>
        <View style={styles.itemRowCart}>
          <Image style={styles.imgCart} source={hoacuc} />
          <View style={styles.informCart}>
            <Text style={styles.txtName}>Hoa cúc</Text>
            <Text style={styles.txtType}>Sinh nhật</Text>
            <Text style={styles.txtPrice}>120000 Đ</Text>
          </View>
          <View style={styles.layoutQuantity}>
            <Text style={styles.txtPlus}>+</Text>
            <Text style={styles.txtQuantity}>1</Text>
            <Text style={styles.txtminus}>-</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btnDelete}>
          <Text style={styles.txtDelete}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemCart;

const styles = StyleSheet.create({
  layoutItemCart: {
    marginTop: 20,
    marginLeft: 35,
    width: 320,
    height: 120,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemRowCart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgCart: {
    width: 120,
    height: 120,
  },
  informCart: {
    marginLeft: 20,
  },
  txtName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtType: {
    marginTop: 5,
    color: '#808080',
  },
  txtPrice: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  layoutQuantity: {
    marginLeft: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtQuantity: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  btnDelete: {
    backgroundColor: '#ffc25d',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginLeft: 300,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtDelete: {
    color: '#fff',
    fontWeight: 'bold',
  },
});