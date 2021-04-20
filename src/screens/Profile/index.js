import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AlertMessage from '../../components/AlertMessage';
import hoacuc from '../../assests/img/hoacuc.png';
import imgProfile from '../../assests/img/imgProfile.jpg';
import { pushScreen } from '../../navigation/pushScreen';
import { useDispatch, useSelector } from 'react-redux';
import LoginActions from '../../redux/AuthRedux/action';
const { width: width } = Dimensions.get('window');
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import storage from '@react-native-firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const index = (props) => {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState(hoacuc);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const dispatch = useDispatch();
  const dataProfile = useSelector((state) => state.user.dataProfile);

  console.log(dataProfile);

  const onLogOut = () => {
    console.log('1234');
    dispatch(LoginActions.userLogout());
  };

  const onGoToUpdate = () => {
    pushScreen(props.componentId, 'UpdateProfile', '', '', false, 'chevron-left', false);
  };
  const onGoToNonfi = () => {
    pushScreen(props.componentId, 'Nonfication', '', '', false, 'chevron-left', false);
  };
  const onGoToPayment = () => {
    pushScreen(props.componentId, 'Payment', '', '', false, 'chevron-left', false);
  };
  const onAllOrder = () => {
    pushScreen(props.componentId, 'MyOrder', '', '', false, 'chevron-left', false);
  };
  const onPromote = () => {
    pushScreen(props.componentId, 'PromoCode', '', '', false, 'chevron-left', false);
  };
  const onAddress = () => {
    pushScreen(props.componentId, 'Address', '', '', false, 'chevron-left', false);
  };

  const selectLaunchCamera = async () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log(source);
        setImage(source);
      }
    });
  };

  useEffect(() => {
    uploadImage();
    getImage();
  }, [image]);

  const getImage = async () => {
    const url = await storage().ref(dataProfile.img).getDownloadURL();
    console.log(url);
    return url;
  };

  const selectLibrary = async () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        uploadImage();
        console.log(source);
        setImage(source);
      }
    });
  };

  const uploadImage = async () => {
    console.log('upload image');
    const { uri } = image;
    console.log(uri);
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'android' ? uri.replace('file://', '') : uri;
    const imgUpload =
      Platform.OS === 'android' ? uri.replace('file:///data/user/0/com.gilo/cache/', '') : uri;
    console.log(uploadUri);
    await axios
      .put('https://damp-woodland-88343.herokuapp.com/api/profile/9', {
        img: imgUpload,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setUploading(true);
    setTransferred(0);
    const task = storage().ref(filename).putFile(uploadUri);
    console.log(task);
    try {
      await task;
      setUploading(false);
    } catch (e) {
      console.error(e);
    }
    // setUploading(false);
    Alert.alert('Thay đổi hình ảnh thành công!');
  };

  const closeModal = () => {
    setModal(true);
  };

  return (
    <View>
      <Image style={styles.imgProfile} source={imgProfile} />
      <View style={styles.container}>
        <View style={styles.backLogin}>
          <Text style={styles.txtBack}>Thông tin cá nhân</Text>
        </View>
        <View style={styles.layoutProfile}>
          <Image style={styles.img} source={image} />
          <TouchableOpacity style={styles.layoutEdit} onPress={closeModal}>
            <Icon name="edit" size={20} />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={uploadImage}>
            <Icon name="plus" size={20} />
          </TouchableOpacity> */}
          <View style={styles.layoutName}>
            <Text style={styles.txtName}>
              {dataProfile.lastName ?? 'nguyen'} {dataProfile.firstName ?? 'anh'}
            </Text>
            <Text style={styles.txtId}>ID: #1010{dataProfile.id}</Text>
          </View>
        </View>
        {modal && (
          <AlertMessage
            isTwoBtn={true}
            title="Ban có thể lấy ảnh từ"
            textFirstBtn="Camera"
            textSecondBtn="Thư viện"
            camera={selectLaunchCamera}
            library={selectLibrary}
          />
        )}
        <View style={styles.layoutItem}>
          <TouchableOpacity style={styles.item} onPress={() => onAllOrder()}>
            <Icon style={styles.iconItem} name="gift" />
            <Text style={styles.txtItem}>Sản phẩm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => onPromote()}>
            <Icon style={styles.iconItem} name="credit-card" />
            <Text style={styles.txtItem}>Mã giảm giá</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => onAddress()}>
            <Icon style={styles.iconItem} name="map-marker" />
            <Text style={styles.txtItem}>Địa chỉ</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.layoutItemChooses]}>
        <TouchableOpacity style={styles.itemChooses} onPress={() => onLogOut()}>
          <View style={styles.itemLeft}>
            <Icon style={styles.iconItemChooses} name="power-off" />
            <Text style={styles.txtItemChooses}>Đăng xuất</Text>
          </View>
          <Icon name="chevron-left" size={14} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemChooses} onPress={() => onGoToUpdate()}>
          <View style={styles.itemLeft}>
            <Icon style={styles.iconItemChooses} name="user" />
            <Text style={styles.txtItemChooses}>Thông tin cá nhân</Text>
          </View>
          <Icon name="chevron-left" size={16} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemChooses} onPress={() => onGoToNonfi()}>
          <View style={styles.itemLeft}>
            <Icon style={styles.iconItemChooses} name="bell" />
            <Text style={styles.txtItemChooses}>Thông báo</Text>
          </View>
          <Icon name="chevron-left" size={16} />
        </TouchableOpacity>
        <View style={styles.itemChooses}>
          <View style={styles.itemLeft}>
            <Icon style={styles.iconItemChooses} name="cog" />
            <Text style={styles.txtItemChooses}>Cài đặt</Text>
          </View>
          <Icon name="chevron-left" size={14} />
        </View>
        <TouchableOpacity style={styles.itemChooses} onPress={() => onGoToPayment()}>
          <View style={styles.itemLeft}>
            <Icon style={styles.iconItemChooses} name="credit-card" />
            <Text style={styles.txtItemChooses}>Thanh toán</Text>
          </View>
          <Icon name="chevron-left" size={14} />
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.itemChooses} onPress={() => onLogOut()}>
          <View style={styles.itemLeft}>
            <Icon style={styles.iconItemChooses} name="power-off" />
            <Text style={styles.txtItemChooses}>Đăng xuất</Text>
          </View>
          <Icon name="chevron-left" size={14} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  imgProfile: {
    position: 'absolute',
    opacity: 0.5,
    width: width,
    height: 250,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
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
  layoutProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  layoutEdit: {
    position: 'absolute',
    left: 80,
    top: 80,
    elevation: 999,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  layoutName: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  txtName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtId: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  layoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    position: 'absolute',
    marginTop: 180,
    marginLeft: (width - 40 - 300) / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  layoutItemChooses: {
    marginTop: 320,
    width: 300,
    height: 350,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    position: 'absolute',
    marginLeft: (width - 300) / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconItem: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemChooses: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#e7eaeb',
    justifyContent: 'space-between',
  },
  itemLeft: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconItemChooses: {
    fontSize: 18,
  },
  txtItemChooses: {
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
