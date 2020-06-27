import React from "react";
import { Text, View } from "react-native";
import Button from "./Button";

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

const Question = () => {
  const { question, cards, card, type } = props;
  return (
    <View>
      <Text>Question: {question}</Text>
      <Button text="view answer" />
      <Text>Cards Left: {cards - card}</Text>
    </View>
  );
};

const Answer = () => {
  const { answer, cards, card, type } = props;
  return (
    <View>
      <Text>Answer: {answer}</Text>
      <Button text="back" />
      <Button text="Correct" />
      <Button text="Incorrect" />
      <Button text="Next Question" />
      <Text>Cards Left: {cards - card}</Text>
    </View>
  );
};

const QuizEnd = () => {
  return <Text>End of Quiz</Text>;
};

export default Quiz;
