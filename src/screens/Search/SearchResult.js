import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchResult = () => {
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backLogin} onPress={() => backProfile()}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Kết quả tìm kiếm</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.layoutContent}>
        <View style={styles.layoutSearch}>
          <Icon style={styles.iconMic} name="microphone" size={16} color="#FCC461" />
          <TextInput style={styles.inputSearch} placeholder="Tìm kiếm" />
          <Icon style={styles.iconEraser} name="eraser" />
          <Icon style={styles.iconSetting} name="sliders-h" />
        </View>
        <View>
          <View style={styles.layoutRowTitle}>
            <View style={styles.txtTitle}>
              <Text style={styles.txtSearch}>Kết quả tìm kiếm "hoa hồng"</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchResult;

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
  layoutSearch: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMic: {
    position: 'absolute',
    elevation: 10,
    left: 10,
  },
  inputSearch: {
    width: 280,
    paddingLeft: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  iconEraser: {
    position: 'absolute',
    elevation: 10,
    left: 250,
    color: '#CBCBC9',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#F1EBDF',
  },
  iconSetting: {
    marginLeft: 20,
    fontSize: 16,
    padding: 15,
    backgroundColor: '#FCA309',
    color: '#000',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  layoutRowTitle: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 30,
  },
  txtSearch: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
