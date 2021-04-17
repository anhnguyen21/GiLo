import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { pushScreen } from '../../navigation/pushScreen';

const choose = (props) => {
  const onToInterested = () => {
    pushScreen(props.componentId, 'interested', '', '', false, 'chevron-left', false);
  };
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <View style={styles.backLogin}>
            <Text style={styles.txtBack}>Thực hiện các bước</Text>
          </View>
        </View>
      </View>
      <View style={styles.layoutContent}>
        <View style={[styles.layoutItem, { borderTopColor: '#e7eaeb', borderTopWidth: 1 }]}>
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>10 - 16 tuổi</Text>
        </View>
        <TouchableOpacity style={styles.layoutItem} onPress={() => onToInterested()}>
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>17 - 21 tuổi</Text>
        </TouchableOpacity>
        <View style={styles.layoutItem}>
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>22 - 30 tuổi</Text>
        </View>
        <View style={styles.layoutItem}>
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>31 - 50 tuổi</Text>
        </View>
        <View style={styles.layoutItem}>
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>51 - 65 tuổi</Text>
        </View>
        <View style={styles.layoutItem}>
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>trên 65 tuổi</Text>
        </View>
      </View>
    </View>
  );
};

export default choose;

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
    paddingTop: 20,
    height: 750,
    borderTopColor: '#e7eaeb',
    borderTopWidth: 1,
  },
  layoutItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomColor: '#e7eaeb',
    borderBottomWidth: 1,
  },
  txtCategory: {
    marginLeft: 20,
  },
});
