import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Navigation } from 'react-native-navigation';
import Promote from '../../assests/icon/Promote.png';
import Moment from 'moment';

const PromoCodeDetails = (props) => {
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
            <Text style={styles.txtBack}>Chi tiết mã giảm giá</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.layoutCenter}>
        <View style={styles.layoutItem}>
          <View style={styles.layoutLeftPromo}>
            <Text style={styles.txtPromote}>{props.data.promotion}%</Text>
            <Text style={styles.txtPromote}>Off</Text>
          </View>
          <View style={styles.layoutCenterPromo}>
            <View style={styles.rowSpace} />
            <View style={styles.rowSpace} />
            <View style={styles.rowSpace} />
            <View style={styles.rowSpace} />
            <View style={styles.rowSpace} />
            <View style={styles.rowSpace} />
            <View style={styles.rowSpace} />
            <View style={styles.rowSpace} />
            <View style={styles.rowSpace} />
            <View style={styles.rowSpace} />
            <View style={styles.rowSpace} />
          </View>
          <View style={styles.layoutRightPromo}>
            <Text style={styles.txtContentPromote}>{props.data.content}</Text>
            <View style={styles.layoutRight}>
              <Text style={styles.txtCollect}>Nhận</Text>
              <Text style={styles.txtExp}>Exp: {Moment(props.data.exp).format('d MMM YYYY')}</Text>
            </View>
            <Image style={styles.image} source={Promote} />
          </View>
        </View>
        <View style={styles.layoutItemDetail}>
          <Text style={styles.txtTitleDetail}>{props.data.promotion}% chỉ dành cho bạn</Text>
          <Text>Hãy sưu tập và sử dụng ngay</Text>
          <View style={styles.layoutTxt}>
            <View style={styles.layoutItemDetailTxt}>
              <Icon name="circle" color="#E83D43" />
              <Text style={styles.txtOptionTxt}>Chỉ dàng riêng khi mua các loại hoa</Text>
            </View>
            <View style={styles.layoutItemDetailTxt}>
              <Icon name="circle" color="#E83D43" />
              <Text style={styles.txtOptionTxt}>Chỉ dàng riêng khi mua các loại hoa</Text>
            </View>
            <View style={styles.layoutItemDetailTxt}>
              <Icon name="circle" color="#E83D43" />
              <Text style={styles.txtOptionTxt}>Chỉ dàng riêng khi mua các loại hoa</Text>
            </View>
          </View>
          <View style={styles.layoutExpBt}>
            <Text style={styles.txtExpBt}>Exp: {Moment(props.data.exp).format('d MMM YYYY')}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PromoCodeDetails;

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
  layoutCenter: {
    padding: 30,
  },
  layoutItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  layoutLeftPromo: {
    width: 120,
    height: 120,
    backgroundColor: '#972F33',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  txtPromote: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  layoutCenterPromo: {
    flexDirection: 'column',
  },
  rowSpace: {
    width: 2,
    height: 3,
    marginTop: 7,
    backgroundColor: '#972F33',
  },
  layoutRightPromo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    width: 210,
    height: 120,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#E83D43',
  },
  txtContentPromote: {
    color: '#fff',
    fontWeight: 'bold',
  },
  txtCollect: {
    marginLeft: 60,
    padding: 5,
    borderRadius: 4,
    color: 'red',
    fontWeight: 'bold',
    backgroundColor: '#fff',
  },
  txtExp: {
    marginTop: 50,
    color: '#fff',
  },
  image: {
    marginLeft: 20,
    width: 150,
    height: 100,
    position: 'absolute',
    elevation: 10,
    opacity: 0.3,
  },
  layoutItemDetail: {
    backgroundColor: '#fff',
    padding: 15,
  },
  txtTitleDetail: {
    fontSize: 24,
    color: '#E83D43',
    fontWeight: 'bold',
  },
  layoutTxt: {
    marginTop: 20,
  },
  layoutItemDetailTxt: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  txtOptionTxt: {
    marginLeft: 10,
  },
  layoutExpBt: {
    backgroundColor: '#E83D43',
    padding: 5,
    borderRadius: 5,
    width: 150,
    alignItems: 'center',
  },
  txtExpBt: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
