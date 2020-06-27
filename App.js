import * as React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Decks from "./src/components/Decks";
import AddDeck from "./src/components/AddDeck";
import AddCard from "./src/components/AddCard";
import DeckView from "./src/components/DeckView";

class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DeckView />
        {/* <AddDeck /> */}
        {/* <AddCard /> */}
      </View>
    );
  }
}

export default App;
