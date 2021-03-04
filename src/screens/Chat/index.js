import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import hoacuc from '../../assests/img/hoacuc.png';

const index = () => {
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <View style={styles.backLogin}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Giỏ hàng chi tiết</Text>
          </View>
        </View>
      </View>
      <View style={styles.layoutContent}>
        <View style={styles.layoutDay}>
          <Text style={styles.txtTime}>Hôm nay, 10:20 AM</Text>
        </View>
        <View style={styles.layoutMesShop}>
          <View>
            <Image style={styles.iconAvatar} source={hoacuc} />
            <Icon style={styles.iconCircle} name="circle" color="#008000" />
          </View>
          <Text style={styles.txtMesShop}>
            Bạn muốn đạt món quà gì? Tôi có thể tư vấn cho bạn ngay?
          </Text>
        </View>
        <View style={styles.layoutMesUser}>
          <View style={styles.layoutRowUserTxt}>
            <Text style={styles.txtMesUser}>
              Bạn muốn đạt món quà gì? Tôi có thể tư vấn cho bạn ngay?
            </Text>
          </View>
          <View style={styles.layoutRowUserTxt}>
            <Image style={styles.imgSend} source={hoacuc} />
          </View>
        </View>
        <View style={styles.layoutMesShop}>
          <View>
            <Image style={styles.iconAvatar} source={hoacuc} />
            <Icon style={styles.iconCircle} name="circle" color="#008000" />
          </View>
          <Text style={styles.txtMesShop}>
            Bạn muốn đạt món quà gì? Tôi có thể tư vấn cho bạn ngay?
          </Text>
        </View>
      </View>
      <View style={styles.layoutInput}>
        <Icon style={styles.iconMic} name="microphone" size={20} color="#8ac02a" />
        <TextInput style={styles.ipEnter} placeholder="nhập nội dung ..." />
        <Icon style={styles.iconPlus} name="plus" size={20} />
      </View>
    </View>
  );
};

export default index;

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
  layoutContent: {
    padding: 30,
  },
  layoutDay: {
    alignItems: 'center',
  },
  txtTime: {
    padding: 10,
    backgroundColor: '#fff',
    width: 150,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
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
  layoutInput: {
    position: 'absolute',
    marginTop: 700,
    flexDirection: 'row',
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ipEnter: {
    width: 300,
    height: 60,
    paddingLeft: 50,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  iconMic: {
    position: 'absolute',
    marginTop: 700,
    marginLeft: 100,
    zIndex: 100,
    color: '#8ac02a',
  },
  iconPlus: {
    padding: 15,
    backgroundColor: '#8ac02a',
    borderRadius: 40,
  },
});
