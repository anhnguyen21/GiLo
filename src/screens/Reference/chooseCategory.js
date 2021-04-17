import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Moment from 'moment';
import { Picker } from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Navigation } from 'react-native-navigation';
import { pushScreen } from '../../navigation/pushScreen';
const { width, height } = Dimensions.get('window');

const chooseCategory = (props) => {
  const backProfile = () => {
    Navigation.pop(props.componentId);
  };
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [gender, setGender] = useState('0');
  const [brithday, setBrithday] = useState('');
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
  const showResult = () => {
    pushScreen(props.componentId, 'Result', '', '', false, 'chevron-left', false);
  };
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backLogin} onPress={() => backProfile()}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Thông tin người nhận</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.layoutContent}>
        <Text style={[styles.txtTitle, { marginBottom: 15 }]}>Thông tin người bạn muốn tặng:</Text>
        <View style={styles.rowContent}>
          <View style={styles.layoutRow}>
            <Text style={styles.txtTitle}>Tên:</Text>
            <TextInput style={styles.ipRow} placeholder="Anh" />
          </View>
          <View style={styles.layoutRow}>
            <Text style={styles.txtTitle}>Họ:</Text>
            <TextInput style={styles.ipRow} placeholder="Nguyen The" />
          </View>
        </View>
        <View style={styles.rowContent}>
          <View style={styles.layoutDayGen}>
            <View style={styles.layoutRow}>
              <Text style={styles.txtTitle}>Ngày sinh:</Text>
              <TextInput
                // value={brithday}
                style={[styles.input, { width: width - 100 - 100 }]}
                // onChangeText={(text) => setBrithday(text)}
                placeholder="Ngày sinh"
              />
              <TouchableOpacity style={styles.layoutCalendar} onPress={showDatePicker}>
                <Icon name="calendar" style={styles.iconCalendar} />
              </TouchableOpacity>
            </View>
            <DateTimePickerModal
              style={styles.layoutDate}
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <View style={[styles.layoutRow, { width: 80, marginLeft: 80 }]}>
              <Text style={styles.txtTitle}>Giới tính:</Text>
              <View style={styles.layoutPicker}>
                <Picker
                  selectedValue={gender}
                  style={styles.picker}
                  // onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                >
                  <Picker.Item label="Nam" value="0" />
                  <Picker.Item label="Nu" value="1" />
                </Picker>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.layoutRow}>
          <Text style={styles.txtTitle}>Địa chỉ:</Text>
          <TextInput style={styles.ipRow} placeholder="Anh" />
        </View>
        <View style={styles.rowContent}>
          <View style={[styles.layoutRow]}>
            <Text style={styles.txtTitle}>Đối tượng:</Text>
            <View style={styles.layoutPicker}>
              <Picker
                selectedValue={gender}
                style={styles.pickerChoose}
                // onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
              >
                <Picker.Item label="Mẹ" value="1" />
                <Picker.Item label="Bố" value="2" />
                <Picker.Item label="Người yêu" value="3" />
                <Picker.Item label="Bạn" value="4" />
              </Picker>
            </View>
          </View>
          <View style={[styles.layoutRow]}>
            <Text style={styles.txtTitle}>Quà:</Text>
            <View style={styles.layoutPicker}>
              <Picker
                selectedValue={gender}
                style={styles.pickerChoose}
                // onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
              >
                <Picker.Item label="Sinh nhật" value="1" />
                <Picker.Item label="Quốc tế phụ nữ" value="2" />
                <Picker.Item label="Kĩ nhiêm" value="3" />
                <Picker.Item label="Khác" value="4" />
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.rowContent}>
          <View style={styles.layoutRow}>
            <Text style={styles.txtTitle}>Sở thích:</Text>
            <TextInput style={styles.ipRow} placeholder="Anh" />
          </View>
          <View style={[styles.layoutRow]}>
            <Text style={styles.txtTitle}>Màu yêu thích:</Text>
            <View style={styles.layoutPicker}>
              <Picker
                selectedValue={gender}
                style={styles.pickerChoose}
                // onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
              >
                <Picker.Item label="Đỏ" value="1" />
                <Picker.Item label="Xanh" value="2" />
                <Picker.Item label="Vàng" value="3" />
                <Picker.Item label="Cam" value="4" />
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.layoutResult}>
          <TouchableOpacity style={styles.btnResult} onPress={() => showResult()}>
            <Text style={styles.txtResult}>Xem kết quả</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default chooseCategory;

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
    padding: 30,
    paddingTop: 20,
    height: 750,
    borderTopColor: '#e7eaeb',
    borderTopWidth: 1,
  },
  rowContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  layoutRow: {
    marginBottom: 20,
    width: (width - 100) / 2,
  },
  txtTitle: {
    fontWeight: 'bold',
    // color: '#e7eaeb',
  },
  ipRow: {
    borderWidth: 0.5,
    borderColor: '#000',
    paddingLeft: 15,
    borderRadius: 5,
    height: 40,
  },
  input: {
    borderWidth: 2,
    borderRadius: 5,
    // borderColor: '#f070a9',
    width: 300,
    paddingLeft: 20,
    height: 40,
    marginBottom: 15,
  },
  layoutCalendar: {
    position: 'absolute',
    marginTop: 10,
    left: 150,
    elevation: 100,
  },
  iconCalendar: {
    marginTop: 20,
    fontSize: 20,
    color: '#f070a9',
  },
  layoutDate: {
    width: 50,
  },
  layoutDayGen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  layoutConfirm: {
    alignItems: 'center',
  },
  layoutPicker: {
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 5,
    height: 40,
  },
  picker: {
    width: 60,
    marginLeft: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#f070a9',
  },
  pickerChoose: {
    width: (width - 80) / 2,
    paddingLeft: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#f070a9',
  },
  layoutResult: {
    alignItems: 'center',
  },
  btnResult: {
    width: 200,
    height: 50,
    backgroundColor: '#f070a9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  txtResult: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
