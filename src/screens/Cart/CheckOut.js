import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Navigation } from 'react-native-navigation';
import { pushScreen } from '../../navigation/pushScreen';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const CheckOut = (props) => {
  const backProfile = () => {
    Navigation.pop(props.componentId);
  };
  const idUser = useSelector((state) => state.user.token);
  const onAddAdress = () => {
    pushScreen(props.componentId, 'Map', ' ', ' ', false, 'chevron-left', false);
  };
  const onPayment = async () => {
    await axios
      .put(`https://damp-woodland-88343.herokuapp.com/api/order/${idUser}`)
      .then(function (response) {
        Navigation.pop(props.componentId);
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <ScrollView>
      <TouchableOpacity style={styles.container} onPress={() => backProfile()}>
        <View style={styles.backLogin}>
          <TouchableOpacity>
            <Icon name="chevron-left" size={18} />
          </TouchableOpacity>
          <Text style={styles.txtBack}>Kiểm tra thông tin</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.layoutContent}>
        <View style={styles.layoutAddress}>
          <View style={styles.layoutAddAddress}>
            <Text style={styles.txtDispalyAddress}>Chọn vị trí bạn muốn giao hàng</Text>
            <TouchableOpacity style={styles.btnAddAddress} onPress={() => onAddAdress()}>
              <Text style={styles.txtAddAddress}>Thêm mới</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[styles.layoutItemAddress, { backgroundColor: '#e7eaeb', borderColor: '#40aa54' }]}
        >
          <Icon style={styles.iconChooese} name="dot-circle" color="#40aa54" />
          <View style={styles.layoutDetailAddress}>
            <Text style={styles.txtTitleAddress}>Nhà của bạn</Text>
            <Text style={styles.txtPhone}>(+84) 329 488 708</Text>
            <Text style={styles.txtAddress}>Phuong Ngan, Trieu Long, Trieu Phong, Quang Tri</Text>
          </View>
        </View>
        <View style={styles.layoutItemAddress}>
          <View />
          <View style={styles.layoutDetailAddress}>
            <Text style={styles.txtTitleAddress}>Nhà của bạn</Text>
            <Text style={styles.txtPhone}>(+84) 329 488 708</Text>
            <Text style={styles.txtAddress}>Phuong Ngan, Trieu Long, Trieu Phong, Quang Tri</Text>
          </View>
        </View>
        <View style={styles.layoutPayment}>
          <View style={styles.layoutAddAddress}>
            <Text style={[styles.txtDispalyAddress, { marginLeft: 0 }]}>
              Chọn phương thức thanh toán
            </Text>
          </View>
          <View style={styles.layoutItemPay}>
            <View style={[styles.itemPay, { borderColor: '#40aa54' }]}>
              <Icon name="cc-mastercard" color="#40aa54" size={30} />
              <Text style={styles.txtItemPay}>Master Card</Text>
            </View>
            <View style={styles.itemPay}>
              <Icon name="cc-paypal" size={30} color="#555" />
              <Text style={styles.txtItemPay}>Paypal</Text>
            </View>
            <View style={styles.itemPay}>
              <Icon name="cc-visa" size={30} color="#555" />
              <Text style={styles.txtItemPay}>Visa</Text>
            </View>
          </View>
          <View style={styles.layoutContentPay}>
            <View style={styles.layoutRow}>
              <Text style={styles.txtTitle}>Tên thẻ:</Text>
              <TextInput style={styles.ipRow} placeholder="Nguyen The Anh" />
            </View>
            <View style={styles.layoutRow}>
              <Text style={styles.txtTitle}>Số thẻ:</Text>
              <TextInput style={styles.ipRow} placeholder="1234 5678 **** ****" />
            </View>
            <View style={styles.layoutRowPay}>
              <View style={[styles.layoutRow, { width: 150 }]}>
                <Text style={styles.txtTitle}>Ngày cấp:</Text>
                <TextInput style={styles.ipRow} placeholder="10/10/1999" />
              </View>
              <View style={[styles.layoutRow, { width: 150 }]}>
                <Text style={styles.txtTitle}>CVV:</Text>
                <TextInput style={styles.ipRow} placeholder="2345" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.confirmInform}>
          <Text style={styles.txtConfirm}>Xác nhận thông tin của bạn</Text>
          <Icon name="check-circle" size={18} color="#40aa54" />
        </View>
        <TouchableOpacity style={styles.btnPayNow} onPress={() => onPayment()}>
          <Text style={styles.txtPayNow}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  backLogin: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  txtBack: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  layoutContent: {
    borderTopColor: '#e7eaeb',
    borderTopWidth: 1,
  },
  layoutAddAddress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginBottom: 0,
    alignItems: 'center',
  },
  txtDispalyAddress: {
    fontSize: 14,
    color: '#555',
  },
  txtAddAddress: {
    fontWeight: 'bold',
    color: '#f070a9',
  },
  layoutItemAddress: {
    flexDirection: 'row',
    margin: 20,
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#e7eaeb',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
  },
  iconChooese: {
    marginTop: 5,
  },
  layoutDetailAddress: {
    marginLeft: 20,
  },
  txtTitleAddress: {
    fontWeight: 'bold',
  },
  txtPhone: {
    color: '#555',
  },
  txtAddress: {
    color: '#555',
  },
  layoutPayment: {
    marginTop: 10,
    marginLeft: 20,
  },
  layoutItemPay: {
    marginTop: 10,
    flexDirection: 'row',
  },
  itemPay: {
    borderColor: '#e7eaeb',
    borderWidth: 1,
    width: 140,
    marginLeft: 10,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  layoutContentPay: {
    borderRadius: 10,
    padding: 20,
  },
  layoutRow: {
    marginBottom: 20,
  },
  txtTitle: {
    fontWeight: 'bold',
    color: '#555',
  },
  ipRow: {
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: '#e7eaeb',
    paddingLeft: 15,
    borderRadius: 5,
  },
  layoutRowPay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmInform: {
    margin: 25,
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnPayNow: {
    margin: 20,
    marginLeft: 40,
    width: 300,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f070a9',
  },
  txtPayNow: {
    color: '#fff',
  },
});
