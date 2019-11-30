import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { List, CheckBox, CheckBoxProps } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';

function QuizScreen(props) {
  // Use state hooks to access concept object
  // All concepts available here
  const [concepts, setConcepts] = useState(props.navigation.state.params.concepts);
  // holds the state of the answer choice selected
  const [isChecked, setChecked] = useState(false);
  const { id } = props.navigation.state.params;
  const { navigate } = useNavigation();

  const styles = {
    wrapper: {
      backgroundColor: '#fff',
    },
    slides: {
      flex: 4,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold',
      margin: 5,
    },
    answer: {
      color: '#000',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 5,
    },
  };

  return (
    // mapping over the concpets, and getting their questions
    <View style={{ flex: 1 }}>
      <Swiper
        key={concepts.length}
        style={styles.wrapper}
        showsButtons
        loop={false}
      >
        {/* map over the concept and displays each associated question
        there is only one question per concept */}
        {concepts.map((concept) => (
          <View>
            <Text style={styles.text}>{concept.question}</Text>
            <View>
              {concept.answers.map((answer) => (
                <CheckBox
                  center
                  title={answer.choice}
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checked={isChecked}
                  onPress={() => setChecked(!isChecked)}
                />
              ))}
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
}

export default QuizScreen;

/*
Object {
  "answers": Array [
    Object {
      "choice": "you buy everything",
      "description": "No, dont do that!",
      "id": 1,
      "idConcept": 1,
      "isCorrect": false,
    },
    Object {
      "choice": "you plan it out",
      "description": "Yes, dont do that!",
      "id": 2,
      "idConcept": 1,
      "isCorrect": true,
    },
    Object {
      "choice": "you cry",
      "description": "budgeting isnt that bad!",
      "id": 3,
      "idConcept": 1,
      "isCorrect": false,
    },
  ],
  "description": "We are discussing the concept of budget tools",
  "id": 1,
  "question": "What is a budget tool?",
}
Object {
  "answers": Array [
    Object {
      "choice": "you do nothing",
      "description": "no you have to do something",
      "id": 4,
      "idConcept": 2,
      "isCorrect": false,
    },
    Object {
      "choice": "you make it yourself",
      "description": "yes! know your budget",
      "id": 5,
      "idConcept": 2,
      "isCorrect": true,
    },
    Object {
      "choice": "you have your cousin do it",
      "description": "maybe you should take charge of your financial life",
      "id": 6,
      "idConcept": 2,
      "isCorrect": false,
    },
  ],
  "description": "this is not a bad thing to know",
  "id": 2,
  "question": "How do you create a budget?",
}
*/