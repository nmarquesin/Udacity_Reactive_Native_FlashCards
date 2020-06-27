import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Button from "./Button";
import { mint, peach } from "../utils/colors";

class Quiz extends Component {
  state = {
    totalCards: 0,
    currentCard: 0,
    wrongAnswers: [],
    showAnswer: false,
  };
  render() {
    const { title, questions, type } = this.props;
    const { totalCards, currentCard, showAnswer } = this.state;
    return <View>{showAnswer ? <Answer /> : <Question />}</View>;
  }
}

// const Stack = createStackNavigator({
//   Answer: {
//     screen: Answer,
//   },
//   Question: {
//     screen: Question,
//   },
// });

const Question = ({ navigation }) => {
  //   const { question, cards, card, type } = props;
  return (
    <View style={{ backgroundColor: peach }}>
      <Text>Question: </Text>
      {/* <Stack.Navigator>
        <Stack.Screen name="View Answer" component={Answer} />
      </Stack.Navigator> */}
      <Button
        text="view answer"
        onPress={() => navigation.navigate("Answer")}
      />
      <Text>Cards Left: </Text>
    </View>
  );
};

const Answer = () => {
  //   const { answer, cards, card, type } = props;
  return (
    <View style={{ backgroundColor: mint }}>
      <Text>Answer: </Text>
      <Button text="back" />
      <Button text="Correct" />
      <Button text="Incorrect" />
      <Button text="Next Question" />
      <Text>Cards Left: </Text>
    </View>
  );
};

const QuizEnd = () => {
  return <Text>End of Quiz</Text>;
};

export default Quiz;
