import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Navigation } from 'react-native-navigation';

const address = (props) => {
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
            <Text style={styles.txtBack}>Địa chỉ</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.layoutRow}>
        <View style={styles.layoutRowTop}>
          <Text style={styles.txtDefault}>Default</Text>
          <View style={styles.iconGifts}>
            <Icon name="home" size={30} color="#fdc058" />
          </View>
          <View style={styles.topRight}>
            <Text style={styles.txtTitle}>Nhà</Text>
          </View>
        </View>
        <View style={styles.layoutContent}>
          <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
            <View style={[styles.iconGifts, { width: 30, height: 30 }]}>
              <Icon name="user" size={16} color="#fdc058" />
            </View>
            <Text style={styles.txtAddress}>Nguyên Thế Anh</Text>
          </View>
          <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
            <View style={[styles.iconGifts, { width: 30, height: 30 }]}>
              <Icon name="phone" size={16} color="#fdc058" />
            </View>
            <Text style={styles.txtAddress}>(+84) 329 488 798</Text>
          </View>
          <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
            <View style={[styles.iconGifts, { width: 30, height: 30 }]}>
              <Icon name="envelope" size={16} color="#fdc058" />
            </View>
            <Text style={styles.txtAddress}>anhanh5811@gmail.com</Text>
          </View>
          <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
            <View style={[styles.iconGifts, { width: 30, height: 30 }]}>
              <Icon name="map-marker" size={16} color="#fdc058" />
            </View>
            <Text style={styles.txtAddress}>Triệu Long, Triệu Long, Triệu Phong, Quảng Tri</Text>
          </View>
        </View>
      </View>
      <View style={styles.layoutRow}>
        <View style={styles.layoutRowTop}>
          <View style={styles.iconGifts}>
            <Icon name="building" size={30} color="#fdc058" />
          </View>
          <View style={styles.topRight}>
            <Text style={styles.txtTitle}>Cơ quan</Text>
          </View>
        </View>
        <View style={styles.layoutContent}>
          <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
            <View style={[styles.iconGifts, { width: 30, height: 30 }]}>
              <Icon name="user" size={16} color="#fdc058" />
            </View>
            <Text style={styles.txtAddress}>Nguyên Thế Anh</Text>
          </View>
          <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
            <View style={[styles.iconGifts, { width: 30, height: 30 }]}>
              <Icon name="phone" size={16} color="#fdc058" />
            </View>
            <Text style={styles.txtAddress}>(+84) 329 488 798</Text>
          </View>
          <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
            <View style={[styles.iconGifts, { width: 30, height: 30 }]}>
              <Icon name="envelope" size={16} color="#fdc058" />
            </View>
            <Text style={styles.txtAddress}>anhanh5811@gmail.com</Text>
          </View>
          <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
            <View style={[styles.iconGifts, { width: 30, height: 30 }]}>
              <Icon name="map-marker" size={16} color="#fdc058" />
            </View>
            <Text style={styles.txtAddress}>99 Tô Hiến Thành, Sơn Trà, Đà Nẵng</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default address;

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
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 0,
    alignItems: 'center',
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
  layoutContent: {
    padding: 20,
    paddingTop: 0,
  },
  layoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  txtAddress: {
    marginLeft: 20,
    marginRight: 20,
    fontWeight: 'bold',
  },
  txtDefault: {
    padding: 8,
    position: 'absolute',
    marginLeft: 295,
    backgroundColor: '#1ac91a',
    borderTopRightRadius: 10,
  },
});
