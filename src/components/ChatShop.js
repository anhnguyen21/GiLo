import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import hoacuc from '../assests/img/hoacuc.png';

const ChatShop = (props) => {
  return (
    <View>
      <View style={styles.layoutMesShop}>
        <View>
          <Image style={styles.iconAvatar} source={hoacuc} />
          <Icon style={styles.iconCircle} name="circle" color="#008000" />
        </View>
        <Text style={styles.txtMesShop}>{props.content}</Text>
      </View>
    </View>
  );
};

export default ChatShop;

const styles = StyleSheet.create({
  layoutMesShop: {
    flexDirection: 'row',
    marginTop: 20,
    width: 220,
  },
  iconAvatar: {
    width: 25,
    height: 25,
    padding: 30,
    backgroundColor: '#e7eaeb',
    borderRadius: 100,
  },
  iconCircle: {
    position: 'absolute',
    top: 45,
    left: 45,
  },
  txtMesShop: {
    marginLeft: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
