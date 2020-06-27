import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Decks from "./src/components/Decks";
import AddDeck from "./src/components/AddDeck";
import AddCard from "./src/components/AddCard";
import DeckView from "./src/components/DeckView";
import Quiz from "./src/components/Quiz";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Decks">
        <Stack.Screen name="Decks" component={Decks} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="AddDeck" component={AddDeck} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="DeckView" component={DeckView} />
      </Stack.Navigator>
      {/* <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      > */}
      {/* <Quiz /> */}
      {/* <DeckView /> */}
      {/* <AddDeck /> */}
      {/* <AddCard /> */}
      {/* </View> */}
    </NavigationContainer>
  );
}

export default App;
