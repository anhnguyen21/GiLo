import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import hoacuc from '../../assests/img/hoacuc.png';
import imgProfile from '../../assests/img/imgProfile.jpg';
import { pushScreen } from '../../navigation/pushScreen';
const { width: width } = Dimensions.get('window');

const index = (props) => {
  const onGoToUpdate = () => {
    pushScreen(props.componentId, 'UpdateProfile', '', '', false, 'chevron-left', false);
  };
  const onGoToNonfi = () => {
    pushScreen(props.componentId, 'Nonfication', '', '', false, 'chevron-left', false);
  };
  const onGoToPayment = () => {
    pushScreen(props.componentId, 'Payment', '', '', false, 'chevron-left', false);
  };
  const onAllOrder = () => {
    pushScreen(props.componentId, 'Order', '', '', false, 'chevron-left', false);
  };
  const onPromote = () => {
    pushScreen(props.componentId, 'PromoCode', '', '', false, 'chevron-left', false);
  };

  return (
    <View>
      <Image style={styles.imgProfile} source={imgProfile} />
      <View style={styles.container}>
        <View style={styles.backLogin}>
          <TouchableOpacity>
            <Icon name="chevron-left" size={18} />
          </TouchableOpacity>
          <Text style={styles.txtBack}>Thông tin cá nhân</Text>
        </View>
        <View style={styles.layoutProfile}>
          <Image style={styles.img} source={hoacuc} />
          <View style={styles.layoutName}>
            <Text style={styles.txtName}>Nguyen The Anh</Text>
            <Text style={styles.txtId}>ID: 10101999</Text>
          </View>
        </View>
        <View style={styles.layoutItem}>
          <TouchableOpacity style={styles.item} onPress={() => onAllOrder()}>
            <Icon style={styles.iconItem} name="gift" />
            <Text style={styles.txtItem}>Sản phẩm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => onPromote()}>
            <Icon style={styles.iconItem} name="credit-card" />
            <Text style={styles.txtItem}>Mã giảm giá</Text>
          </TouchableOpacity>
          <View style={styles.item}>
            <Icon style={styles.iconItem} name="map-marker" />
            <Text style={styles.txtItem}>Địa chỉ</Text>
          </View>
        </View>
      </View>
      <View style={[styles.layoutItemChooses]}>
        <TouchableOpacity style={styles.itemChooses} onPress={() => onGoToUpdate()}>
          <View style={styles.itemLeft}>
            <Icon style={styles.iconItemChooses} name="user" />
            <Text style={styles.txtItemChooses}>Thông tin cá nhân</Text>
          </View>
          <Icon name="chevron-left" size={16} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemChooses} onPress={() => onGoToNonfi()}>
          <View style={styles.itemLeft}>
            <Icon style={styles.iconItemChooses} name="bell" />
            <Text style={styles.txtItemChooses}>Thông báo</Text>
          </View>
          <Icon name="chevron-left" size={16} />
        </TouchableOpacity>
        <View style={styles.itemChooses}>
          <View style={styles.itemLeft}>
            <Icon style={styles.iconItemChooses} name="cog" />
            <Text style={styles.txtItemChooses}>Cài đặt</Text>
          </View>
          <Icon name="chevron-left" size={14} />
        </View>
        <TouchableOpacity style={styles.itemChooses} onPress={() => onGoToPayment()}>
          <View style={styles.itemLeft}>
            <Icon style={styles.iconItemChooses} name="credit-card" />
            <Text style={styles.txtItemChooses}>Thanh toán</Text>
          </View>
          <Icon name="chevron-left" size={14} />
        </TouchableOpacity>
        <View style={styles.itemChooses}>
          <View style={styles.itemLeft}>
            <Icon style={styles.iconItemChooses} name="power-off" />
            <Text style={styles.txtItemChooses}>Đăng xuất</Text>
          </View>
          <Icon name="chevron-left" size={14} />
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  imgProfile: {
    position: 'absolute',
    opacity: 0.5,
    width: width,
    height: 250,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
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
  layoutProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  layoutName: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  txtName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtId: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  layoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    position: 'absolute',
    marginTop: 180,
    marginLeft: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  layoutItemChooses: {
    marginTop: 320,
    width: 300,
    height: 350,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    position: 'absolute',
    marginLeft: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconItem: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemChooses: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#e7eaeb',
    justifyContent: 'space-between',
  },
  itemLeft: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconItemChooses: {
    fontSize: 18,
  },
  txtItemChooses: {
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
