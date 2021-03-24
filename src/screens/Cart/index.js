import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import hoacuc from '../../assests/img/hoacuc.png';
import { Navigation } from 'react-native-navigation';
import ItemCart from '../../components/ItemCart';
import { useDispatch, useSelector } from 'react-redux';
import { pushScreen } from '../../navigation/pushScreen';
import CartAction from '../../redux/CartRedux/action';

const index = (props) => {
  useEffect(() => {
    totalPr();
  }, [totalPrice]);
  const [promote, setPromote] = useState(false);
  const [totalPromote, setTotalPromote] = useState(false);
  const [txtpromote, setTxtPromote] = useState('');
  const dataCart = useSelector((state) => state.cart.responseCart);
  const dataPromotion = useSelector((state) => state.promotion.responsePromotion);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const backHome = () => {
    Navigation.pop(props.componentId);
  };
  const onCheckData = () => {
    dataPromotion.map((item, index) => {
      if (item.content == txtpromote) {
        console.log(item.content);
        setPromote(true);
        setTotalPromote((totalPrice * item.promotion) / 100);
      } else {
        setPromote(false);
      }
    });
  };
  const onCheckOrder = () => {
    pushScreen(props.componentId, 'CheckOut', '', '', false, 'chevron-left', false);
  };
  const totalPr = () => {
    var total = 0;
    dataCart.map((item, index) => {
      total = total + item.price * item.quantityCart;
    });
    setTotalPrice(total);
    console.log(total);
    return total;
  };
  const onAddProduct = (id) => {
    console.log(id);
    const dataLogin = {
      id_user: 5,
      id_pro: 2,
    };
    dispatch(CartAction.getAddCart(dataLogin));
    totalPr();
  };
  const onDeleteProduct = (id) => {
    const dataLogin = {
      id_user: 5,
      id_pro: 2,
    };
    dispatch(CartAction.getDeleteCart(dataLogin));
    totalPr();
  };
  return (
    <ScrollView style={styles.conatiner}>
      <TouchableOpacity style={styles.layoutTopBack} onPress={() => backHome()}>
        <Icon style={styles.iconBack} name="chevron-left" size={18} />
        <Text style={styles.txtTitle}>Giỏ hàng</Text>
      </TouchableOpacity>
      {dataCart.map((item, index) => {
        return (
          <ItemCart
            key={index}
            name={item.name}
            price={item.price}
            quantity={item.quantityCart}
            img={item.img}
            data={item}
            onAddProduct={onAddProduct}
            onDeleteProduct={onDeleteProduct}
          />
        );
      })}
      <View style={styles.layoutTotal}>
        <View style={styles.layoutDiscount}>
          <TextInput
            style={styles.ipDiscount}
            onChangeText={(text) => setTxtPromote(text)}
            placeholder="Nhập mã giảm giá"
          />
          <TouchableOpacity style={styles.btnDiscount} onPress={() => onCheckData()}>
            <Text style={styles.txtDiscount}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
        {promote && <Text style={styles.txtPromote}>Mã giảm giá không hợp lệ</Text>}
        <View style={styles.rowTotal}>
          <Text style={styles.txtPriceBasic}>Giá giảm phẩm:</Text>
          <Text style={styles.txtPriceTotal}>{totalPrice} Đ</Text>
        </View>
        {promote ? (
          <View style={styles.rowTotal}>
            <Text style={styles.txtPriceBasic}>Mã giảm giá</Text>
            <Text style={styles.txtPriceTotal}>{totalPromote} Đ</Text>
          </View>
        ) : (
          <View />
        )}
        <View style={styles.rowTotal}>
          <Text style={styles.txtPriceBasic}>Tổng tiền:</Text>
          <Text style={styles.txtPriceTotal}>{totalPrice - totalPromote} Đ</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnBuy} onPress={() => onCheckOrder()}>
        <Text style={styles.txtBuy}>Mua hàng</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  conatiner: {
    // margin: 20,
  },
  layoutTopBack: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtTitle: {
    marginLeft: 50,
    fontSize: 18,
    fontWeight: 'bold',
  },
  layoutTotal: {
    borderBottomWidth: 1.5,
    margin: 40,
    marginTop: 20,
    borderColor: '#ebebeb',
    paddingBottom: 10,
  },
  rowTotal: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtPriceBasic: {
    fontWeight: 'bold',
  },
  txtPriceTotal: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 13,
  },
  ipDiscount: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingLeft: 15,
    width: 220,
  },
  layoutDiscount: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  btnDiscount: {
    backgroundColor: '#ffc25d',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 90,
  },
  btnBuy: {
    marginLeft: 50,
    marginBottom: 20,
    width: 300,
    height: 50,
    backgroundColor: '#ffc25d',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtDiscount: {
    color: '#fff',
  },
  txtPromote: {
    color: 'red',
  },
});
