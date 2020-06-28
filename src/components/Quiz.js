import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "./Button";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import { mint, peach, pink, aqua, brown, purple, white } from "../utils/colors";

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
  handleSaveAnswer = (ans) => {
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
              <Answer
                answer={deck.questions[currCard].answer}
                cardsLeft={deck.questions.length - (currCard + 1)}
                saveAnswer={this.handleSaveAnswer}
                showAnswer={this.handleShowAnswer}
              />
            ) : (
              <Question
                question={deck.questions[currCard].question}
                cardsLeft={deck.questions.length - (currCard + 1)}
                showAnswer={this.handleShowAnswer}
              />
            )}
          </View>
        ) : (
          <EndOfQuiz
            totalQ={deck.questions.length}
            wrogQ={this.state.wrongAnswers}
            resetState={this.resetState}
            navigation={navigation}
            deck={deck}
          />
        )}
      </View>
    );
  }
}

const EndOfQuiz = ({ totalQ, wrogQ, resetState, navigation, deck }) => {
  clearLocalNotification().then(setLocalNotification());
  return (
    <View>
      <Text style={styles.endOf}>End of Quiz</Text>
      <Text style={styles.score}>
        Score: {Math.round(((totalQ - wrogQ) / totalQ) * 100)}%
      </Text>
      <Button
        text="Restart Quiz"
        color={white}
        bgcolor={purple}
        onPress={() => {
          resetState();
        }}
      />
      <Button
        text="Back to Deck"
        color={white}
        bgcolor={purple}
        onPress={() => {
          navigation.navigate("DeckView", { deck: deck });
        }}
      />
    </View>
  );
};

const Question = ({ question, cardsLeft, showAnswer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cards}>cards left: {cardsLeft}</Text>
      <Text style={styles.q}>question</Text>
      <Text style={styles.qText}>{question}</Text>
      <Button
        text="view answer"
        bgcolor={pink}
        color={white}
        onPress={() => showAnswer()}
      />
    </View>
  );
};

const Answer = ({ answer, cardsLeft, saveAnswer, showAnswer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cards}>cards left: {cardsLeft}</Text>
      <Text style={styles.a}>answer</Text>
      <Text style={styles.aText}>{answer}</Text>
      <Button
        text="Correct"
        bgcolor={mint}
        color={brown}
        onPress={() => saveAnswer(0)}
      />
      <Button
        text="Incorrect"
        bgcolor={peach}
        color={white}
        onPress={() => saveAnswer(1)}
      />
      <Button
        text="back to question"
        color={brown}
        onPress={() => showAnswer()}
      />
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
