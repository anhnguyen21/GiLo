import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;
import bg from './src/assests/img/bg1.jpg';
const { width, height } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.bgImage} source={bg} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  bgImage: {
    width: width,
    height: height + 42,
  },
});
