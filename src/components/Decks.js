import React, { Component } from "react";
import { View, Text } from "react-native";
import { getDecks } from "../utils/_DATA";
import { mint, purple } from "../utils/colors";

class Decks extends Component {
  state = {};
  decks = getDecks();
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          //   borderWidth: "1px",
          //   borderStyle: "solid",
          //   borderColor: "green",
        }}
      >
        {Object.keys(this.decks).map((deck) => (
          <View
            style={{
              borderWidth: "3px",
              borderStyle: "solid",
              borderColor: mint,
              backgroundColor: purple,
            }}
          >
            <Text
              key={deck}
              style={{
                color: mint,
              }}
            >
              {deck}
            </Text>
          </View>
        ))}
      </View>
    );
  }
}

export default Decks;
