import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Navigation } from 'react-native-navigation';
import ItemOrder from '../../components/ItemOrder';
import Moment from 'moment';

const OrderDetail = (props) => {
  const backProfile = () => {
    Navigation.pop(props.componentId);
  };
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backLogin} onPress={() => backProfile()}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Chi tiết đơn hàng</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.layoutRow}>
          <View style={styles.layoutRowTop}>
            <View style={styles.iconGifts}>
              <Icon name="gifts" size={30} color="#fdc058" />
            </View>

            <View style={styles.topRight}>
              <Text style={styles.txtTitle}>Mã đơn hàng: {props.data.id_order}</Text>
              <View style={styles.layoutRowItemDayPrice}>
                <Text style={styles.txtDay}>Ngày:</Text>
                <Text>{Moment(props.data.time).format('d MMM YYYY')}</Text>
              </View>
              <View style={styles.layoutRowPrice}>
                <Text style={styles.txtItem}>Hàng: {props.data.quantity}</Text>
                <Text>Giá: 100 000 đ</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ItemOrder time={props.data.time} state={props.data.state} />
    </View>
  );
};

export default OrderDetail;

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
  layoutRow: {
    margin: 20,
    marginBottom: 0,
    backgroundColor: '#99cc00',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  layoutRowTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: 300,
  },
  iconGifts: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fef2da',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  txtTitle: {
    fontWeight: 'bold',
  },
  layoutRowItemDayPrice: {
    flexDirection: 'row',
  },
  txtDay: {
    marginRight: 20,
    fontWeight: 'bold',
  },
  layoutRowPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtItem: {
    marginRight: 10,
  },
});
