import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Navigation } from 'react-native-navigation';
import Promote from '../../assests/icon/Promote.png';
import { pushScreen } from '../../navigation/pushScreen';
import { useSelector } from 'react-redux';
import Moment from 'moment';
const { width: width } = Dimensions.get('window');

const PromoCode = (props) => {
  const dataPromotion = useSelector((state) => state.promotion.responsePromotion);
  const backProfile = () => {
    Navigation.pop(props.componentId);
  };
  const onPromoteDetails = (data) => {
    pushScreen(props.componentId, 'PromoCodeDetails', data, '', false, 'chevron-left', false);
  };
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backLogin} onPress={() => backProfile()}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Mã giảm giá</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.layoutCenter}>
        {dataPromotion.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.layoutItem}
              onPress={() => onPromoteDetails(item)}
            >
              <View style={styles.layoutLeftPromo}>
                <Text style={styles.txtPromote}>{item.promotion}%</Text>
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
                <Text style={styles.txtContentPromote}>{item.content}</Text>
                <View style={styles.layoutRight}>
                  <Text style={styles.txtCollect}>Nhận</Text>
                  <Text style={styles.txtExp}>Exp: {Moment(item.exp).format('d MMM YYYY')}</Text>
                </View>
                <Image style={styles.image} source={Promote} />
              </View>
            </TouchableOpacity>
          );
        })}
        <View style={styles.layoutItem}>
          <View style={[styles.layoutLeftPromo, { backgroundColor: '#1D7336' }]}>
            <Text style={styles.txtPromote}>30%</Text>
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
          <View style={[styles.layoutRightPromo, { backgroundColor: '#28B453' }]}>
            <Text style={styles.txtContentPromote}>CHAOBAN</Text>
            <View style={styles.layoutRight}>
              <Text style={styles.txtCollect}>Nhận</Text>
              <Text style={styles.txtExp}>Exp: 10/10/1999</Text>
            </View>
            <Image style={styles.image} source={Promote} />
          </View>
        </View>
        <View style={styles.layoutItem}>
          <View style={[styles.layoutLeftPromo, { backgroundColor: '#2F4898' }]}>
            <Text style={styles.txtPromote}>30%</Text>
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
          <View style={[styles.layoutRightPromo, { backgroundColor: '#3E60E8' }]}>
            <Text style={styles.txtContentPromote}>CHAOBAN</Text>
            <View style={styles.layoutRight}>
              <Text style={styles.txtCollect}>Nhận</Text>
              <Text style={styles.txtExp}>Exp: 10/10/1999</Text>
            </View>
            <Image style={styles.image} source={Promote} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PromoCode;

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
    paddingTop: 30,
    paddingBottom: 30,
  },
  layoutItem: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: (width - 320) / 2,
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
    width: 200,
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
});
