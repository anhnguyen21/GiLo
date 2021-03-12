import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Moment from 'moment';

const ItemNonfication = (props) => {
  return (
    <View>
      <View>
        {(() => {
          if (props.type === 1) {
            return (
              <View style={styles.layoutItem}>
                <View style={styles.boderIcon}>
                  <Icon style={styles.iconItem} name="percent" size={18} />
                </View>
                <View style={styles.layoutDetail}>
                  <Text style={styles.txtTitle}>Quà tặng</Text>
                  <Text style={styles.txtDetailsl}>{props.content}</Text>
                  <Text style={styles.txtTime}>{Moment(props.time).format('d MMM YYYY')}</Text>
                </View>
              </View>
            );
          } else if (props.type === 2) {
            return (
              <View style={styles.layoutItem}>
                <View style={styles.boderIcon}>
                  <Icon style={styles.iconItem} name="tasks" size={18} />
                </View>
                <View style={styles.layoutDetail}>
                  <Text style={styles.txtTitle}>Trạng Thái đơn hàng</Text>
                  <Text style={styles.txtDetailsl}>{props.content}</Text>
                  <Text style={styles.txtTime}>{Moment(props.time).format('d MMM YYYY')}</Text>
                </View>
              </View>
            );
          } else {
            return (
              <View style={styles.layoutItem}>
                <View style={styles.boderIcon}>
                  <Icon style={styles.iconItem} name="gift" size={18} />
                </View>
                <View style={styles.layoutDetail}>
                  <Text style={styles.txtTitle}>GiLo</Text>
                  <Text style={styles.txtDetailsl}>{props.content}</Text>
                  <Text style={styles.txtTime}>{Moment(props.time).format('d MMM YYYY')}</Text>
                </View>
              </View>
            );
          }
        })()}
      </View>
    </View>
  );
};

export default ItemNonfication;

const styles = StyleSheet.create({
  layoutItem: {
    margin: 20,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boderIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f070a9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconItem: {
    color: '#fff',
  },
  layoutDetail: {
    borderBottomColor: '#e7eaeb',
    borderBottomWidth: 1,
    marginLeft: 20,
    width: 280,
    paddingBottom: 10,
  },
  txtTitle: {
    fontWeight: 'bold',
  },
  txtDetailsl: {
    color: '#e7eaeb',
  },
  txtTime: {
    color: '#e7eaeb',
  },
});
