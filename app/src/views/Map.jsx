import React, { useState, useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';
import MapSvg from './MapSVG';

function MapScreen() {
  const [courses, setCourses] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    axios.get('http://18.206.35.110:8080/course/list')
      .then((allCourses) => {
        setCourses(allCourses.data);
        setLoadStatus(true);
      });
  }, []); // Array necessary to not repeat endlessly
  return (
    <ImageBackground source={require('../assets/images/cascade.png')}
      imageStyle={{ resizeMode: 'stretch' }}
      style={{ width: '100%', height: '100%' }}
    >
      <View>
        {isLoaded ? (
          <MapSvg courses={courses} />
        ) : null}
      </View>
    </ImageBackground>
  );
}

export default MapScreen;
