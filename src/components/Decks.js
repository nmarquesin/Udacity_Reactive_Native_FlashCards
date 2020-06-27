import React, { Component } from "react";
import { View, Text } from "react-native";
import { getDecks } from "../utils/_DATA";
import { mint, purple } from "../utils/colors";
import Button from "./Button";

class Decks extends Component {
  state = {
    decks: {},
  };
  getAllDecks = () => {
    let decks;
    getDecks().then((res) => {
      decks = JSON.parse(res);
      this.setState({
        decks: decks,
      });
    });
  };

  render() {
    this.getAllDecks();

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {this.state.decks ? (
          Object.keys(this.state.decks).map((deck) => (
            <View
              style={{
                borderWidth: "3px",
                borderStyle: "solid",
                borderColor: mint,
                backgroundColor: purple,
              }}
            >
              <Text
                style={{
                  color: mint,
                }}
              >
                {this.state.decks[deck].title}
              </Text>
              <Text
                style={{
                  color: mint,
                }}
              >
                {this.state.decks[deck].questions.length}
              </Text>
            </View>
          ))
        ) : (
          <Text style={{ color: "black" }}>Loading...</Text>
        )}
        <Button text="Add Deck" bgcolor={mint} />
      </View>
    );
  }
}

export default Decks;
