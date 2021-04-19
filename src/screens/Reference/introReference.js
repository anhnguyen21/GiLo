import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { pushScreen } from '../../navigation/pushScreen';
import { Navigation } from 'react-native-navigation';
import gift from '../../assests/img/gift.png';
const choose = (props) => {
  const onToAge = () => {
    pushScreen(props.componentId, 'gender', '', '', false, 'chevron-left', false);
  };
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <Text style={styles.txtBack}>Bạn có thể chọn quà cùng GiLo</Text>
        </View>
      </View>
      <View style={styles.layoutContent}>
        <View style={styles.layoutTop}>
          <Text style={styles.txtDescription}>
            GiLo bao gồm nhiều loại sản phẩm tốt và chất lượng cùng với những lời nhắn gửi có ý
            nghĩa
          </Text>
        </View>
        <Image style={styles.imgGift} source={gift} />
        <Text style={styles.txtIntro}>
          Vui lòng cung cấp cho chúng tôi những thông tin phù hợp với người nhận.
        </Text>
        <Text style={styles.txtIntro}>
          Chúng tôi hứa sẽ mang đến cho người thân của bạn những món quà ý nghĩa.
        </Text>
        <View style={styles.layoutBtnContinue}>
          <TouchableOpacity style={styles.btnContinue} onPress={() => onToAge()}>
            <Text style={styles.txtContinue}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default choose;

const styles = StyleSheet.create({
  layoutTop: {
    backgroundColor: '#fff',
    height: 60,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#fff',
    paddingTop: 20,
    height: 750,
    borderTopColor: '#e7eaeb',
    borderTopWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
  },
  layoutItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomColor: '#e7eaeb',
    borderBottomWidth: 1,
  },
  txtCategory: {
    marginLeft: 20,
  },
  txtIntro: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  layoutBtnContinue: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContinue: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f070a9',
    borderRadius: 20,
    width: 200,
    height: 40,
  },
  txtContinue: {
    fontSize: 16,
    color: '#fff',
  },
});
