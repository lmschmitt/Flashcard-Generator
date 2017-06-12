// This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: module.exports = BasicCard;
// The constructor should accept two arguments: front and back.
// The constructed object should have a front property that contains the text on the front of the card.
// The constructed object should have a back property that contains the text on the back of the card.

//Constructor for basic cards

var inquirer = require("inquirer");
var cards = []
var cardCount = 0


var inquirer = require("inquirer");
var cards = []
var cardCount = 0

function BasicCard(front, back) {
	this.front = front
	this.back = back
}

var card1 = new BasicCard("How awesome is this?", "very");
var card2 = new BasicCard("Are you sure?", "yes")

cards.push(card1);
cards.push(card2);


function playCards() {
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "question",
                        type: "input",
						message: cards[cardCount].front
					}
				]).then(function(answer) {

					if((answer.question).toLowerCase() === cards[cardCount].back) {
						console.log("correct");
						cardCount ++
						playCards();
					} 
					else {
						console.log("nope");
						console.log("Correct Answer is:  " + cards[cardCount].back);
						cardCount ++
						playCards();
					}

				});

	}


}

playCards();

module.exports = BasicCard;