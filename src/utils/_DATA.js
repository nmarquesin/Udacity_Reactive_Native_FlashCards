import { AsyncStorage } from "react-native";

let decks = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
  Redux: {
    title: "Redux",
    questions: [
      {
        question: "Is Redux a predictable state container for JavaScript apps?",
        answer: "Yes",
      },
    ],
  },
};

AsyncStorage.setItem("DECKS", JSON.stringify(decks));

export function getDecks() {
  return AsyncStorage.getItem("DECKS");
}
export function saveDeckTitle(deckTitle) {
  let new_deck = {
    [deckTitle]: {
      title: deckTitle,
      questions: [],
    },
  };
  AsyncStorage.mergeItem("DECKS", JSON.stringify(new_deck)).then((res) => {
    getDecks().then((res) => {
      return JSON.parse(res);
    });
  });
}
export function addCardToDeck(card, deckId) {
  let deck;
  let decks;
  getDecks().then((res) => {
    decks = JSON.parse(res);
    deck = decks[deckId];
    deck.questions.push(card);

    Object.keys(decks).forEach((key) => {
      if (decks[key] === deck.title) {
        decks[key] = deck;
      }

      AsyncStorage.removeItem("DECKS").then(() => {
        AsyncStorage.setItem("DECKS", JSON.stringify(decks));
      });
    });
  });
}
