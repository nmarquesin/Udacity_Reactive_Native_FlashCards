import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { getDeck, saveDeckTitle, getDecks } from "../utils/_DATA";
import { mint, purple, white } from "../utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "react-native";

import Button from "./Button";

class AddDeck extends Component {
  state = {
    title: "",
    type: "True or False",
  };

  onChangeTitle = (value) => {
    if (this.state.type !== "") {
      this.setState((state) => {
        return {
          ...state,
          title: value,
        };
      });
    }
  };

  handleSaveDeck = () => {
    const { title, type } = this.state;
    if (title !== "") {
      console.log("Deck saved.");
      console.log("New deck =", title);
      console.log("Deck type =", type);
      // Save to DB
      saveDeckTitle(title, type);

      this.setState(() => ({
        title: "",
        type: "True or False",
      }));
    }
    // Update Redux

    // Navigate to Home
  };
  render() {
    return (
      <View>
        <Text>Deck title:</Text>
        <TextInput
          style={{ backgroundColor: mint }}
          value={this.state.title}
          id="question"
          onChangeText={(text) => this.onChangeTitle(text)}
        />
        <Text>Quiz type:</Text>

        <Picker
          style={{ backgroundColor: mint }}
          selectedValue={this.state.type}
          onValueChange={(itemValue) => this.setState({ type: itemValue })}
        >
          <Picker.Item label="True or False Answers" value={true} />
          <Picker.Item label="Statement Answers" value={false} />
        </Picker>

        <Button
          text="Submit"
          bgcolor={purple}
          color={white}
          onPress={this.handleSaveDeck}
        />
        {/* <Text>
          <MaterialCommunityIcons name="cards" color="purple" size={100} />
        </Text> */}
      </View>
    );
  }
}

export default AddDeck;
