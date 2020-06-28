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
  };

  onChangeTitle = (value) => {
    this.setState((state) => {
      return {
        ...state,
        title: value,
      };
    });
  };

  handleSaveDeck = () => {
    const { title } = this.state;
    const { navigation, route } = this.props;
    const { decks } = route.params;
    const existingDecks = Object.keys(decks).map((t) => t.toLowerCase());
    if (existingDecks.includes(title.toLowerCase())) {
      alert(
        "A Deck with this title already exists. Please choose an unique title."
      );
      this.setState(() => ({
        title: "",
      }));
      return;
    }

    if (title !== "") {
      saveDeckTitle(title);
      this.setState(() => ({
        title: "",
      }));
      let newDecks;
      getDecks().then((res) => {
        newDecks = JSON.parse(res);
        navigation.navigate("DeckView", { deck: newDecks[title] });
      });
    }
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

        <Button
          text="Create Deck"
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
