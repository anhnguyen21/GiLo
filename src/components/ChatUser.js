import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import hoacuc from '../assests/img/hoacuc.png';

const ChatUser = (props) => {
  return (
    <View>
      <View style={styles.layoutMesUser}>
        <View style={styles.layoutRowUserTxt}>
          <Text style={styles.txtMesUser}>{props.content}</Text>
        </View>
        {/* <View style={styles.layoutRowUserTxt}>
          <Image style={styles.imgSend} source={hoacuc} />
        </View> */}
      </View>
    </View>
  );
};

export default ChatUser;

const styles = StyleSheet.create({
  layoutMesUser: {
    marginTop: 20,
    flexDirection: 'column',
  },
  layoutRowUserTxt: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  txtMesUser: {
    width: 220,
    marginLeft: 20,
    backgroundColor: '#FF8C00',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
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
  imgSend: {
    width: 220,
    height: 200,
  },
});
