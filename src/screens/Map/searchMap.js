import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import flower from '../../assests/img/hoacuc.png';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const searchMap = () => {
  const ref = useRef();
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.containerLayout}>
          <View style={styles.backLogin}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Tìm kiêm kết quả</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerCent}>
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
  );
};

export default searchMap;

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
  containerCent: {
    marginTop: 10,
    alignItems: 'center',
  },
});
