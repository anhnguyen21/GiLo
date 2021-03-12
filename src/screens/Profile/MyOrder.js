import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Navigation } from 'react-native-navigation';
import { pushScreen } from '../../navigation/pushScreen';
import Moment from 'moment';

const MyOrder = (props) => {
  const backProfile = () => {
    Navigation.pop(props.componentId);
  };
  const onOrderDetails = () => {
    pushScreen(props.componentId, 'OrderDetail', props.data, '', false, 'chevron-left', false);
  };
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backLogin} onPress={() => backProfile()}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Giỏ hàng chi tiết</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.layoutRow} onPress={() => onOrderDetails()}>
        <View style={styles.layoutRowTop}>
          <View style={styles.iconGifts}>
            <Icon name="gifts" size={20} color="#fdc058" />
          </View>

          <View style={styles.topRight}>
            <Text style={styles.txtTitle}>Mã đơn hàng: {props.data.id_order}</Text>
            <View style={styles.layoutRowItemDayPrice}>
              <Text style={styles.txtDay}>Ngày:</Text>
              <Text>{Moment(props.data.time).format('d MMM YYYY')}</Text>
            </View>
            <View style={styles.layoutRowPrice}>
              <Text>Hàng: 15</Text>
              <Text>Giá: {props.data.quantity}</Text>
            </View>
          </View>
          <Icon name="chevron-circle-down" size={16} />
        </View>
        <View style={styles.layoutContent}>
          <View style={styles.layoutItem}>
            <View style={styles.layoutCirle}>
              <Icon name="circle" color="red" />
              <Text style={[styles.txtNameDelivery, { color: 'red', fontWeight: 'bold' }]}>
                Xác nhận đơn hàng
              </Text>
            </View>
            <Text style={[styles.txtDay, { color: 'red', fontWeight: 'bold' }]}>
              {Moment(props.data.time).format('d MMM YYYY')}
            </Text>
          </View>
          <View style={styles.layoutItem}>
            <View style={styles.layoutCirle}>
              <Icon name="circle" color="#fdc058" />
              <Text style={styles.txtNameDelivery}>Chuẩn bị đơn hàng</Text>
            </View>
            <Text style={styles.txtDay}>{Moment(props.data.time).format('d MMM YYYY')}</Text>
          </View>
          <View style={styles.layoutItem}>
            <View style={styles.layoutCirle}>
              <Icon name="circle" color="#fdc058" />
              <Text style={styles.txtNameDelivery}>Đã đến kho</Text>
            </View>
            <Text style={styles.txtDay}>{Moment(props.data.time).format('d MMM YYYY')}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.layoutRow}>
        <View style={styles.layoutRowTop}>
          <View style={styles.iconGifts}>
            <Icon name="gifts" size={20} color="#fdc058" />
          </View>

          <View style={styles.topRight}>
            <Text style={styles.txtTitle}>Mã đơn hàng: {props.data.id_order}</Text>
            <Text style={styles.txtDay}>Ngày: 10/3/2021</Text>
            <View style={styles.layoutRowPrice}>
              <Text>Hàng: 15</Text>
              <Text>Giá: 15000</Text>
            </View>
          </View>
          <Icon name="chevron-circle-down" size={16} />
        </View>
      </View>
      <View style={styles.layoutRow}>
        <View style={styles.layoutRowTop}>
          <View style={styles.iconGifts}>
            <Icon name="gifts" size={20} color="#fdc058" />
          </View>

          <View style={styles.topRight}>
            <Text style={styles.txtTitle}>Mã đơn hàng: #OD100</Text>
            <Text style={styles.txtDay}>Ngày: 10/3/2021</Text>
            <View style={styles.layoutRowPrice}>
              <Text>Hàng: 15</Text>
              <Text>Giá: 15000</Text>
            </View>
          </View>
          <Icon name="chevron-circle-down" size={16} />
        </View>
      </View>
      <View style={styles.layoutRow}>
        <View style={styles.layoutRowTop}>
          <View style={styles.iconGifts}>
            <Icon name="gifts" size={20} color="#fdc058" />
          </View>

          <View style={styles.topRight}>
            <Text style={styles.txtTitle}>Mã đơn hàng: #OD100</Text>
            <Text style={styles.txtDay}>Ngày: 10/3/2021</Text>
            <View style={styles.layoutRowPrice}>
              <Text>Hàng: 15</Text>
              <Text>Giá: 15000</Text>
            </View>
          </View>
          <Icon name="chevron-circle-down" size={16} />
        </View>
      </View>
    </View>
  );
};

export default MyOrder;

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
  layoutContent: {
    padding: 20,
  },
  layoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  txtNameDelivery: {
    marginLeft: 15,
  },
  layoutCirle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
