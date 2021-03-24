import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Constants, SMS } from 'expo-sms';

const uploadImage = () => {
  const onPress = async () => {
    console.log('123');
    const status = await SMS.sendSMSAsync('123456789');
    console.log(status);
  };
  return (
    <View>
      <TouchableOpacity onPress={() => onPress()}>
        <Text>button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default uploadImage;

const styles = StyleSheet.create({});
