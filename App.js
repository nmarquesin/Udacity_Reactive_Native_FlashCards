import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Decks from "./src/components/Decks";
import AddDeck from "./src/components/AddDeck";
import AddCard from "./src/components/AddCard";
import DeckView from "./src/components/DeckView";
import Quiz from "./src/components/Quiz";
import { setLocalNotification } from "./src/utils/helpers";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

const Stack = createStackNavigator();

class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
    Permissions.askAsync(Permissions.NOTIFICATIONS);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Decks">
          <Stack.Screen name="Decks" component={Decks} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="AddDeck" component={AddDeck} />
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen name="DeckView" component={DeckView} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
