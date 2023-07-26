//created classes to to pull from for the things needed for the game to run such as Card, Deck, and Player and made functions that any dealer would use in an actual game

class Card {
  constructor(face,suit) {
    this.face = face;
    this.suit = suit;
  }
}

class Deck {
  constructor() {
    this.cards = [];
  }
  
  //This creates the cards used in the game.
  createDeck() {
    const suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (const suit of suits) {
      for (const face of faces) {
        this.cards.push(new Card(face,suit));
      }
    }
  }
  //This randomizes the cards.
  shuffle() {
    for( let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  
  //Code here distributes cards to the players.
  dealCard() {
    return this.cards.pop();
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.score = 0;
  }
}

//Code here brings the cards and players into play.
function playWarGame() {
  const player1 = new Player('General #1');
  const player2 = new Player('General #2');
  const deck = new Deck();

  deck.createDeck();
  deck.shuffle();

  //Code deals out cards to the players.
  for (let i = 0; i < 26; i++) {
    player1.hand.push(deck.dealCard());
    player2.hand.push(deck.dealCard());
  }

  //Code determines how many rounds will be played.
  for (let i = 1; i < 26; i++) {
    const card1 = player1.hand[i - 1];
    const card2 = player2.hand[i - 1];

  //Code has players play cards.
  console.log(`${player1.name} plays a ${card1.face} of ${card1.suit}`);
  console.log(`${player2.name} plays a ${card2.face} of ${card2.suit}`);

  const value1 = getCardValue(card1);
  const value2 = getCardValue(card2);

  //Determines winner of the round.
  if (value1 > value2) {
    player1.score++;
    console.log(`${player1.name} wins!\n`);

  } else if (value1 < value2) {
    player2.score++;
    console.log(`${player2.name} wins!\n`);

  } else {
    console.log("It's a stalemate...\n");
  }
}

 // This is the score displayed at the end of the game and announces winner.
console.log(`${player1.name}'s score: ${player1.score}`);
console.log(`${player2.name}'s score: ${player2.score}`);

if (player1.score > player2.score) {
  console.log(`${player1.name} wins the battle!`);

} else if (player1.score < player2.score) {
  console.log(`${player2.name} wins the battle!`);

} else {
  console.log("It's a draw!");
  }
}

//This determines the winner of the round
const getCardValue = (card) => {
  const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return values[faces.indexOf(card.face)];
  }

//War game start
playWarGame();

let expect = chai.expect;

describe('MyFunctions', function() {
  describe('#createDeck', function() {
    it('should concatenate suits and faces', function() {
      let x = createDeck('Hearts', '2');
      expect(x).to.equal('Hearts2');
    });
  });
});