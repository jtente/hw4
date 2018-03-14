
let dealCards = function() {
  let deck = shuffledDeckOfCards()
  let allImages = jQuery("#cards img")
  for (let image of allImages) {
    let card = deck.shift();
    jQuery(image).attr("src", "cards/" + card.face + "_of_" + card.suit + ".png")
  }
}

let shuffledDeckOfCards = function() {
  let faces = [ 'ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']
  let suits = ['hearts', 'spades', 'clubs', 'diamonds']

  let deck = [];
  for (let x = 0; x < faces.length; x++) {
    for (let y = 0; y < suits.length; y++) {
      deck.push({ face: faces[x], suit: suits[y]});
    };
  };

  let currentIndex = deck.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }
  return deck;
}

let cardsLink = document.getElementById("deal_cards")
cardsLink.addEventListener("click", dealCards);
