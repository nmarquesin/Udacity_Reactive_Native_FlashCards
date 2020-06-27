import React from "react";
import { Text, View } from "react-native";
import { mint, peach } from "../utils/colors";

import Button from "./Button";

const DeckView = ({ route, navigation }) => {
  const { deck } = route.params;
  //   console.log("Logging deck ===> ", deck);
  return (
    <View>
      <View>
        <Text>DeckName: {deck.title}</Text>
        <Text>No. of cards: {deck.questions.length}</Text>
      </View>
      <View />
      <Button
        text="Add Card"
        bgcolor={peach}
        onPress={() => navigation.navigate("AddCard")}
      />
      <View />
      {deck.questions.length > 0 ? (
        <Button
          text="Start Quiz"
          bgcolor={mint}
          onPress={() => navigation.navigate("Quiz")}
        />
      ) : (
        <View />
      )}
    </View>
  );
};

export default DeckView;
