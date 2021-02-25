import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import giftbox from '../assests/icon/giftbox.png';

const ItemCategories = (props) => {
  return (
    <View style={styles.layoutIcon}>
      <View style={[styles.itemBorder, { backgroundColor: '#e9e9e9' }]}>
        <Image styles={styles.iconBorder} source={props.icon} />
      </View>
      <Text style={styles.txtIcon}>{props.title}</Text>
    </View>
  );
};

export default ItemCategories;

const styles = StyleSheet.create({
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
});
