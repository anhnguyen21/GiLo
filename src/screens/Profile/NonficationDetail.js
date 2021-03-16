import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ItemNonfication from '../../components/ItemNonfication';
import { useDispatch, useSelector } from 'react-redux';

const Nonfication = () => {
  const dataNotification = useSelector((state) => state.nofication.responseNofication);
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <View style={styles.backLogin}>
            <Text style={styles.txtBack}>Thông báo</Text>
          </View>
        </View>
      </View>
      <View style={styles.layoutContent}>
        {dataNotification.map((item, index) => {
          return (
            <ItemNonfication key={index} content={item.content} type={item.type} time={item.time} />
          );
        })}
      </View>
    </View>
  );
};

export default Nonfication;

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
    justifyContent: 'center',
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
    height: 750,
    borderTopColor: '#e7eaeb',
    borderTopWidth: 1,
  },
});
