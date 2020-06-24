import * as React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Decks from "./src/components/Decks";

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
        <Decks></Decks>
        {/* <MaterialCommunityIcons name="cards" color="purple" size={100} />
        <Text>Flash Cards!</Text> */}
      </View>
    );
  }
}

export default App;
