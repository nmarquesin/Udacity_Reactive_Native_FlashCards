import React from "react";
import { Text, View } from "react-native";
import { mint, peach } from "../utils/colors";

import Button from "./Button";

const DeckView = ({ route, navigation }) => {
  const { deck } = route.params;
  return (
    <View>
      <View>
        <Text>Deck: {deck.title}</Text>
        <Text>Number of cards: {deck.questions.length}</Text>
      </View>
      <View />
      <Button
        text="Add Card"
        bgcolor={peach}
        onPress={() =>
          navigation.navigate("AddCard", {
            deck: deck,
          })
        }
      />
      <View />
      {deck.questions.length > 0 ? (
        <Button
          text="Start Quiz"
          bgcolor={mint}
          onPress={() => navigation.navigate("Quiz", { deck: deck })}
        />
      ) : (
        <View />
      )}
    </View>
  );
};

export default DeckView;
