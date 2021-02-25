import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import shop from '../assests/icon/shop.png';
const { width, height } = Dimensions.get('window');

const ItemIntro = (props) => {
  return (
    <View>
      <View style={styles.layoutImg}>
        <Image style={styles.iconIntro} source={props.image} />
      </View>
      <View style={styles.layoutTitle}>
        <Text style={styles.txtTitle}>{props.title}</Text>
      </View>
      <View style={styles.layoutDescription}>
        <Text style={styles.txtDescription}>- Cửa hàng hoa, bánh sinh nhât,..</Text>
        <Text style={styles.txtDescription}>- Cửa hàng gần với vị trí của bạn</Text>
        <Text style={styles.txtDescription}>- Bạn có thể gửi lời yêu thương</Text>
      </View>
    </View>
  );
};

export default ItemIntro;

const styles = StyleSheet.create({
  layoutImg: {
    width: width,
  },
  iconIntro: {
    width: 400,
    height: 400,
    marginTop: 20,
    marginLeft: (width - 400) / 2,
  },
  layoutTitle: {
    marginTop: 10,
  },
  txtTitle: {
    color: '#835778',
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
  },
  layoutDescription: {
    marginTop: 20,
    marginLeft: 70,
    marginRight: 70,
  },
  txtDescription: {
    color: '#555',
    fontSize: 16,
    fontFamily: 'sans-serif',
  },
});
