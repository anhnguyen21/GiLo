import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const order = () => {
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <View style={styles.backLogin}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Sản phẩm của bạn</Text>
          </View>
          <View style={styles.layoutTitle}>
            <View style={styles.itemTitle}>
              <Text style={styles.txtName}>Tất cả</Text>
              <Text style={styles.txtNumber}>(58)</Text>
            </View>
            <View style={styles.itemTitle}>
              <Text style={styles.txtName}>Đang chờ</Text>
              <Text style={styles.txtNumber}>(58)</Text>
            </View>
            <View
              style={[
                styles.itemTitle,
                { borderBottomWidth: 1, paddingBottom: 5, borderColor: '#1ac91a' },
              ]}
            >
              <Text style={[styles.txtName, { color: '#1ac91a' }]}>Hoàn thành</Text>
              <Text style={[styles.txtNumber, { color: '#1ac91a' }]}>(58)</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.layoutItem]}>
        <View style={styles.topItem}>
          <Text style={styles.txtNameProduct}>Mã sản phẩm: 2435556787</Text>
          <Text style={styles.day}> 25 NOV</Text>
        </View>
        <View style={styles.itemCenter}>
          <Text>Status:</Text>
          <View style={styles.rowStatus}>
            <View style={[styles.itemStatus, { borderBottomColor: 'red' }]} />
            <View style={styles.itemStatus} />
            <View style={styles.itemStatus} />
            <View style={styles.itemStatus} />
          </View>
          <View style={styles.rowDot}>
            <Icon style={[styles.iconDot, { color: 'red' }]} name="dot-circle" />
            <Icon style={[styles.iconDot, { color: 'red' }]} name="dot-circle" />
            <Icon style={styles.iconDot} name="dot-circle" />
            <Icon style={styles.iconDot} name="dot-circle" />
            <Icon style={styles.iconDot} name="dot-circle" />
          </View>
        </View>
        <View style={styles.itemBottom}>
          <Text style={styles.txtProcess}>Process</Text>
        </View>
      
      </View>
       <View style={[styles.layoutItem]}>
        <View style={styles.topItem}>
          <Text style={styles.txtNameProduct}>Mã sản phẩm: 2435556787</Text>
          <Text style={styles.day}> 25 NOV</Text>
        </View>
        <View style={styles.itemCenter}>
          <Text>Status:</Text>
          <View style={styles.rowStatus}>
            <View style={[styles.itemStatus, { borderBottomColor: 'red' }]} />
            <View style={styles.itemStatus} />
            <View style={styles.itemStatus} />
            <View style={styles.itemStatus} />
          </View>
          <View style={styles.rowDot}>
            <Icon style={[styles.iconDot, { color: 'red' }]} name="dot-circle" />
            <Icon style={[styles.iconDot, { color: 'red' }]} name="dot-circle" />
            <Icon style={styles.iconDot} name="dot-circle" />
            <Icon style={styles.iconDot} name="dot-circle" />
            <Icon style={styles.iconDot} name="dot-circle" />
          </View>
        </View>
        <View style={styles.itemBottom}>
          <Text style={styles.txtProcess}>Process</Text>
        </View>
      </View>
    </View>
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
    fontSize: 16,
    color: '#555',
  },
  txtNumber: {
    color: '#e7eaeb',
  },
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
  txtProcess: {
    color: 'red',
    opacity: 0.5,
    marginLeft: 90,
  },
});
