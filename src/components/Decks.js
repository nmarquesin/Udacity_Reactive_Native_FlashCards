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
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <ScrollView
          style={{
            flex: 1,
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          {this.state.decks ? (
            Object.keys(this.state.decks).map((deck) => (
              <View
                style={{
                  borderWidth: "3px",
                  borderStyle: "solid",
                  borderColor: mint,
                  // backgroundColor: purple,
                }}
              >
                <Button
                  text={this.state.decks[deck].title}
                  color={mint}
                  bgcolor={purple}
                  onPress={() =>
                    navigation.navigate("DeckView", {
                      deck: this.state.decks[deck],
                    })
                  }
                />
                {/* <Text
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
              </Text> */}
              </View>
            ))
          ) : (
            <Text style={{ color: "black" }}>Loading...</Text>
          )}
          <Button
            text="Add Deck"
            bgcolor={mint}
            onPress={() => navigation.navigate("AddDeck")}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Decks;
