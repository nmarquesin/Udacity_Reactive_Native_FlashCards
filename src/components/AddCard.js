import React, { Component } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { addCardToDeck, getDecks } from "../utils/_DATA";
import { pink, purple, white } from "../utils/colors";
import Button from "./Button";

class AddCard extends Component {
  state = {
    question: "",
    answer: "",
    deck: {},
  };
  updateValue = (value, valueName) => {
    if (this.state.type !== "") {
      this.setState((state) => {
        return {
          ...state,
          [valueName]: value,
        };
      });
    }
  };
  onChangeQuestion = (value) => {
    if (this.state.type !== "") {
      this.setState((state) => {
        return {
          ...state,
          question: value,
        };
      });
    }
  };
  onChangeAnswer = (value) => {
    if (this.state.type !== "") {
      this.setState((state) => {
        return {
          ...state,
          answer: value,
        };
      });
    }
  };
  handleSaveQuestion = () => {
    const { question, answer } = this.state;
    const { navigation, route } = this.props;
    const { deck } = route.params;
    if (question !== "" && answer !== "") {
      this.setState(() => ({
        question: "",
        answer: "",
      }));
      const card = {
        question: question,
        answer: answer,
      };
      const deckId = deck.title;
      addCardToDeck(card, deckId);
      navigation.navigate("DeckView", {
        deck: {
          questions: [
            ...deck.questions,
            {
              answer: answer,
              question: question,
            },
          ],
          title: deck.title,
        },
      });
    } else if (question === "") {
      alert("Oops! It looks like you forgot to add a question...");
    } else {
      alert("Oops! It looks like you forgot to add an answer...");
    }
  };
  render() {
    const { route } = this.props;
    const { deck } = route.params;
    const valueq = this.state.question;
    const valuea = this.state.answer;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.deckName}>{deck.title} deck</Text>
        <Text key={deck.title + "s"} style={styles.nCards}>
          ({deck.questions.length}{" "}
          {deck.questions.length !== 1 ? "cards" : "card"})
        </Text>
        <Text>Question:</Text>
        <TextInput
          placeholder="Enter question"
          style={styles.input}
          value={valueq}
          id="question"
          onChangeText={(text) => this.onChangeQuestion(text)}
        />
        <Text>Answer:</Text>
        <TextInput
          placeholder="Enter answer"
          style={styles.input}
          value={valuea}
          id="answer"
          onChangeText={(text) => this.onChangeAnswer(text)}
        />
        <Button
          text="Submit"
          bgcolor={purple}
          color={white}
          onPress={this.handleSaveQuestion}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  deckName: {
    fontSize: 28,
    fontWeight: "bold",
    color: purple,
    textAlign: "center",
    margin: 10,
  },
  nCards: {
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 20,
    color: pink,
  },
  input: {
    width: 300,
    backgroundColor: white,
    padding: 10,
    margin: 10,
  },
});

export default AddCard;
