import React, { useState, useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';
import MapSvg from './MapSVG';

function MapScreen() {
  const [courses, setCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    axios.get('http://18.206.35.110:8080/course/list')
      .then((allCourses) => {
        setCourses(allCourses.data);
        return axios.get(`http:18.206.35.110:8080/profile/user/1/completed`); //FIXEME: <---- dynamic user id
      })
      .then((userCompletedCourses) => {
        setCompletedCourses(userCompletedCourses.data);
        setLoadStatus(true);
      });
  }, []); // Array necessary to not repeat 
  return (
    <ImageBackground source={require('../assets/images/cascade.png')}
      imageStyle={{ resizeMode: 'stretch' }}
      style={{ width: '100%', height: '100%' }}
    >
      <View>
        {isLoaded ? (
          <MapSvg courses={courses} completedCourses={completedCourses} />
        ) : null}
      </View>
    </ImageBackground>
  );
}

export default MapScreen;
