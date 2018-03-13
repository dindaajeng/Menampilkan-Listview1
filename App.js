import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/Header';

export default class App extends React.Component {
  render() {
return (
  <View style={styles.containerMain}>
  <Header />
  <Text > Saya Belajar React-Native          </Text>
  </View>

);
}
}
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  }
});
