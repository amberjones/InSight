import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';
import cascadeBackground from '../assets/images/cascade.png';
import NavBar from './NavBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 56,
    marginTop: 10,
  },
});

function MainScreen(props) {
  return (
    <ImageBackground source={require('../assets/images/cascade.png')}
      imageStyle={{ resizeMode: 'stretch' }}
      style={{ width: '100%', height: '100%' }}
    >
      <View style={{ flex: 1 }}>
          <NavBar navigation={props.navigation} />
          <View style={styles.container}>
            <Text>Welcome to InSight!</Text>
          </View>
      </View>
    </ImageBackground>
  );
}

export default MainScreen;
