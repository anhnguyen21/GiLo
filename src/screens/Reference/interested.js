import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { pushScreen } from '../../navigation/pushScreen';
import { Navigation } from 'react-native-navigation';
import axios from 'axios';

const interested = (props) => {
  var id_product;
  var product;
  const [product_id, setProduct_id] = useState('');
  console.log(props.data);
  const backProfile = () => {
    Navigation.pop(props.componentId);
  };
  const onToInterested = async (data) => {
    var dataRecomment = props.data;
    Object.assign(dataRecomment, data);
    console.log(dataRecomment);
    await axios
      .post('https://damp-woodland-88343.herokuapp.com/api/recomment', {
        arr_recomment: dataRecomment,
      })
      .then(function (response) {
        console.log('value of product need' + response.data);
        setProduct_id(response.data);
        id_product = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    await axios
      .get(`https://damp-woodland-88343.herokuapp.com/api/product/${id_product}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    pushScreen(props.componentId, 'Result', dataRecomment, '', false, 'chevron-left', false);
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
          onPress={() =>
            onToInterested({ football: '1', walk: '0', read_book: '0', watch_tv: '0', travel: '0' })
          }
        >
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>Đá bóng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.layoutItem}
          onPress={() =>
            onToInterested({ football: '0', walk: '1', read_book: '0', watch_tv: '0', travel: '0' })
          }
        >
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>Đi bộ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.layoutItem}
          onPress={() =>
            onToInterested({ football: '0', walk: '0', read_book: '1', watch_tv: '0', travel: '0' })
          }
        >
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>Đọc sách</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.layoutItem}
          onPress={() =>
            onToInterested({ football: '0', walk: '0', read_book: '0', watch_tv: '1', travel: '0' })
          }
        >
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>Xem TV</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.layoutItem}
          onPress={() =>
            onToInterested({ football: '0', walk: '0', read_book: '0', watch_tv: '0', travel: '1' })
          }
        >
          <Icon name="chevron-left" size={18} />
          <Text style={styles.txtCategory}>Đi du lịch</Text>
        </TouchableOpacity>
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
