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
    type: "Statement Anwsers",
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
    type: "Statement Anwsers",
  },
  Redux: {
    title: "Redux",
    questions: [
      {
        question:
          "Is Redux a predictable state container for JavaScript apps.?",
        answer: true,
      },
    ],
    type: "True or False",
  },
};

// _storeData = async () => {
//   try {
//     await AsyncStorage.setItem("decks", JSON.stringify(decks));
//   } catch (error) {
//     // Error saving data
//   }
// };

AsyncStorage.setItem("DECKS", JSON.stringify(decks));

// getDecks: return all of the decks along with their titles, questions, and answers.
export function getDecks() {
  // return decks;
  // let decks = {};
  // await AsyncStorage.getItem("DECKS", (err, result) => {
  //   // console.log("This is the result", Object.keys(JSON.parse(result)));
  //   decks = JSON.parse(result);
  // });
  // // console.log("This is the DECKS", decks);
  // return decks;

  return AsyncStorage.getItem("DECKS");
}
// getDeck: take in a single id argument and return the deck associated with that id.
export function getDeck(id) {
  return decks[id];
}
// saveDeckTitle: take in a single title argument and add it to the decks.
export function saveDeckTitle(deckTitle, deckType) {
  let new_deck = {
    [deckTitle]: {
      title: deckTitle,
      questions: [],
      type: deckType,
    },
  };
  AsyncStorage.mergeItem("DECKS", JSON.stringify(new_deck)).then((res) => {
    getDecks().then((res) => {
      console.log("the new deck list : ", JSON.parse(res));
      return JSON.parse(res);
    });
  });
}
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck(card, deck) {
  AsyncStorage.getItem();
}
