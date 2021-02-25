import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Navigation } from 'react-native-navigation';

const UpdateProfile = (props) => {
  const backProfile = () => {
    Navigation.pop(props.componentId);
  };
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backLogin} onPress={() => backProfile()}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Cập nhât thông tin</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.layoutContent}>
        <View style={styles.layoutRow}>
          <Text style={styles.txtTitle}>Tên:</Text>
          <TextInput style={styles.ipRow} placeholder="Anh" />
        </View>
        <View style={styles.layoutRow}>
          <Text style={styles.txtTitle}>Họ:</Text>
          <TextInput style={styles.ipRow} placeholder="Nguyen The" />
        </View>
        <View style={styles.layoutRow}>
          <Text style={styles.txtTitle}>Số điện thoại:</Text>
          <TextInput style={styles.ipRow} placeholder="0329488708" />
        </View>
        <View style={styles.layoutRow}>
          <Text style={styles.txtTitle}>Giới tính:</Text>
          <TextInput style={styles.ipRow} placeholder="Female" />
        </View>
        <View style={styles.layoutRow}>
          <Text style={styles.txtTitle}>Ngày sinh:</Text>
          <TextInput style={styles.ipRow} placeholder="10/10/1999" />
        </View>
        <View style={styles.layoutRow}>
          <Text style={styles.txtTitle}>Địa chỉ:</Text>
          <TextInput style={styles.ipRow} placeholder="101B Lê Hữu Trác, Sơn Trà, Đà Nẵng" />
        </View>
      </View>
    </View>
  );
};

export default UpdateProfile;

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
    margin: 30,
    marginTop: 40,
    backgroundColor: '#fff',
    height: 650,
    borderRadius: 10,
    padding: 20,
  },
  layoutRow: {
    marginBottom: 20,
  },
  txtTitle: {
    fontWeight: 'bold',
    color: '#e7eaeb',
  },
  ipRow: {
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: '#e7eaeb',
    paddingLeft: 15,
    borderRadius: 5,
  },
});
