// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
// The constructor should accept two arguments: text and cloze.
// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
// The constructed object should have a partial property that contains only the partial text.
// The constructed object should have a fullText property that contains only the full text.
// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.



var inquirer = require("inquirer");
var cards = [];
var cardCount = 0;
var clozeText


function ClozeCard(text, cloze) {
	this.text = text;
    //gives us an array called positions with positions of deleted portion of text
    var positions = findClozePositions(text, cloze);
    //slice the text at the positions from the array and return as this.cloze
    this.cloze = text.slice(positions[0],positions[1]);
    console.log(text.indexOf(cloze));
    this.partialText = textWithoutCloze(text, cloze);

    function textWithoutCloze (text, cloze){
        var textBeforeCloze = text.slice(0, positions[0]);
        var textAfterCloze = text.slice(positions[1], text.length);
        return textBeforeCloze + "______" + textAfterCloze;
    }
    console.log(this.partialText);
}


function findClozePositions (text, cloze) {
    var firstLetter = text.indexOf(cloze);
            // console.log(firstLetter);
    if (firstLetter !== -1) {
        return [firstLetter, firstLetter + cloze.length];
    } else {
        console.log("cloze is not in text");
    }
}    


// ClozeCard.prototype.full = function() {
// 	clozeDeleted = this.cloze
// 	clozeText = this.text
// 	clozeText = clozeText.replace("______.", clozeDeleted);
// 	console.log(clozeText);
// }


var card1 = new ClozeCard("Life is pretty cool.", "cool");
var card2 = new ClozeCard("Mostly becuase I am alive.", "alive");



cards.push(card1);
cards.push(card2);



function playCards() {
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "partial",
						message: cards[cardCount].partialText
					}
				]).then(function(answer) {
					if((answer.partial).toLowerCase() === cards[cardCount].cloze) {
						console.log("correct");
						cardCount ++
						playCards();
					} 
					else {
						console.log("incorrect");
						cardCount ++
						playCards();
					}

				});

	}


}

playCards();

module.exports = ClozeCard;


