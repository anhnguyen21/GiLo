/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Navigation } from 'react-native-navigation';
import Moment from 'moment';
import { Picker } from '@react-native-community/picker';
// import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignUpActions from '../../redux/AuthRedux/action';
import { pushScreen } from '../../navigation/pushScreen';

import { firebase } from '@react-native-firebase/auth';
const { width, height } = Dimensions.get('window');

const signup = (props) => {
  const scrollRef = useRef();

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
  const [account, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('0');
  const [phone, setPhone] = useState('');
  const [brithday, setBrithday] = useState('');
  // const dispatch = useDispatch();
  const dataErrors = null;
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  // useSelector((state) => state.user.errorSignUp);
  const appVerifier = window.recaptchaVerifier;
  const onSignUp = () => {
    const dataSignUp = {
      account: account,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      address: address,
      phone: phone,
      gender: gender,
      brithday: brithday,
    };
    firebase
      .auth()
      .signInWithPhoneNumber('+84329488708', appVerifier)
      .then((confirmResult) => {
        setConfirm(confirmResult);
        // props.navigation.navigate('OTP', { confirm: confirm });
        pushScreen(props.componentId, 'digitCode', { confirm: confirmResult }, '', false, 'chevron-left', false);
        console.log(confirmResult);
      })
      .catch((error) => {
        alert(error.message);

        console.log(error);
      });
  };
  const onSuccess = () => {
    // Navigation.pop(props.componentId);
    firebase
      .auth()
      .signInWithPhoneNumber('+84329488708', appVerifier)
      .then((confirmResult) => {
        setConfirm(confirmResult);
        console.log(confirmResult);
        pushScreen(props.componentId, 'digitCode', confirmResult, '', false, 'chevron-left', false);
      })
      .catch((error) => {
        alert(error.message);

        console.log(error);
      });
  };
  const backLogin = () => {
    Navigation.pop(props.componentId);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backLogin} onPress={() => backLogin()}>
        <TouchableOpacity>
          <Icon name="chevron-left" size={18} />
        </TouchableOpacity>
        <Text style={styles.txtBack}>Đăng nhập</Text>
      </TouchableOpacity>
      <ScrollView persistentScrollbar={false}>
        <View style={styles.rowIp}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUserName(text)}
            placeholder="Tên tài khoản"
          />
          {(() => {
            if (dataErrors !== null) {
              if (dataErrors.data.account !== null) {
                return <Text style={styles.txtErrors}>{dataErrors.data.account}</Text>;
              }
            }
          })()}
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFirstName(text)}
            placeholder="Tên"
          />
          {(() => {
            if (dataErrors !== null) {
              if (dataErrors.data.account !== null) {
                return <Text style={styles.txtErrors}>{dataErrors.data.firstName}</Text>;
              }
            }
          })()}
          <TextInput
            style={styles.input}
            onChangeText={(text) => setLastName(text)}
            placeholder="Họ"
          />
          {(() => {
            if (dataErrors !== null) {
              if (dataErrors.data.account !== null) {
                return <Text style={styles.txtErrors}>{dataErrors.data.lastName}</Text>;
              }
            }
          })()}
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
          />
          {(() => {
            if (dataErrors !== null) {
              if (dataErrors.data.account !== null) {
                return <Text style={styles.txtErrors}>{dataErrors.data.email}</Text>;
              }
            }
          })()}
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            placeholder="Mật khẩu"
            secureTextEntry={true}
          />
          {(() => {
            if (dataErrors !== null) {
              if (dataErrors.data.account !== null) {
                return <Text style={styles.txtErrors}>{dataErrors.data.password}</Text>;
              }
            }
          })()}
          <TextInput style={styles.input} placeholder="Nhập lại mật khẩu" secureTextEntry={true} />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPhone(text)}
            placeholder="Số điện thoại"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setAddress(text)}
            placeholder="Địa chỉ"
          />
          {(() => {
            if (dataErrors !== null) {
              if (dataErrors.data.account !== null) {
                return <Text style={styles.txtErrors}>{dataErrors.data.address}</Text>;
              }
            }
          })()}
          <View style={styles.layoutDayGen}>
            <TextInput
              value={brithday}
              style={[styles.input, { width: 180 }]}
              onChangeText={(text) => setBrithday(text)}
              placeholder="Ngày sinh"
            />
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
            <Picker
              selectedValue={gender}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
            >
              <Picker.Item label="Nam" value="0" />
              <Picker.Item label="Nu" value="1" />
            </Picker>
          </View>
          <View style={styles.layoutConfirm}>
            <Text style={styles.txtConfirm}>Xác nhận đăng nhập</Text>
            <TouchableOpacity style={styles.btnSignup} onPress={() => onSignUp()}>
              <Text style={styles.txtSignup}>Đăng kí</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default signup;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  backLogin: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  txtBack: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  rowIp: {
    // alignItems: 'center',
    // marginLeft: (width - 300) / 2,
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#f070a9',
    width: 300,
    paddingLeft: 20,
    height: 40,
    marginBottom: 15,
  },
  txtErrors: {
    marginBottom: 10,
    color: 'red',
  },
  txtConfirm: {
    marginTop: 20,
    marginBottom: 20,
  },
  btnSignup: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
    borderRadius: 20,
    width: 200,
    height: 40,
  },
  txtSignup: {
    fontSize: 16,
  },
  layoutCalendar: {
    position: 'absolute',
    marginTop: 10,
    left: 150,
    elevation: 100,
  },
  iconCalendar: {
    fontSize: 20,
    color: '#f070a9',
  },
  layoutDayGen: {
    flexDirection: 'row',
  },
  layoutConfirm: {
    alignItems: 'center',
  },
  picker: {
    width: 100,
    marginLeft: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#f070a9',
  },
});
