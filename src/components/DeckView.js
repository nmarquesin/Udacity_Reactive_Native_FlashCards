import React, { useRef, Component } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";
import { mint, peach, aqua, brown, pink } from "../utils/colors";
import Button from "./Button";

const DeckView = ({ navigation, route }) => {
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
    <View style={styles.container}>
      <View>
        <Text style={styles.deckName}>{deck.title} Deck</Text>
        <Text style={styles.nCards}>
          ({deck.questions.length}{" "}
          {deck.questions.length === 1 ? "card" : "cards"})
        </Text>
      </View>
      <View />
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
            marginLeft: pos,
          },
        ]}
      >
        <Button
          text="Add Card"
          bgcolor={mint}
          color={brown}
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
            bgcolor={aqua}
            color={brown}
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
  },
  deckName: {
    fontSize: 28,
    fontWeight: "bold",
    color: peach,
    textAlign: "center",
    margin: 10,
  },
  nCards: {
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 20,
    color: pink,
  },
});

export default DeckView;
