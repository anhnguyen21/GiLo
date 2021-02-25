import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Navigation } from 'react-native-navigation';

const Nonfication = (props) => {
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
            <Text style={styles.txtBack}>Thông báo</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.layoutContent}>
        <View style={styles.layoutRow}>
          <Text style={styles.txtTitle}>Thông báo ứng dụng</Text>
          <Icon style={styles.iconNon} name="sliders-h" />
        </View>
        <View style={styles.layoutRow}>
          <Text style={styles.txtTitle}>Thông báo qua điện thoại</Text>
          <Icon style={styles.iconNon} name="sliders-h" />
        </View>
        <View style={styles.layoutRow}>
          <Text style={styles.txtTitle}>Thông báo khác</Text>
          <Icon style={styles.iconNon} name="sliders-h" />
        </View>
      </View>
    </View>
  );
};

export default Nonfication;

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
    height: 450,
    borderRadius: 10,
    padding: 20,
  },
  layoutRow: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtTitle: {
    fontWeight: 'bold',
    color: '#555',
  },
});
