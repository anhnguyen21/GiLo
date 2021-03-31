import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import hoacuc from '../assests/img/hoacuc.png';

const ItemCart = (props) => {
  return (
    <View>
      <View style={styles.layoutItemCart}>
        <View style={styles.itemRowCart}>
          <Image style={styles.imgCart} source={{ uri: props.img }} />
          <View style={styles.informCart}>
            <Text style={styles.txtName}>{props.name}</Text>
            <Text style={styles.txtType}>Sinh nhật</Text>
            <Text style={styles.txtPrice}>{props.price} Đ</Text>
          </View>
        </View>
        <View style={styles.layoutQuantity}>
          <TouchableOpacity
            style={styles.txtPlus}
            onPress={() => props.onAddProduct(props.data.id_product)}
          >
            <Text>+</Text>
          </TouchableOpacity>
          <Text style={styles.txtQuantity}>{props.quantity}</Text>
          <TouchableOpacity
            style={styles.txtminus}
            onPress={() => props.onDeleteProduct(props.data.id_product)}
          >
            <Text>-</Text>
          </TouchableOpacity>
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
    marginTop: 20,
    marginLeft: 5,
  },
  imgCart: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
    position: 'absolute',
    marginLeft: 270,
    marginTop: 20,
  },
  txtQuantity: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  btnDelete: {
    backgroundColor: '#f070a9',
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
