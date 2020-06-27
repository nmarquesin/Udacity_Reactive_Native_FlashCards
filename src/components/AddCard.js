import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { addCardToDeck } from "../utils/_DATA";
import { mint, purple, white } from "../utils/colors";

import Button from "./Button";

class AddCard extends Component {
  state = {
    question: "",
    answer: true,
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
        test: "Here we go, baby",
      }));
    }

    const card = {
      question: question,
      answer: answer,
    };
    const deckId = deck.title;

    addCardToDeck(card, deckId);

    navigation.goBack();
  };
  render() {
    const { route } = this.props;
    const { deck } = route.params;
    const valueq = this.state.question;
    const valuea = this.state.answer;
    return (
      <View>
        <Text>{deck.title} deck</Text>
        <Text key={deck.title + "s"}>
          ({deck.questions.length}{" "}
          {deck.questions.length !== 1 ? "cards" : "card"})
        </Text>
        <Text>Question:</Text>
        <TextInput
          style={{ backgroundColor: mint }}
          value={valueq}
          id="question"
          onChangeText={(text) => this.onChangeQuestion(text)}
        />
        <Text>Answer:</Text>

        <TextInput
          style={{ backgroundColor: mint }}
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
      </View>
    );
  }
}

export default AddCard;
