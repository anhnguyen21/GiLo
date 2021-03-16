import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Moment from 'moment';

const ItemMyOrder = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onOrderDetails(props.data)}>
      <View style={styles.layoutRow}>
        <View style={styles.layoutRowTop}>
          <View style={styles.iconGifts}>
            <Icon name="gifts" size={20} color="#fdc058" />
          </View>

          <View style={styles.topRight}>
            <Text style={styles.txtTitle}>Mã đơn hàng: #{props.order}</Text>
            <Text style={styles.txtDay}>Ngày: {Moment(props.time).format('d MMM YYYY')}</Text>
            <View style={styles.layoutRowPrice}>
              <Text>Hàng: 15</Text>
              <Text>Giá: {props.price}</Text>
            </View>
          </View>
          <Icon name="chevron-circle-down" size={16} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemMyOrder;

const styles = StyleSheet.create({
  layoutRow: {
    margin: 20,
    marginBottom: 0,
    backgroundColor: '#fff',
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
    backgroundColor: '#ededed',
    padding: 20,
  },
  iconGifts: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fef2da',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  topRight: {
    width: 150,
  },
  txtTitle: {
    fontWeight: 'bold',
  },
  layoutRowItemDayPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtDay: {
    marginRight: 20,
    fontWeight: 'bold',
  },
  layoutRowPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
