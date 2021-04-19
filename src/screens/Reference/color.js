import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { pushScreen } from '../../navigation/pushScreen';
import { Navigation } from 'react-native-navigation';

const Color = (props) => {
  console.log(props.data);
  const backProfile = () => {
    Navigation.pop(props.componentId);
  };
  const onToColor = (data) => {
    var dataRecomment = props.data;
    Object.assign(dataRecomment, data);
    console.log(dataRecomment);
    pushScreen(props.componentId, 'interested', dataRecomment, '', false, 'chevron-left', false);
  };
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backLogin} onPress={() => backProfile()}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Màu yêu thích</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.layoutContent}>
        <TouchableOpacity
          style={[styles.layoutItem, { borderTopColor: '#e7eaeb', borderTopWidth: 1 }]}
          onPress={() => onToColor({ blue: '1', red: '0', yellow: '0', green: '0', while: '0' })}
        >
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>Xanh lá cây</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.layoutItem}
          onPress={() => onToColor({ blue: '0', red: '1', yellow: '0', green: '0', while: '0' })}
        >
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>Đỏ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.layoutItem}
          onPress={() => onToColor({ blue: '0', red: '0', yellow: '1', green: '0', while: '0' })}
        >
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>Vàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.layoutItem}
          onPress={() => onToColor({ blue: '0', red: '0', yellow: '0', green: '1', while: '0' })}
        >
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>Xanh dương</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.layoutItem}
          onPress={() => onToColor({ blue: '0', red: '0', yellow: '0', green: '0', while: '1' })}
        >
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>Trắng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Color;

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
