import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "./Button";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import {
  mint,
  peach,
  pink,
  aqua,
  brown,
  purple,
  white,
  oldPink,
} from "../utils/colors";

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
      <View style={styles.container}>
        {currCard !== deck.questions.length ? (
          <View>
            {showAnswer ? (
              <View style={styles.container}>
                <Answer
                  answer={deck.questions[currCard].answer}
                  cardsLeft={deck.questions.length - (currCard + 1)}
                />
                <Button
                  text="Correct"
                  bgcolor={mint}
                  color={brown}
                  onPress={() => this.saveAnswer(0)}
                />
                <Button
                  text="Incorrect"
                  bgcolor={peach}
                  color={white}
                  onPress={() => this.saveAnswer(1)}
                />
                <Button
                  text="back to question"
                  color={brown}
                  onPress={() => this.handleShowAnswer()}
                />
              </View>
            ) : (
              <View style={styles.container}>
                <Question
                  question={deck.questions[currCard].question}
                  cardsLeft={deck.questions.length - (currCard + 1)}
                />
                <Button
                  text="view answer"
                  bgcolor={pink}
                  color={white}
                  onPress={() => this.handleShowAnswer()}
                />
              </View>
            )}
          </View>
        ) : (
          <View>
            <Text style={styles.endOf}>End of Quiz</Text>
            <Text style={styles.score}>
              Score:{" "}
              {Math.round(
                ((deck.questions.length - this.state.wrongAnswers) /
                  deck.questions.length) *
                  100
              )}
              %
            </Text>
            <Button
              text="Restart Quiz"
              color={white}
              bgcolor={purple}
              onPress={() => {
                this.resetState();
              }}
            />
            <Button
              text="Back to Deck"
              color={white}
              bgcolor={purple}
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
    <View>
      <Text style={styles.cards}>cards left: {cardsLeft}</Text>
      <Text style={styles.q}>question</Text>
      <Text style={styles.qText}>{question}</Text>
    </View>
  );
};

const Answer = (props) => {
  const { answer, cardsLeft } = props;
  return (
    <View>
      <Text style={styles.cards}>cards left: {cardsLeft}</Text>
      <Text style={styles.a}>answer</Text>
      <Text style={styles.aText}>{answer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  qText: {
    fontSize: 28,
    fontWeight: "bold",
    color: peach,
    textAlign: "center",
    marginBottom: 40,
  },
  q: {
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
    color: pink,
  },
  aText: {
    fontSize: 28,
    fontWeight: "bold",
    color: aqua,
    textAlign: "center",
    marginBottom: 40,
  },
  a: {
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
    color: aqua,
  },
  cards: {
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
    color: pink,
    marginBottom: 50,
    marginTop: -50,
  },
  score: {
    fontSize: 40,
    fontWeight: "bold",
    color: purple,
    textAlign: "center",
    marginBottom: 40,
  },
  endOf: {
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
    color: purple,
  },
});

export default Quiz;
