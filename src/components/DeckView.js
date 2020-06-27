import React from "react";
import { Text, View } from "react-native";
import { mint, peach } from "../utils/colors";

import Button from "./Button";

const DeckView = (props) => {
  const { deck } = props;

  return (
    <View>
      <View>
        <Text>DeckName</Text>
        <Text>No. of cards</Text>
      </View>
      <View />
      <Button text="Add Card" bgcolor={peach} />
      <View />
      {1 > 0 ? <Button text="Start Quiz" bgcolor={mint} /> : ""}
    </View>
  );
};

export default DeckView;
