import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import ItemProgress from '../../components/ItemProgress';
import { pushScreen } from '../../navigation/pushScreen';
import { Navigation } from 'react-native-navigation';
import hoacuc from '../../assests/img/hoacuc.png';
import listorder from '../../assests/img/listorder.png';
import ItemListOrder from '../../components/ItemListOrder';
import ProgressActions, { ProductType } from '../../redux/ProgressRedux/action';
import messaging from '@react-native-firebase/messaging';
const _ = require('lodash');

const order = (props) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      dispatch(ProgressActions.getProgresscation(7));
    });

    return unsubscribe;
  }, []);
  const dataProgress = useSelector((state) => state.progress.responseProgress);
  console.log('progress' + dataProgress);
  var data = [];
  if (dataProgress) {
    data = dataProgress;
  }
  const backProfile = () => {
    Navigation.pop(props.componentId);
  };
  const changePage = (page) => {
    setPage(page);
    console.log(page);
  };
  return (
    <ScrollView>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backLogin} onPress={() => backProfile()}>
            <Text style={styles.txtBack}>Sản phẩm của bạn</Text>
          </TouchableOpacity>
          <View style={styles.layoutTitle}>
            {page === 1 ? (
              <TouchableOpacity
                onPress={() => changePage(1)}
                style={[
                  styles.itemTitle,
                  { borderBottomWidth: 1, paddingBottom: 5, borderColor: '#1ac91a' },
                ]}
              >
                <Text style={[styles.txtName, { color: '#1ac91a' }]}>Tất cả</Text>
                <Text style={[styles.txtNumber, { color: '#1ac91a' }]}>(58)</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => changePage(1)} style={styles.itemTitle}>
                <Text style={styles.txtName}>Tất cả</Text>
                <Text style={styles.txtNumber}>(58)</Text>
              </TouchableOpacity>
            )}
            {page === 2 ? (
              <TouchableOpacity
                onPress={() => changePage(2)}
                style={[
                  styles.itemTitle,
                  { borderBottomWidth: 1, paddingBottom: 5, borderColor: '#1ac91a' },
                ]}
              >
                <Text style={[styles.txtName, { color: '#1ac91a' }]}>Đang chờ</Text>
                <Text style={[styles.txtNumber, { color: '#1ac91a' }]}>(58)</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => changePage(2)} style={styles.itemTitle}>
                <Text style={styles.txtName}>Đang chờ</Text>
                <Text style={styles.txtNumber}>(58)</Text>
              </TouchableOpacity>
            )}
            {page === 3 ? (
              <TouchableOpacity
                onPress={() => changePage(3)}
                style={[
                  styles.itemTitle,
                  { borderBottomWidth: 1, paddingBottom: 5, borderColor: '#1ac91a' },
                ]}
              >
                <Text style={[styles.txtName, { color: '#1ac91a' }]}>Hoàn thành</Text>
                <Text style={[styles.txtNumber, { color: '#1ac91a' }]}>(58)</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => changePage(3)} style={styles.itemTitle}>
                <Text style={styles.txtName}>Hoàn thành</Text>
                <Text style={styles.txtNumber}>(58)</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <View style={styles.layoutDataOrder}>
        {(() => {
          if (page === 1) {
            return (
              <View>
                {!_.isEmpty(data) ? (
                  dataProgress.map((item, index) => {
                    if (item.id_orderStatus === 1) {
                      return (
                        <ItemListOrder
                          key={index}
                          name={item.name}
                          img={item.img}
                          price={item.price}
                        />
                      );
                    }
                  })
                ) : (
                  <View style={styles.layoutEmtity}>
                    <Image style={styles.iconEmtity} source={listorder} />
                    <Text style={styles.txtEmtity}>Chưa có sản phẩm</Text>
                  </View>
                )}
              </View>
            );
          } else if (page === 2) {
            return (
              <View>
                {!_.isEmpty(data) ? (
                  dataProgress.map((item, index) => {
                    if (item.id_orderStatus === 2) {
                      return (
                        <ItemListOrder
                          key={index}
                          name={item.name}
                          img={item.img}
                          price={item.price}
                        />
                      );
                    }
                  })
                ) : (
                  <View style={styles.layoutEmtity}>
                    <Image style={styles.iconEmtity} source={listorder} />
                    <Text style={styles.txtEmtity}>Chưa có sản phẩm</Text>
                  </View>
                )}
              </View>
            );
          } else {
            return (
              <View style={styles.layoutEmtity}>
                <Image style={styles.iconEmtity} source={listorder} />
                <Text style={styles.txtEmtity}>Chưa có sản phẩm</Text>
              </View>
            );
          }
        })()}
      </View>
    </ScrollView>
  );
};

export default order;

const styles = StyleSheet.create({
  layoutTop: {
    backgroundColor: '#fff',
  },
  container: {
    margin: 20,
  },
  backLogin: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  txtBack: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  layoutTitle: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  itemTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtName: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#555',
  },
  txtNumber: {
    fontSize: 12,
    color: '#e7eaeb',
  },
  layoutContentCenter: {
    padding: 20,
  },
  layoutOrder: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  layoutTopOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  layoutTopLeftOrder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtShop: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 14,
  },
  txtOrder: {
    color: 'red',
    fontSize: 12,
  },
  layoutCentreOrder: {
    marginTop: 10,
    flexDirection: 'row',
  },
  imgItem: {
    backgroundColor: '#5F9EA0',
    borderRadius: 10,
    width: 80,
    height: 80,
    marginRight: 30,
  },
  layoutRightCentreItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // width: 180,
    paddingTop: 5,
    paddingBottom: 10,
  },
  layoutPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  layoutBottomOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  txtTotalPrice: {
    fontSize: 12,
  },
  layoutBtnConfirm: {
    flexDirection: 'row',
  },
  btnCancel: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#f070a9',
    padding: 5,
  },
  txtCancel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  btnPay: {
    marginLeft: 10,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#f070a9',
  },
  txtPay: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  layoutEmtity: {
    marginTop: 40,
    alignItems: 'center',
  },
  iconEmtity: {
    fontSize: 24,
  },
  txtEmtity: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
  },
  layoutDataOrder: {
    padding: 20,
  },
});
