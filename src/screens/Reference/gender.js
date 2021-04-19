import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { pushScreen } from '../../navigation/pushScreen';
import { Navigation } from 'react-native-navigation';

const gender = (props) => {
  const backProfile = () => {
    Navigation.pop(props.componentId);
  };
  const onToAge = (data) => {
    pushScreen(props.componentId, 'age', data, '', false, 'chevron-left', false);
  };
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backLogin} onPress={() => backProfile()}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Sở thích</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.layoutContent}>
        <TouchableOpacity
          style={[styles.layoutItem, { borderTopColor: '#e7eaeb', borderTopWidth: 1 }]}
          onPress={() => onToAge({ male: '1', female: '0' })}
        >
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>Nam</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.layoutItem}
          onPress={() => onToAge({ male: '0', female: '1' })}
        >
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>Nữ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default gender;

const styles = StyleSheet.create({
  layoutTop: {
    backgroundColor: '#fff',
    height: 60,
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
