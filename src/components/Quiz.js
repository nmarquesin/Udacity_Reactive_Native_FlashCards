import React, { Component } from "react";
import { Text, View } from "react-native";
import Button from "./Button";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import { mint, peach } from "../utils/colors";

class Quiz extends Component {
  state = {
    currCard: 0,
    wrongAnswers: 0,
    showAnswer: false,
  };

  handleShowAnswer = () => {
    const prevState = this.state.showAnswer;
    this.setState(() => ({
      showAnswer: !prevState,
    }));
  };
  handleNextQuestion = () => {
    const lastCard = this.state.currCard;
    this.setState(() => ({
      currCard: lastCard + 1,
      showAnswer: false,
    }));
  };
  saveAnswer = (ans) => {
    const { route } = this.props;
    const { deck } = route.params;
    const lastCard = this.state.currCard;
    const wrongAns = this.state.wrongAnswers;
    this.setState(() => ({
      currCard: lastCard + 1,
      showAnswer: false,
      wrongAnswers: wrongAns + ans,
    }));
  };
  resetState = () => {
    this.setState(() => ({
      currCard: 0,
      wrongAnswers: 0,
      showAnswer: false,
    }));
    clearLocalNotification().then(setLocalNotification());
  };
  render() {
    const { navigation, route } = this.props;
    const { deck } = route.params;
    const { currCard, showAnswer } = this.state;
    return (
      <View>
        {currCard !== deck.questions.length ? (
          <View>
            {showAnswer ? (
              <View>
                <Answer
                  answer={deck.questions[currCard].answer}
                  cardsLeft={deck.questions.length - (currCard + 1)}
                />
                <Button text="Correct" onPress={() => this.saveAnswer(0)} />
                <Button text="Incorrect" onPress={() => this.saveAnswer(1)} />
                <Button
                  text="back to question"
                  onPress={() => this.handleShowAnswer()}
                />
              </View>
            ) : (
              <View>
                <Question
                  question={deck.questions[currCard].question}
                  cardsLeft={deck.questions.length - (currCard + 1)}
                />
                <Button
                  text="view answer"
                  onPress={() => this.handleShowAnswer()}
                />
              </View>
            )}
          </View>
        ) : (
          <View>
            <Text>End of Quiz</Text>
            <Text>
              Score:{" "}
              {((deck.questions.length - this.state.wrongAnswers) /
                deck.questions.length) *
                100}
            </Text>
            <Button
              text="Restart Quiz"
              onPress={() => {
                this.resetState();
              }}
            />
            <Button
              text="Back to Deck"
              onPress={() => {
                clearLocalNotification().then(setLocalNotification());
                navigation.navigate("DeckView", { deck: deck });
              }}
            />
          </View>
        )}
      </View>
    );
  }
}

const Question = (props) => {
  const { question, cardsLeft } = props;
  return (
    <View style={{ backgroundColor: peach }}>
      <Text>Question: {question}</Text>

      <Text>Cards Left: {cardsLeft}</Text>
    </View>
  );
};

const Answer = (props) => {
  const { answer, cardsLeft } = props;
  return (
    <View style={{ backgroundColor: mint }}>
      <Text>Answer: {answer}</Text>
      <Text>Cards Left: {cardsLeft}</Text>
    </View>
  );
};

export default Quiz;
