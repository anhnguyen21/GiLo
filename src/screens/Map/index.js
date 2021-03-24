import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import flower from '../../assests/img/hoacuc.png';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0322,
  longitudeDelta: 0.0151,
};

const App = () => {
  const ref = useRef();
  const [currentPosition, setCurrentPosition] = useState(initialState);
  Geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    setCurrentPosition({
      ...currentPosition,
      latitude: latitude,
      longitude: longitude,
    });
  });
  const [data, setData] = React.useState(array);
  const array = {
    coordinate: [
      { name: '1', latitude: 16.053303, longitude: 108.236823 },
      { name: '2', latitude: 16.050401, longitude: 108.230905 },
      { name: '3', latitude: 16.051856, longitude: 108.222263 },
      { name: '4', latitude: 16.059262, longitude: 108.223428 },
      { name: '5', latitude: 16.061025, longitude: 108.22472 },
    ],
  };
  const destination = { latitude: 16.061025, longitude: 108.22472 };
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDGZOhb6qWmy1PLYJrLmtBho18Vasw0C_U';

  const listItems = array.coordinate.map((data, index) => (
    <Marker
      key={index}
      coordinate={{
        latitude: data.latitude,
        longitude: data.longitude,
      }}
      style={styles.sizeImage}
      title={data.name}
      description={'Day la ki tuc xa'}
    >
      <Image source={require('../../assests/img/hoacuc.png')} style={styles.imageMap} />
      <Callout>
        <Image source={require('../../assests/img/hoacuc.png')} style={styles.imageMapSide} />
        <Text>Cua hang hoa</Text>
      </Callout>
    </Marker>
  ));

  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.containerLayout}>
          <View style={styles.backLogin}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Chọn vị trí giao hàng</Text>
          </View>
        </View>
      </View>
      <View style={styles.layoutSearch}>
        <View style={styles.itemRow}>
          <View style={styles.iconDelivery}>
            <Icon name="clock" size={18} color="#fff" />
          </View>

          <View style={styles.detailRowDelivery}>
            <GooglePlacesAutocomplete
              ref={ref}
              placeholder="Vị trí gửi hàng"
              minLength={2} // minimum length of text to search
              autoFocus={false}
              returnKeyType={'search'}
              listViewDisplayed={false} // true/false/undefined
              fetchDetails={true}
              renderDescription={(row) => row.description} // custom description render
              enablePoweredByContainer={false}
              onPress={(data, details = null) => {
                alert('123');
                console.log(details);
              }}
              query={{
                key: 'AIzaSyDGZOhb6qWmy1PLYJrLmtBho18Vasw0C_U',
                language: 'vi',
                types: 'establishment',
              }}
              styles={{
                textInputContainer: {
                  width: 280,
                },
                textInput: {
                  width: 280,
                  height: 35,
                  color: '#5d5d5d',
                  fontSize: 12,
                  position: 'absolute',
                },
                listView: {
                  width: 280,
                  position: 'absolute',
                  top: 40,
                  elevation: 100,
                },
              }}
            />
          </View>
        </View>
        <View style={styles.itemRow}>
          <View style={styles.iconDelivery}>
            <Icon name="clock" size={18} color="#fff" />
          </View>

          <View style={styles.detailRowDelivery}>
            <GooglePlacesAutocomplete
              minLength={2} // minimum length of text to search
              autoFocus={false}
              returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
              listViewDisplayed="auto" // true/false/undefined
              fetchDetails={true}
              renderDescription={(row) => row.description} // custom description render
              enablePoweredByContainer={false}
              placeholder="Vị trí chuyển hàng"
              // fetchDetails={true}
              onPress={(data, details = null) => {
                console.log('123');
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              query={{
                key: 'AIzaSyDGZOhb6qWmy1PLYJrLmtBho18Vasw0C_U',
                language: 'vi',
                types: 'establishment',
              }}
              styles={{
                textInputContainer: {
                  width: 280,
                },
                textInput: {
                  width: 280,
                  height: 35,
                  color: '#5d5d5d',
                  fontSize: 12,
                  position: 'absolute',
                  elevation: 0,
                },
                listView: {
                  width: 280,
                  position: 'absolute',
                  zIndex: 100,
                  top: 40,
                  elevation: 100,
                },
              }}
            />
          </View>
        </View>
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        style={styles.map}
        initialRegion={currentPosition}
      >
        <MapViewDirections
          origin={currentPosition}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="red"
          onReady={(result) => {
            setDistance(result.distance);
            setDuration(result.duration);
          }}
        />
        {listItems}
        <Circle
          center={{
            latitude: 16.05957,
            longitude: 108.241534,
          }}
          radius={1000}
          fillColor={'rgba(200,300,200,.5)'}
        />
        <Marker
          coordinate={{
            latitude: 16.053303,
            longitude: 108.236823,
          }}
          style={styles.sizeImage}
          title={'Vi tri hien tai'}
          description={'Day la ki tuc xa'}
        >
          <Image source={flower} style={styles.imageMap} />
        </Marker>
      </MapView>
      <View style={styles.detailDelivery}>
        <View style={styles.boderRow} />
        <View style={styles.itemRow}>
          <View style={styles.iconDelivery}>
            <Icon name="ruler" size={18} color="#fff" />
          </View>
          <View style={styles.detailRowDelivery}>
            <Text style={styles.txtNameDistance}>Khoản cách đến địa điểm</Text>
            <Text style={styles.txtDistance}>{distance} km</Text>
          </View>
        </View>
        <View style={styles.itemRow}>
          <View style={styles.iconDelivery}>
            <Icon name="clock" size={18} color="#fff" />
          </View>

          <View style={styles.detailRowDelivery}>
            <Text style={styles.txtNameDistance}>Thời gian đến</Text>
            <Text style={styles.txtDistance}>{duration} mins</Text>
          </View>
        </View>
        <View style={[styles.itemRow, styles.rowCall]}>
          <View style={styles.rowAvatar}>
            <Image style={styles.imgAvatar} source={flower} />
            <View style={styles.detailRowDelivery}>
              <Text style={styles.txtNameDistance}>Cửa hàng hoa</Text>
              <Text style={styles.txtDistance}>Nguyễn Thế Anh</Text>
            </View>
          </View>
          <View style={[styles.iconDelivery, { backgroundColor: '#40aa54' }]}>
            <Icon name="phone" size={18} color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layoutTop: {
    backgroundColor: '#fff',
    height: 65,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  containerLayout: {
    margin: 20,
  },
  container: {
    margin: 20,
    flex: 1,
  },
  row: {
    height: 300,
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
    // marginTop: 120,
    padding: 10,
    paddingLeft: 20,
    paddingBottom: 0,
    // flex: 1,
  },
  ipSearch: {
    borderColor: '#4444',
    borderWidth: 1,
    height: 200,
    width: 280,
    borderRadius: 8,
    zIndex: 100,
  },
  map: {
    height: 500,
  },
  imageMap: {
    height: 30,
    width: 30,
  },
  imageMapSide: {
    height: 100,
    width: 100,
  },
  detailDelivery: {
    backgroundColor: '#fff',
    marginTop: -110,
    height: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    alignItems: 'center',
    zIndex: 100,
  },
  boderRow: {
    margin: 15,
    borderBottomWidth: 3,
    borderColor: '#000',
    width: 60,
  },
  itemRow: {
    flexDirection: 'row',
    width: 300,
    marginBottom: 20,
  },
  iconDelivery: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#ef4e9a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailRowDelivery: {
    marginLeft: 20,
  },
  txtNameDistance: {
    fontWeight: 'bold',
    color: '#d9d9d9',
  },
  rowCall: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowAvatar: {
    flexDirection: 'row',
  },
  imgAvatar: {
    width: 30,
    height: 30,
  },
});

export default App;
