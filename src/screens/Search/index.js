import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';

const index = () => {
  const searchData = useSelector((state) => state.search.responseSearch);
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <View style={styles.backLogin}>
            <Text style={styles.txtBack}>Tìm kiếm</Text>
          </View>
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
              <Text style={styles.txtSearch}>Lịch sử tìm kiếm</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.btnClear}>Clear</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.layoutResult}>
            {searchData.map((item, index) => {
              return (
                <Text key={index} style={styles.txtResult}>
                  {item.content}
                </Text>
              );
            })}
            {/* <Text style={styles.txtResult}>Hoa hồng</Text>
            <Text style={styles.txtResult}>Hoa cúc</Text>
            <Text style={styles.txtResult}>Bánh sinh nhật</Text>
            <Text style={styles.txtResult}>Bánh sinh nhật</Text> */}
          </View>
        </View>
        <View>
          <View style={styles.layoutRowTitle}>
            <View style={styles.txtTitle}>
              <Text style={styles.txtSearch}>Khám phá thêm</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.btnClear}>Refresh</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.layoutResult}>
            <Text style={styles.txtResult}>Hoa hồng</Text>
            <Text style={styles.txtResult}>Hoa cúc</Text>
            <Text style={styles.txtResult}>Bánh sinh nhật</Text>
            <Text style={styles.txtResult}>Bánh sinh nhật</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  layoutTop: {
    backgroundColor: '#fff',
    height: 65,
  },
  container: {
    margin: 20,
  },
  backLogin: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
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
  btnClear: {
    color: '#CBCBC9',
  },
  layoutResult: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    flexWrap: 'wrap',
  },
  txtResult: {
    padding: 15,
    backgroundColor: '#fff',
    marginRight: 15,
    borderRadius: 15,
    fontWeight: 'bold',
    color: '#8C8C8C',
    marginBottom: 10,
  },
});
