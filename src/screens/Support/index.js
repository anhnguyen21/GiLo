import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Picker } from '@react-native-community/picker';

const index = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setBrithday(Moment(date).format('d MMM YYYY'));
    hideDatePicker();
  };
  return (
    <View>
      <View style={styles.layoutTop}>
        <TouchableOpacity style={styles.backLogin}>
          <Text style={styles.txtBack}>Thông tin người nhận</Text>
        </TouchableOpacity>
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
        <View style={[styles.layoutRow, { flexDirection: 'row' }]}>
          <View style={styles.layoutPart}>
            <Text style={styles.txtTitle}>Số điện thoại:</Text>
            <View style={styles.ipRow}>
              <Picker selectedValue="0" style={styles.picker}>
                <Picker.Item label="Nam" value="0" />
                <Picker.Item label="Nu" value="1" />
              </Picker>
            </View>
          </View>
          <View>
            <Text style={styles.txtTitle}>Ngày sinh:</Text>
            <View style={styles.ipRow}>
              <TextInput style={[styles.input, { width: 150 }]} placeholder="Ngày sinh" />
            </View>
            <TouchableOpacity style={styles.layoutCalendar} onPress={showDatePicker}>
              <Icon name="calendar" style={styles.iconCalendar} />
            </TouchableOpacity>
            <DateTimePickerModal
              style={styles.layoutDate}
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>
        <View style={styles.layoutRow}>
          <Text style={styles.txtTitle}>Địa chỉ:</Text>
          <TextInput style={styles.ipRow} placeholder="101B Lê Hữu Trác, Sơn Trà, Đà Nẵng" />
        </View>
      </View>
      <TouchableOpacity style={styles.layoutNext}>
        <Icon name="arrow-right" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  layoutTop: {
    backgroundColor: '#fff',
    height: 60,
    justifyContent: 'center',
  },
  container: {
    margin: 20,
  },
  backLogin: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
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
    height: 600,
    borderRadius: 10,
    padding: 20,
  },
  layoutRow: {
    marginBottom: 20,
  },
  layoutPart: {
    width: 100,
    marginRight: 20,
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
  layoutCalendar: {
    position: 'absolute',
    marginTop: 45,
    left: 140,
    elevation: 100,
  },
  iconCalendar: {
    fontSize: 20,
    color: '#f070a9',
  },
  layoutNext: {
    marginLeft: 300,
    width: 60,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f070a9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
