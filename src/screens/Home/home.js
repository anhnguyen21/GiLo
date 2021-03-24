import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import greetingCard from '../../assests/img/greetingCard.jpg';

const index = () => {
  return (
    <View>
      <View style={styles.layoutCard}>
        <Image style={styles.imgCard} source={greetingCard} />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  layoutCard: {
    alignItems: 'center',
  },
  imgCard: {
    width: 300,
    height: 250,
  },
});
