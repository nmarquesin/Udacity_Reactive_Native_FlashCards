import React, { Component } from "react";
import { View, Text } from "react-native";
import { getDeck } from "../utils/_DATA";
import { mint, purple, white } from "../utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SelectField from "./SelectField";
import TextInput from "./TextInput";
import Button from "./Button";

// function SubmitBtn ({ onPress }) {
//     return(

//     )
// }

class AddCard extends Component {
  state = {
    question: "test",
    answer: "test",
    test: "test",
    // type: "",
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
  handleSaveQuestion = () => {
    const { question, answer } = this.state;
    if (question !== "" && answer !== "") {
      console.log("Question saved.");
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
  //   handleSelectType = (value) => {
  //     this.setState((state) => {
  //       return {
  //         ...state,
  //         type: value,
  //       };
  //     });
  //   };
  render() {
    const deck = getDeck("Redux");
    // console.log("This is the deck: ", deck);
    const valueq = this.state["question"];
    const valuea = this.state["answer"];
    return (
      <View>
        <Text>{deck.title}</Text>
        <Text key={deck.title + "s"}>
          ({deck.questions.length}{" "}
          {deck.questions.length !== 1 ? "cards" : "card"})
        </Text>
        <Text>Question:</Text>
        <TextInput
          valueq={valueq}
          onChange={(valueq) => this.updateValue(valueq, "question")}
        />
        <Text>Correct Answer:</Text>
        {deck.type === "True or False" ? (
          <SelectField
            valuea={valuea}
            onChange={(valuea) => this.updateValue(valuea, "answer")}
          />
        ) : (
          <TextInput
            valuea={valuea}
            onChange={(valuea) => this.updateValue(valuea, "answer")}
          />
        )}
        <Button
          text="Submit"
          bgcolor={purple}
          color={white}
          onPress={this.handleSaveQuestion}
        />
        <Text>{this.state.test}</Text>
        {/* <Text>
          <MaterialCommunityIcons name="cards" color="purple" size={100} />
        </Text> */}
      </View>
    );
  }
}

export default AddCard;
