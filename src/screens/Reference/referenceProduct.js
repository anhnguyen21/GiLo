import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Picker } from '@react-native-community/picker';
const { width, height } = Dimensions.get('window');

const referenceProduct = () => {
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backLogin} onPress={() => backProfile()}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Sản phẩm tương ứng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.layoutContent}>
        <View style={styles.layoutCheck}>
          <View style={[styles.layoutPicker]}>
            <Picker
              selectedValue="0"
              style={styles.ipCheck}
              // onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
            >
              <Picker.Item label="Nam" value="0" />
              <Picker.Item label="Nu" value="1" />
            </Picker>
          </View>
          <View style={[styles.layoutPicker]}>
            <Picker
              selectedValue="0"
              style={styles.ipCheck}
              // onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
            >
              <Picker.Item label="Nam" value="0" />
              <Picker.Item label="Nu" value="1" />
            </Picker>
          </View>
          <View style={[styles.layoutPicker]}>
            <Picker
              selectedValue="0"
              style={styles.ipCheck}
              // onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
            >
              <Picker.Item label="Nam" value="0" />
              <Picker.Item label="Nu" value="1" />
            </Picker>
          </View>
        </View>
        <View style={styles.layoutRowProduct}>
          <View style={styles.layoutRow}>
            <View style={styles.sales}>
              <Text style={styles.txtSales}>Giảm 10%</Text>
            </View>

            <View style={styles.containerRow}>
              <Image
                style={styles.imgItemRow}
                source={{
                  uri:
                    'https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg',
                }}
              />
              <Text style={styles.txtTitle}>Hoa hồng</Text>
              <Text style={styles.txtPrice}>100.000 Đ</Text>
            </View>
            <TouchableOpacity style={styles.btnAdd}>
              <Icon style={styles.iconPlus} name="plus" />
            </TouchableOpacity>
          </View>
          <View style={styles.layoutRow}>
            <View style={styles.sales}>
              <Text style={styles.txtSales}>Giảm 10%</Text>
            </View>

            <View style={styles.containerRow}>
              <Image
                style={styles.imgItemRow}
                source={{
                  uri:
                    'https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg',
                }}
              />
              <Text style={styles.txtTitle}>Hoa hồng</Text>
              <Text style={styles.txtPrice}>100.000 Đ</Text>
            </View>
            <TouchableOpacity style={styles.btnAdd}>
              <Icon style={styles.iconPlus} name="plus" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.layoutRowProduct}>
          <View style={styles.layoutRow}>
            <View style={styles.sales}>
              <Text style={styles.txtSales}>Giảm 10%</Text>
            </View>

            <View style={styles.containerRow}>
              <Image
                style={styles.imgItemRow}
                source={{
                  uri:
                    'https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg',
                }}
              />
              <Text style={styles.txtTitle}>Hoa hồng</Text>
              <Text style={styles.txtPrice}>100.000 Đ</Text>
            </View>
            <TouchableOpacity style={styles.btnAdd}>
              <Icon style={styles.iconPlus} name="plus" />
            </TouchableOpacity>
          </View>
          <View style={styles.layoutRow}>
            <View style={styles.sales}>
              <Text style={styles.txtSales}>Giảm 10%</Text>
            </View>

            <View style={styles.containerRow}>
              <Image
                style={styles.imgItemRow}
                source={{
                  uri:
                    'https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg',
                }}
              />
              <Text style={styles.txtTitle}>Hoa hồng</Text>
              <Text style={styles.txtPrice}>100.000 Đ</Text>
            </View>
            <TouchableOpacity style={styles.btnAdd}>
              <Icon style={styles.iconPlus} name="plus" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.layoutRowProduct}>
          <View style={styles.layoutRow}>
            <View style={styles.sales}>
              <Text style={styles.txtSales}>Giảm 10%</Text>
            </View>

            <View style={styles.containerRow}>
              <Image
                style={styles.imgItemRow}
                source={{
                  uri:
                    'https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg',
                }}
              />
              <Text style={styles.txtTitle}>Hoa hồng</Text>
              <Text style={styles.txtPrice}>100.000 Đ</Text>
            </View>
            <TouchableOpacity style={styles.btnAdd}>
              <Icon style={styles.iconPlus} name="plus" />
            </TouchableOpacity>
          </View>
          <View style={styles.layoutRow}>
            <View style={styles.sales}>
              <Text style={styles.txtSales}>Giảm 10%</Text>
            </View>

            <View style={styles.containerRow}>
              <Image
                style={styles.imgItemRow}
                source={{
                  uri:
                    'https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg',
                }}
              />
              <Text style={styles.txtTitle}>Hoa hồng</Text>
              <Text style={styles.txtPrice}>100.000 Đ</Text>
            </View>
            <TouchableOpacity style={styles.btnAdd}>
              <Icon style={styles.iconPlus} name="plus" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default referenceProduct;

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
  layoutRowProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 40 * 2,
    marginLeft: 35,
  },
  layoutContent: {
    backgroundColor: '#fff',
    paddingTop: 10,
    height: 750,
    borderTopColor: '#e7eaeb',
    borderTopWidth: 1,
  },
  layoutCheck: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ipCheck: {
    borderWidth: 0.5,
    width: (width - 20 * 2 - 10 * 2) / 3,
    height: 35,
  },
  layoutRow: {
    marginTop: 20,
    width: 130,
    height: 185,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    marginLeft: 10,
  },
  sales: {
    position: 'absolute',
    backgroundColor: 'yellow',
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  txtSales: {
    fontSize: 10,
    color: 'red',
  },
  iconHeart: {
    position: 'absolute',
    margin: 5,
    marginLeft: 110,
  },
  topIconItemRow: {
    marginLeft: 110,
    marginTop: 5,
  },
  layoutIcon: {
    width: 60,
    alignItems: 'center',
  },
  itemBorder: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  txtIcon: {
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    width: 380,
    height: 215,
  },
  txtRow: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  imgItemRow: {
    marginLeft: 10,
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
  },
  containerRow: {
    margin: 10,
    marginTop: 30,
  },
  txtTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  btnAdd: {
    // backgroundColor: '#f070a9',
    width: 35,
    height: 35,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopColor: '#f070a9',
    borderColor: '#f070a9',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 150,
    marginLeft: 95,
  },
  iconPlus: {
    fontSize: 18,
    color: '#f070a9',
  },
  layoutPicker: {
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 5,
    height: 35,
  },
});
