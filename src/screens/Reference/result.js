import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Navigation } from 'react-native-navigation';
const { width, height } = Dimensions.get('window');
import hoacuc from '../../assests/img/hoacuc.png';
import shop from '../../assests/img/slide1.jpg';
import ItemCard from '../../components/ItemCard';
import { pushScreen } from '../../navigation/pushScreen';
import { useSelector, useDispatch } from 'react-redux';
import ReviewActions from '../../redux/ReviewRedux/action';
import CartAction from '../../redux/CartRedux/action';
import ChatAction from '../../redux/ChatRedux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const index = (props) => {
  console.log(props.data.data);
  const prduct = props.data.data;
  const dispatch = useDispatch();
  const backHome = () => {
    Navigation.pop(props.componentId);
  };
  const onViewReview = (id) => {
    dispatch(ReviewActions.getReview(id, onSuccess));
  };
  const onSuccess = () => {
    pushScreen(props.componentId, 'Review', '', '', false, 'chevron-left', false);
  };
  const AddToCart = (id) => {
    console.log(props.data);
    const dataLogin = {
      id_user: 2,
      id_pro: id,
    };
    dispatch(CartAction.getAddCart(dataLogin));
  };
  const MessageToAdmin = (id) => {
    const dataChat = {
      id_user: props.data,
      id_admin: 9,
    };
    dispatch(ChatAction.getChat(dataChat, onSuccessChat));
    pushScreen(props.componentId, 'Chat', '', '', false, 'chevron-left', false);
  };
  const onSuccessChat = () => {
    // pushScreen(props.componentId, 'Chat', '', '', false, 'chevron-left', false);
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.layoutTop}>
        <View style={styles.topDetail}>
          <TouchableOpacity style={styles.layoutTopBack} onPress={() => backHome()}>
            <Icon style={styles.iconBack} name="chevron-left" size={18} />
            <Text style={styles.txtTitle}>Kết quả của bạn</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => MessageToAdmin(prduct.id)}>
            <Icon name="comment-dots" color="#f070a9" size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.layoutInformal}>
          <View style={styles.layoutText}>
            <View style={styles.columnText}>
              <Text style={styles.txtTitleText}>Loại</Text>
              <Text style={styles.txtDescription}>Hoa cúc vàng dành tặng người thân.</Text>
            </View>
            <View style={styles.columnText}>
              <Text style={styles.txtTitleText}>Dip tặng</Text>
              <Text style={styles.txtDescription}>Tặng vào các buổi khánh thành.</Text>
            </View>
            <View style={styles.columnText}>
              <Text style={styles.txtTitleText}>Cửa hàng</Text>
              <Text style={styles.txtDescription}>101b Lê Hữu Trác, Sơn Trà, Đà Nẵng.</Text>
            </View>
          </View>
          <Image
            style={styles.imgDetail}
            source={{
              uri: prduct.img,
            }}
          />
        </View>
      </View>
      <View style={styles.layotContain}>
        <View style={styles.priceDetail}>
          <Text style={styles.txtPrice}>{prduct.price} Đ</Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.txtRatingTitle}>Đánh giá:</Text>
          <View style={styles.layoutStar}>
            <Text style={styles.txtRating}>5 sao</Text>
            <Icon style={styles.iconRating} name="star" color="#FFD700" />
            <Icon style={styles.iconRating} name="star" color="#FFD700" />
            <Icon style={styles.iconRating} name="star" color="#FFD700" />
            <Icon style={styles.iconRating} name="star" color="#FFD700" />
            <Icon style={styles.iconRating} name="star" color="#FFD700" />
          </View>
          <TouchableOpacity style={styles.btnViewRating} onPress={() => onViewReview(prduct.id)}>
            <Text style={styles.txtViewRating}>xem chi tiết</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailProduct}>
          <Text style={styles.txtDetail}>Chi tiết sản phẩm</Text>
          <Text style={styles.txtDescriptionProduct}>
            Họ Cúc, còn gọi là họ Hướng dương, họ Cúc tây, là một họ thực vật có hoa hai lá mầm. Tên
            gọi khoa học của họ này có từ chi Aster và có từ nguyên từ gốc tiếng Hy Lạp mang nghĩa
            ngôi sao-hình dáng của bông hoa trong các loài của nó, được điển hình hóa thành tên gọi
            phổ biến chung là hoa cúc.
          </Text>
        </View>
        <TouchableOpacity style={styles.btnBuy} onPress={() => AddToCart(prduct.id)}>
          <Text style={styles.txtBuy}>Mua hàng</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    // margin: 20,
  },
  layoutTop: {
    width: width,
    height: width - 50,
    backgroundColor: '#f5f6f2',
  },
  topDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 40,
  },
  layoutTopBack: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtTitle: {
    marginLeft: 50,
    fontSize: 18,
    fontWeight: 'bold',
  },
  layoutInformal: {
    flexDirection: 'row',
  },
  layoutText: {
    width: 150,
    marginTop: 40,
    marginLeft: 30,
  },
  columnText: {
    marginBottom: 40,
  },
  txtTitleText: {
    fontWeight: 'bold',
  },
  txtDescription: {
    color: '#cfd1cd',
  },
  imgDetail: {
    position: 'absolute',
    marginLeft: 150,
    marginTop: 40,
    width: 350,
    height: 400,
    opacity: 0.8,
  },
  layotContain: {
    margin: 30,
  },
  priceDetail: {
    // margin: 20,
  },
  txtPrice: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  rating: {
    marginTop: 10,
  },
  txtRatingTitle: {
    fontWeight: 'bold',
  },
  layoutStar: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  txtRating: {
    marginRight: 20,
    marginBottom: 3,
  },
  txtViewRating: {
    color: '#555',
    fontSize: 12,
  },
  detailProduct: {
    marginTop: 20,
  },
  txtDetail: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtDescriptionProduct: {
    marginTop: 10,
  },
  relation: {
    marginTop: 20,
  },
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
    marginLeft: 5,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
  },
  containerRow: {
    margin: 10,
    marginTop: 10,
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
  layoutDiscount: {
    margin: 10,
    marginRight: 0,
    backgroundColor: '#e7eaeb',
    flexDirection: 'row',
    padding: 10,
    width: 350,
  },
  imgDiscount: {
    width: 150,
    height: 150,
  },
  btnBuy: {
    marginTop: 20,
    borderRadius: 10,
    width: width - 100,
    height: 50,
    backgroundColor: '#f070a9',
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBuy: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  layoutMes: {
    position: 'absolute',
    top: 500,
    left: 300,
    flex: 0.5,
    backgroundColor: '#f070a9',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
