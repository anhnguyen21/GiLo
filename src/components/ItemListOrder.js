import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import hoacuc from '../assests/img/hoacuc.png';

const ItemListOrder = (props) => {
  return (
    <View style={styles.layoutOrder}>
      <View style={styles.layoutTopOrder}>
        <View style={styles.layoutTopLeftOrder}>
          <Icon style={styles.iconShop} name="store" />
          <Text style={styles.txtShop}>Hướng dương</Text>
        </View>
        <Text style={styles.txtOrder}>Xác nhận đơn hàng</Text>
      </View>
      <View style={styles.layoutCentreOrder}>
        <Image style={styles.imgItem} source={{ uri: props.img }} />
        <View style={styles.layoutRightCentreItem}>
          <View>
            <Text style={styles.txtName}>{props.name}</Text>
            <Text style={styles.txtDescription}>Hoa cúc dàng tặng bạn</Text>
          </View>
          <View style={styles.layoutPrice}>
            <Text style={styles.txtPrice}>{props.price} đ</Text>
            <Text style={styles.txtQuantity}>Qty: 2</Text>
          </View>
        </View>
      </View>
      <View style={styles.layoutBottomOrder}>
        <View style={styles.layoutBtnConfirm}>
          <TouchableOpacity style={styles.btnCancel}>
            <Text style={styles.txtCancel}>Đóng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnPay}>
            <Text style={styles.txtPay}>Mua</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.txtTotalPrice}>Tổng giá(1 sp): 1000000 đ</Text>
      </View>
    </View>
  );
};

export default ItemListOrder;

const styles = StyleSheet.create({
  layoutContentCenter: {
    padding: 20,
  },
  layoutOrder: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  layoutTopOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  layoutTopLeftOrder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtShop: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 14,
  },
  txtOrder: {
    color: 'red',
    fontSize: 12,
  },
  layoutCentreOrder: {
    marginTop: 10,
    flexDirection: 'row',
  },
  imgItem: {
    backgroundColor: '#5F9EA0',
    borderRadius: 10,
    width: 80,
    height: 80,
    marginRight: 30,
  },
  layoutRightCentreItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // width: 180,
    paddingTop: 5,
    paddingBottom: 10,
  },
  layoutPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  layoutBottomOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  txtTotalPrice: {
    fontSize: 12,
  },
  layoutBtnConfirm: {
    flexDirection: 'row',
  },
  btnCancel: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#f070a9',
    padding: 5,
  },
  txtCancel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  btnPay: {
    marginLeft: 10,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#f070a9',
  },
  txtPay: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  layoutEmtity: {
    marginTop: 40,
    alignItems: 'center',
  },
  iconEmtity: {
    fontSize: 24,
  },
  txtEmtity: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
