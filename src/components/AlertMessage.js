import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
// import CartActions from '../redux/CartRedux/actions';
// import { useDispatch } from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function AlertMessage(props) {
  const [alertVisible, setAlertVisible] = useState(true);

//   const dispatch = useDispatch();
  const camera = () => {
    setAlertVisible(false);
    props.camera();
  };
  const library = () => {
    setAlertVisible(false);
    props.library();
  };
  return (
    <View style={styles.centerView}>
      <Modal animationType="slide" transparent={true} visible={alertVisible}>
        <View>
          <View style={styles.modalView}>
            <Text style={styles.textStyles}>{props.title}</Text>
            {props.isTwoBtn ? (
              <View style={styles.layoutButton}>
                <TouchableOpacity
                  style={[
                    styles.btnNotification,
                    props.isSecondaryColor && { backgroundColor: '#555' },
                  ]}
                  onPress={() => camera()}
                >
                  <Text style={styles.textNotification}>{props.textFirstBtn}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnNo} onPress={() => library()}>
                  <Text style={styles.textNo}>{props.textSecondBtn}</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.layoutButtonOne}>
                <TouchableOpacity
                  style={styles.btnNotification}
                  onPress={() => deleteErrorMessage()}
                >
                  <Text style={styles.textNotification}>{props.textFirstBtn}</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  modalView: {
    marginTop: (windowHeight - 120) / 2,
    alignSelf: 'center',
    height: 120,
    width: windowWidth - 30,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 5,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  textStyles: {
    textAlign: 'center',
    color: '#000',
  },
  layoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 25,
  },
  layoutButtonOne: {
    marginTop: 15,
    alignSelf: 'center',
  },
  btnNotification: {
    backgroundColor: '#555',
    borderRadius: 5,
    width: 120,
    height: 30,
    justifyContent: 'center',
  },
  textNotification: {
    color: 'white',
    textAlign: 'center',
  },
  btnNo: {
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    width: 120,
    height: 30,
  },
  textNo: {
    color: '#555',
    textAlign: 'center',
  },
});
