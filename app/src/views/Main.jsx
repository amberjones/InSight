import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
<<<<<<< HEAD
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';
import cascadeBackground from '../assets/images/cascade.png';
=======
import NavBar from './NavBar';
>>>>>>> e585d47074b4ceee7dd79b3da4e59770704c31c6

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
<<<<<<< HEAD
    <ImageBackground source={require('../assets/images/cascade.png')} style={{ width: '100%', height: '100%' }}>
      <Header // Temporary header with button to eventually open drawer
        leftComponent={
          (
            <TouchableOpacity onPress={() => { /* Open Drawer */ }}>
              <Icon
                name="bars"
                style={{
                  color: 'white',
                  padding: 10,
                  marginLeft: 10,
                  fontSize: 20,
                }}
              />
            </TouchableOpacity>
          )
        }
      />
      <View style={styles.container}>
        <Text style={styles.logoText}>Welcome to InSight!</Text>
      </View>
    </ImageBackground>
=======
    <View style={{ flex: 1 }}>
      <ImageBackground source={{ uri: './src/assets/images/cascade.png' }} style={{ width: '100%', height: '100%' }}>
        <NavBar navigation={props.navigation} />
        <View style={styles.container}>
          <Text>Welcome to InSight!</Text>
        </View>
      </ImageBackground>
    </View>
>>>>>>> e585d47074b4ceee7dd79b3da4e59770704c31c6
  );
}

export default MainScreen;
