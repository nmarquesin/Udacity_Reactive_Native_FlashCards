import React, { Component } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { saveDeckTitle, getDecks } from "../utils/_DATA";
import { purple, white } from "../utils/colors";
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
    } else {
      alert("Oops! It looks like your forgot to add a title...");
    }
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.q}>Deck title:</Text>
        <TextInput
          placeholder="Enter a unique deck title"
          style={styles.input}
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
  input: {
    width: 300,
    backgroundColor: white,
    padding: 10,
    margin: 10,
  },
  q: {
    fontSize: 16,
    textAlign: "center",
    color: purple,
  },
});

export default AddDeck;
