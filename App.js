import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Decks from "./src/components/Decks";
import AddDeck from "./src/components/AddDeck";
import AddCard from "./src/components/AddCard";
import DeckView from "./src/components/DeckView";
import Quiz from "./src/components/Quiz";
import { setLocalNotification } from "./src/utils/helpers";
import * as Permissions from "expo-permissions";

const Stack = createStackNavigator();

class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Decks">
          <Stack.Screen
            name="Decks"
            component={Decks}
            options={{ title: "Home" }}
          />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen
            name="AddDeck"
            component={AddDeck}
            options={{ title: "Create a New Deck" }}
          />
          <Stack.Screen
            name="AddCard"
            component={AddCard}
            options={{ title: "Add a new card" }}
          />
          <Stack.Screen
            name="DeckView"
            component={DeckView}
            options={{ title: "Deck View" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
