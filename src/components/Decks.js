import React, { Component } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
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
    const { navigation } = this.props;
    this.getAllDecks();

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollView
          style={{
            flex: 1,
          }}
        >
          {this.state.decks ? (
            Object.keys(this.state.decks).map((deck) => (
              <View key={this.state.decks[deck].title}>
                <Button
                  text={
                    this.state.decks[deck].title +
                    ` (` +
                    this.state.decks[deck].questions.length +
                    (this.state.decks[deck].questions.length === 1
                      ? ` card)`
                      : ` cards)`)
                  }
                  color={mint}
                  bgcolor={purple}
                  onPress={() =>
                    navigation.navigate("DeckView", {
                      deck: this.state.decks[deck],
                    })
                  }
                />
              </View>
            ))
          ) : (
            <Text style={{ color: "black" }}>Loading...</Text>
          )}
          <Button
            text="Add Deck"
            bgcolor={mint}
            onPress={() =>
              navigation.navigate("AddDeck", { decks: this.state.decks })
            }
          />
        </ScrollView>
      </View>
    );
  }
}

export default Decks;
