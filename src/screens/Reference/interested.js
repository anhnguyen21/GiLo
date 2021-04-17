import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { pushScreen } from '../../navigation/pushScreen';
import { Navigation } from 'react-native-navigation';

const interested = (props) => {
  const backProfile = () => {
    Navigation.pop(props.componentId);
  };
  const onToInterested = () => {
    pushScreen(props.componentId, 'Color', '', '', false, 'chevron-left', false);
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
        <View style={[styles.layoutItem, { borderTopColor: '#e7eaeb', borderTopWidth: 1 }]}>
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>Đi phượt</Text>
        </View>
        <TouchableOpacity style={styles.layoutItem} onPress={() => onToInterested()}>
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>Chạy bộ</Text>
        </TouchableOpacity>
        <View style={styles.layoutItem}>
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>Xem phim</Text>
        </View>
        <View style={styles.layoutItem}>
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>Đọc truyện</Text>
        </View>
      </View>
    </View>
  );
};

export default interested;

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
