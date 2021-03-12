import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import ItemProgress from '../../components/ItemProgress';
import { pushScreen } from '../../navigation/pushScreen';
import { Navigation } from 'react-native-navigation';

const order = (props) => {
  const dataProgress = useSelector((state) => state.progress.responseProgress);
  const onDetailsOrder = (data) => {
    console.log(data);
    pushScreen(props.componentId, 'MyOrder', data, '', false, 'chevron-left', false);
  };
  const backProfile = () => {
    Navigation.pop(props.componentId);
  };
  return (
    <ScrollView>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backLogin} onPress={() => backProfile()}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Sản phẩm của bạn</Text>
          </TouchableOpacity>
          <View style={styles.layoutTitle}>
            <View
              style={[
                styles.itemTitle,
                { borderBottomWidth: 1, paddingBottom: 5, borderColor: '#1ac91a' },
              ]}
            >
              <Text style={styles.txtName}>Tất cả</Text>
              <Text style={styles.txtNumber}>(58)</Text>
            </View>
            <View style={styles.itemTitle}>
              <Text style={styles.txtName}>Đang chờ</Text>
              <Text style={styles.txtNumber}>(58)</Text>
            </View>
            <View style={styles.itemTitle}>
              <Text style={[styles.txtName, { color: '#1ac91a' }]}>Hoàn thành</Text>
              <Text style={[styles.txtNumber, { color: '#1ac91a' }]}>(58)</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        {dataProgress.map((item, index) => {
          return (
            <ItemProgress
              key={index}
              state={item.state}
              content={item.content}
              time={item.time}
              order={item.id_order}
              data={item}
              onDetailsOrder={onDetailsOrder}
            />
          );
        })}
      </View>
    </ScrollView>
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
});
