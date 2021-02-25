import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ItemNonfication from '../../components/ItemNonfication';

const Nonfication = () => {
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <View style={styles.backLogin}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Thông báo</Text>
          </View>
        </View>
      </View>
      <View style={styles.layoutContent}>
        <ItemNonfication />
        <ItemNonfication />
        <ItemNonfication />
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
