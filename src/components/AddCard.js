import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { getDeck } from "../utils/_DATA";
import { mint, purple, white } from "../utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "react-native";

import Button from "./Button";

class AddCard extends Component {
  state = {
    question: "",
    answer: true,
    test: "test",
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
    if (question !== "" && answer !== "") {
      console.log("Question saved.");
      console.log("New Question =", question);
      console.log("New Answer =", answer);
      this.setState(() => ({
        question: "",
        answer: "",
        test: "Here we go, baby",
      }));
    }
    // Update Redux

    // Navigate to Home

    // Save to DB
  };
  render() {
    const deck = getDeck("Redux");
    const valueq = this.state.question;
    const valuea = this.state.answer;
    return (
      <View>
        <Text>{deck.title}</Text>
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
        <Text>Correct Answer:</Text>
        {deck.type === "True or False" ? (
          <Picker
            selectedValue={this.state.answer}
            // style={{ height: 50, width: 100 }}
            onValueChange={(itemValue) => this.setState({ answer: itemValue })}
          >
            <Picker.Item label="True" value={true} />
            <Picker.Item label="False" value={false} />
          </Picker>
        ) : (
          // <SelectField
          //   valuea={valuea}
          //   onChange={(valuea) => this.updateValue(valuea, "answer")}
          // />
          <TextInput
            style={{ backgroundColor: mint }}
            value={valuea}
            id="answer"
            onChangeText={(text) => this.onChangeAnswer(text)}
          />
        )}
        <Button
          text="Submit"
          bgcolor={purple}
          color={white}
          onPress={this.handleSaveQuestion}
        />
        {/* <Text>
          <MaterialCommunityIcons name="cards" color="purple" size={100} />
        </Text> */}
      </View>
    );
  }
}

export default AddCard;
