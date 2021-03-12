import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Moment from 'moment';

const ItemOrder = (props) => {
  return (
    <View>
      {(() => {
        if (props.state === 1) {
          return (
            <View style={styles.layoutContent}>
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="gift" size={20} color="#1ac91a" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={[styles.txtAddress, { color: '#1ac91a' }]}>Xác định đơn hàng</Text>
                  <Text>{Moment(props.time).format('d MMM YYYY')}</Text>
                </View>
              </View>
              <View style={styles.rowDownHide} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="clipboard-list" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={styles.txtAddress}>Chuẩn bị đơn hàng</Text>
                  <Text>{Moment(props.time).format('d MMM YYYY')}</Text>
                </View>
              </View>
              <View style={styles.rowDownHide} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="envelope" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={styles.txtAddress}>Đã đến kho</Text>
                  <Text>{Moment(props.time).format('d MMM YYYY')}</Text>
                </View>
              </View>
              <View style={styles.rowDownHide} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="map-marker" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={[styles.txtAddress]}>Đang giao đến bạn</Text>
                  <Text>{Moment(props.time).format('d MMM YYYY')}</Text>
                </View>
              </View>
              <View style={styles.rowDownHide} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="check" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={styles.txtAddress}>Giao hàng thành công</Text>
                  <Text>{Moment(props.time).format('d MMM YYYY')}</Text>
                </View>
              </View>
            </View>
          );
        } else if (props.state === 2) {
          return (
            <View style={styles.layoutContent}>
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="gift" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={styles.txtAddress}>Xác định đơn hàng</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
              <View style={styles.rowDown} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="clipboard-list" size={20} color="#1ac91a" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={[styles.txtAddress, { color: '#1ac91a' }]}>Chuẩn bị đơn hàng</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
              <View style={styles.rowDownHide} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="envelope" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={styles.txtAddress}>Đã đến kho</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
              <View style={styles.rowDownHide} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="map-marker" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={[styles.txtAddress]}>Đang giao đến bạn</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
              <View style={styles.rowDownHide} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="check" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={styles.txtAddress}>Giao hàng thành công</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
            </View>
          );
        } else if (props.state === 3) {
          return (
            <View style={styles.layoutContent}>
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="gift" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={styles.txtAddress}>Xác định đơn hàng</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
              <View style={styles.rowDown} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="clipboard-list" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={styles.txtAddress}>Chuẩn bị đơn hàng</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
              <View style={styles.rowDown} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="envelope" size={20} color="#1ac91a" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={[styles.txtAddress, { color: '#1ac91a' }]}>Đã đến kho</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
              <View style={styles.rowDownHide} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="map-marker" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={[styles.txtAddress]}>Đang giao đến bạn</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
              <View style={styles.rowDownHide} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="check" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={styles.txtAddress}>Giao hàng thành công</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
            </View>
          );
        } else if (props.state === 4) {
          return (
            <View style={styles.layoutContent}>
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="gift" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={styles.txtAddress}>Xác định đơn hàng</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
              <View style={styles.rowDown} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="clipboard-list" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={styles.txtAddress}>Chuẩn bị đơn hàng</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
              <View style={styles.rowDown} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="envelope" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={styles.txtAddress}>Đã đến kho</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
              <View style={styles.rowDown} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="map-marker" size={20} color="#1ac91a" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={[styles.txtAddress, { color: '#1ac91a' }]}>Đang giao đến bạn</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
              <View style={styles.rowDownHide} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="check" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={styles.txtAddress}>Giao hàng thành công</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
            </View>
          );
        } else {
          return (
            <View style={styles.layoutContent}>
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="gift" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={styles.txtAddress}>Xác định đơn hàng</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
              <View style={styles.rowDown} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="clipboard-list" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={styles.txtAddress}>Chuẩn bị đơn hàng</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
              <View style={styles.rowDown} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="envelope" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={styles.txtAddress}>Đã đến kho</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
              <View style={styles.rowDown} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="map-marker" size={20} color="#fdc058" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={[styles.txtAddress]}>Đang giao đến bạn</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
              <View style={styles.rowDown} />
              <View style={[styles.layoutItem, { justifyContent: 'flex-start' }]}>
                <View style={[styles.iconGifts]}>
                  <Icon name="check" size={20} color="#1ac91a" />
                </View>
                <View style={styles.layoutText}>
                  <Text style={[styles.txtAddress, { color: '#1ac91a' }]}>Giao hàng thành công</Text>
                  <Text>{props.time}</Text>
                </View>
              </View>
            </View>
          );
        }
      })()}
    </View>
  );
};

export default ItemOrder;

const styles = StyleSheet.create({
  iconGifts: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fef2da',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  layoutContent: {
    padding: 20,
    marginTop: 170,
    backgroundColor: '#fff',
    margin: 20,
  },
  layoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  rowDown: {
    borderLeftColor: 'red',
    borderLeftWidth: 3,
    marginLeft: 55,
    height: 30,
  },
  rowDownHide: {
    borderLeftColor: '#e0ebeb',
    borderLeftWidth: 2,
    marginLeft: 55,
    height: 30,
  },
  txtNameDelivery: {
    marginLeft: 15,
  },
  layoutCirle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  layoutText: {
    marginLeft: 50,
    marginRight: 20,
  },
  txtAddress: {
    fontWeight: 'bold',
    color: '#fdc058',
  },
  txtDefault: {
    padding: 8,
    position: 'absolute',
    marginLeft: 295,
    backgroundColor: '#1ac91a',
    borderTopRightRadius: 10,
  },
});
