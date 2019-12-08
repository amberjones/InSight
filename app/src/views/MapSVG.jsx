/* Every time you want to place SVG element in your app - you should wrap it using <Svg> component
 Without this tag other element's won’t be visible, because vectors need points.
 */
import React, { useState, useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Svg, { Circle, Rect, SvgUri } from 'react-native-svg';

const styles = StyleSheet.create({
  mapIcon: {
    width: 50,
    height: 50,
    position:"absolute",
    top:"10",
    bottom:"10",
    left:"10",
    right:"10",
  },
});


function MapSvg(props) {
  const { courses } = props;
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  const { navigate } = useNavigation();

  return (
    <View>
      <Svg height="100%" width="100%" viewBox="10 10 100 100">
        {/* The viewBox attribute defines the position and dimensions, in user space, of an SVG */}
          {/* The viewBox attribute defines the position and dimensions, in user space, of an SVG */}
        {/* <Image
          x="5%"
          y="5%"
          width="50%"
          height="90%"
          source={{ uri: 'https://cdn0.iconfinder.com/data/icons/business-startup-10/50/34-512.png' }}
        /> */}
        <Svg
          styles={{ position: 'absolute', top: 81, left: 199 }} width="60" height="60" viewBox="0 0 100 100"
          onPress={() => { navigate('Course', { id: courses[1].id, name: courses[1].topic }); }}
        >
          <Image
            source={{ uri: 'https://cdn0.iconfinder.com/data/icons/business-startup-10/50/34-512.png' }}
            style={{ width: 40, height: 40, zIndex: 0, position: 'absolute', top: 80, left: 90 }}
            title={courses[0].topic}
            key={courses[0].topic}
          />
        </Svg>

        {/* <Image
          source={{ uri: 'https://cdn0.iconfinder.com/data/icons/business-startup-10/50/34-512.png' }}
          style={{ width: 40, height: 40, zIndex: 0, position: 'absolute', top: 80, left: 90 }}
          title={courses[0].topic}
          key={courses[0].topic}
        /> */}
        {/* </Svg> */}
        {/* <Circle
          cx="20"
          cy="20"
          r="6"
          fill="pink"
          title={courses[0].topic}
          key={courses[0].topic}
          onPress={() => { navigate('Course', { id: courses[0].id, name: courses[0].topic }); }}
        /> */}
        <Circle
          cx="30"
          cy="80"
          r="6"
          fill="pink"
          title={courses[1].topic}
          key={courses[1].topic}
          onPress={() => { navigate('Course', { id: courses[1].id, name: courses[1].topic }); }}
        />
        <Circle
          cx="56"
          cy="70"
          r="6"
          fill="pink"
          title={courses[2].topic}
          key={courses[2].topic}
          onPress={() => { navigate('Course', { id: courses[2].id, name: courses[2].topic }); }}
        />
        <Circle
          cx="90"
          cy="90"
          r="6"
          fill="pink"
          title={courses[3].topic}
          key={courses[3].topic}
          onPress={() => { navigate('Course', { id: courses[3].id, name: courses[3].topic }); }}
        />
        {/* <Circle
          cx="45"
          cy="15"
          r="6"
          fill="pink"
          title={courses[4].topic}
          key={courses[4].topic}
          onPress={() => { navigate('Course', { id: courses[4].id, name: courses[4].topic }); }}
        />
        <Circle
          cx="70"
          cy="45"
          r="6"
          fill="pink"
          title={courses[5].topic}
          key={courses[5].topic}
          onPress={() => { navigate('Course', { id: courses[5].id, name: courses[5].topic }); }}
        />
        <Circle
          cx="90"
          cy="20"
          r="6"
          fill="pink"
          title={courses[6].topic}
          key={courses[6].topic}
          onPress={() => { navigate('Course', { id: courses[6].id, name: courses[6].topic }); }}
        /> */}
      </Svg>
    </View>
  );
}

export default MapSvg;
