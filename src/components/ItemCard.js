import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { pushScreen } from '../navigation/pushScreen';
import shop from '../assests/img/slide1.jpg';

const ItemCard = (props) => {
  const [sales, setSales] = React.useState('');
  return (
    <View>
      <View style={styles.layoutRow}>
        {(() => {
          if (props.discount != 0) {
            return (
              <View style={styles.sales}>
                <Text style={styles.txtSales}>Giảm {props.discount}%</Text>
              </View>
            );
          } else {
            return <View />;
          }
        })()}
        {(() => {
          if (props.heart != 0) {
            return (
              <View style={styles.topItemRow}>
                <Icon style={styles.iconHeart} name="heart" color="red" />
              </View>
            );
          } else {
            return (
              <View style={styles.topItemRow}>
                <Icon style={styles.iconHeart} name="heart" color="#808080" />
              </View>
            );
          }
        })()}
        <View style={styles.containerRow}>
          <Image style={styles.imgItemRow} source={{ uri: props.image }} />
          <Text style={styles.txtTitle}>{props.title}</Text>
          <Text style={styles.txtPrice}>{props.price} Đ</Text>
        </View>
        <TouchableOpacity style={styles.btnAdd} onPress={() => props.onGiftDetai(props.idProduct)}>
          <Icon style={styles.iconPlus} name="plus" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  layoutRow: {
    marginTop: 20,
    width: 130,
    height: 185,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    marginLeft: 10,
  },
  sales: {
    position: 'absolute',
    backgroundColor: 'yellow',
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  txtSales: {
    fontSize: 10,
    color: 'red',
  },
  iconHeart: {
    position: 'absolute',
    margin: 5,
    marginLeft: 110,
  },
  topIconItemRow: {
    marginLeft: 110,
    marginTop: 5,
  },
  layoutIcon: {
    width: 60,
    alignItems: 'center',
  },
  itemBorder: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  txtIcon: {
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    width: 380,
    height: 215,
  },
  txtRow: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  imgItemRow: {
    marginLeft: 10,
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
  },
  containerRow: {
    margin: 10,
    marginTop: 30,
  },
  txtTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  btnAdd: {
    // backgroundColor: '#f070a9',
    width: 35,
    height: 35,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopColor: '#f070a9',
    borderColor: '#f070a9',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 150,
    marginLeft: 95,
  },
  iconPlus: {
    fontSize: 18,
    color: '#f070a9',
  },
});
