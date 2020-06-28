import React, { useRef } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";
import { mint, peach } from "../utils/colors";
import Button from "./Button";

const DeckView = ({ route, navigation }) => {
  const { deck } = route.params;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const pos = useRef(new Animated.Value(200)).current;
  const opPos = useRef(new Animated.Value(-200)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
    Animated.spring(pos, {
      toValue: 0,
      speed: 1,
    }).start();
  };
  const fadeInOp = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
    Animated.spring(opPos, {
      toValue: 0,
      speed: 1,
    }).start();
  };

  fadeIn();
  fadeInOp();
  return (
    <View
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <View>
        <Text>Deck: {deck.title}</Text>
        <Text>Number of cards: {deck.questions.length}</Text>
      </View>
      <View />
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
            marginLeft: pos, // Bind opacity to animated value
          },
        ]}
      >
        <Button
          text="Add Card"
          bgcolor={peach}
          onPress={() =>
            navigation.navigate("AddCard", {
              deck: deck,
            })
          }
        />
      </Animated.View>
      <View />
      {deck.questions.length > 0 ? (
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
              marginLeft: opPos, // Bind opacity to animated value
            },
          ]}
        >
          <Button
            text="Start Quiz"
            bgcolor={mint}
            onPress={() => navigation.navigate("Quiz", { deck: deck })}
          />
        </Animated.View>
      ) : (
        <View />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    paddingVertical: 8,
    // paddingHorizontal: 16,
    // marginLeft: 20,
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16,
  },
});

export default DeckView;
