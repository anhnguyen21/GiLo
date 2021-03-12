import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { pushScreen } from '../navigation/pushScreen';
import Moment from 'moment';

const ItemProgress = (props) => {
  return (
    <View>
      {(() => {
        if (props.state === 1) {
          return (
            <TouchableOpacity
              style={[styles.layoutItem]}
              onPress={() => props.onDetailsOrder(props.data)}
            >
              <View style={styles.topItem}>
                <Text style={styles.txtNameProduct}>Mã sản phẩm: {props.order}</Text>
                <Text style={styles.day}>{Moment(props.time).format('d MMM YYYY')}</Text>
              </View>
              <View style={styles.itemCenter}>
                <Text>Status:</Text>
                <View style={styles.rowStatus}>
                  <View style={[styles.itemStatus]} />
                  <View style={styles.itemStatus} />
                  <View style={styles.itemStatus} />
                  <View style={styles.itemStatus} />
                </View>
                <View style={styles.rowDot}>
                  <Icon style={[styles.iconDot, { color: 'red' }]} name="dot-circle" />
                  <Icon style={[styles.iconDot]} name="dot-circle" />
                  <Icon style={styles.iconDot} name="dot-circle" />
                  <Icon style={styles.iconDot} name="dot-circle" />
                  <Icon style={styles.iconDot} name="dot-circle" />
                </View>
              </View>
              <View style={styles.itemBottom}>
                <Text style={styles.txtProcess}>{props.content}</Text>
              </View>
            </TouchableOpacity>
          );
        } else if (props.state === 2) {
          return (
            <View style={[styles.layoutItem]}>
              <View style={styles.topItem}>
                <Text style={styles.txtNameProduct}>Mã sản phẩm: {props.order}</Text>
                <Text style={styles.day}>{Moment(props.time).format('d MMM YYYY')}</Text>
              </View>
              <View style={styles.itemCenter}>
                <Text>Status:</Text>
                <View style={styles.rowStatus}>
                  <View style={[styles.itemStatus, { borderBottomColor: '#FF00FF' }]} />
                  <View style={styles.itemStatus} />
                  <View style={styles.itemStatus} />
                  <View style={styles.itemStatus} />
                </View>
                <View style={styles.rowDot}>
                  <Icon style={[styles.iconDot, { color: '#FF00FF' }]} name="dot-circle" />
                  <Icon style={[styles.iconDot, { color: '#FF00FF' }]} name="dot-circle" />
                  <Icon style={styles.iconDot} name="dot-circle" />
                  <Icon style={styles.iconDot} name="dot-circle" />
                  <Icon style={styles.iconDot} name="dot-circle" />
                </View>
              </View>
              <View style={styles.itemBottom}>
                <Text style={styles.txtProcess}>{props.content}</Text>
              </View>
            </View>
          );
        } else if (props.state === 3) {
          return (
            <View style={[styles.layoutItem]}>
              <View style={styles.topItem}>
                <Text style={styles.txtNameProduct}>Mã sản phẩm: {props.order}</Text>
                <Text style={styles.day}>{Moment(props.time).format('d MMM YYYY')}</Text>
              </View>
              <View style={styles.itemCenter}>
                <Text>Status:</Text>
                <View style={styles.rowStatus}>
                  <View style={[styles.itemStatus, { borderBottomColor: '#0040FF' }]} />
                  <View style={[styles.itemStatus, { borderBottomColor: '#0040FF' }]} />
                  <View style={styles.itemStatus} />
                  <View style={styles.itemStatus} />
                </View>
                <View style={styles.rowDot}>
                  <Icon style={[styles.iconDot, { color: '#0040FF' }]} name="dot-circle" />
                  <Icon style={[styles.iconDot, { color: '#0040FF' }]} name="dot-circle" />
                  <Icon style={[styles.iconDot, { color: '#0040FF' }]} name="dot-circle" />
                  <Icon style={styles.iconDot} name="dot-circle" />
                  <Icon style={styles.iconDot} name="dot-circle" />
                </View>
              </View>
              <View style={styles.itemBottom}>
                <Text style={styles.txtProcess}>{props.content}</Text>
              </View>
            </View>
          );
        } else if (props.state === 4) {
          return (
            <View style={[styles.layoutItem]}>
              <View style={styles.topItem}>
                <Text style={styles.txtNameProduct}>Mã sản phẩm: {props.order}</Text>
                <Text style={styles.day}>{Moment(props.time).format('d MMM YYYY')}</Text>
              </View>
              <View style={styles.itemCenter}>
                <Text>Status:</Text>
                <View style={styles.rowStatus}>
                  <View style={[styles.itemStatus, { borderBottomColor: '#DF7401' }]} />
                  <View style={[styles.itemStatus, { borderBottomColor: '#DF7401' }]} />
                  <View style={[styles.itemStatus, { borderBottomColor: '#DF7401' }]} />
                  <View style={styles.itemStatus} />
                </View>
                <View style={styles.rowDot}>
                  <Icon style={[styles.iconDot, { color: '#DF7401' }]} name="dot-circle" />
                  <Icon style={[styles.iconDot, { color: '#DF7401' }]} name="dot-circle" />
                  <Icon style={[styles.iconDot, { color: '#DF7401' }]} name="dot-circle" />
                  <Icon style={[styles.iconDot, { color: '#DF7401' }]} name="dot-circle" />
                  <Icon style={styles.iconDot} name="dot-circle" />
                </View>
              </View>
              <View style={styles.itemBottom}>
                <Text style={styles.txtProcess}>{props.content}</Text>
              </View>
            </View>
          );
        } else {
          return (
            <View style={[styles.layoutItem]}>
              <View style={styles.topItem}>
                <Text style={styles.txtNameProduct}>Mã sản phẩm: {props.order}</Text>
                <Text style={styles.day}>{Moment(props.time).format('d MMM YYYY')}</Text>
              </View>
              <View style={styles.itemCenter}>
                <Text>Status:</Text>
                <View style={styles.rowStatus}>
                  <View style={[styles.itemStatus, { borderBottomColor: '#31B404' }]} />
                  <View style={[styles.itemStatus, { borderBottomColor: '#31B404' }]} />
                  <View style={[styles.itemStatus, { borderBottomColor: '#31B404' }]} />
                  <View style={[styles.itemStatus, { borderBottomColor: '#31B404' }]} />
                </View>
                <View style={styles.rowDot}>
                  <Icon style={[styles.iconDot, { color: '#31B404' }]} name="dot-circle" />
                  <Icon style={[styles.iconDot, { color: '#31B404' }]} name="dot-circle" />
                  <Icon style={[styles.iconDot, { color: '#31B404' }]} name="dot-circle" />
                  <Icon style={[styles.iconDot, { color: '#31B404' }]} name="dot-circle" />
                  <Icon style={[styles.iconDot, { color: '#31B404' }]} name="dot-circle" />
                </View>
              </View>
              <View style={styles.itemBottom}>
                <Text style={styles.txtProcess}>{props.content}</Text>
              </View>
            </View>
          );
        }
      })()}
    </View>
  );
};

export default ItemProgress;

const styles = StyleSheet.create({
  layoutItem: {
    margin: 30,
    marginTop: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 100,
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
  },
  topItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtNameProduct: {
    color: '#e7eaeb',
    fontWeight: 'bold',
  },
  day: {
    color: '#e7eaeb',
  },
  itemCenter: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowStatus: {
    position: 'absolute',
    marginTop: 10,
    marginLeft: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowDot: {
    position: 'absolute',
    marginTop: 5,
    marginLeft: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 230,
  },
  itemStatus: {
    borderBottomWidth: 3,
    borderBottomColor: '#e7eaeb',
    width: 55,
  },
  iconDot: {
    color: '#e7eaeb',
  },
  itemBottom: {
    alignItems: 'center',
  },
  txtProcess: {
    color: '#000',
    opacity: 0.5,
    // marginLeft: 90,
  },
});
