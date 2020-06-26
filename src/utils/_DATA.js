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
    type: "Long anwsers",
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
    type: "Long anwsers",
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

// getDecks: return all of the decks along with their titles, questions, and answers.
export function getDecks() {
  return decks;
}
// getDeck: take in a single id argument and return the deck associated with that id.
export function getDeck(deck) {
  return decks[deck];
}
// saveDeckTitle: take in a single title argument and add it to the decks.
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
