/*
Create a new file named ClozeCard.js:
This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
The constructor should accept two arguments: text and cloze.
The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
The constructed object should have a partial property that contains only the partial text.
The constructed object should have a fullText property that contains only the full text.
The constructor should throw or log an error when the cloze deletion does not appear in the input text.
Use prototypes to attach these methods, wherever possible.
*/
var fs = require("fs");

var ClozeCard = function (text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.logError = function () {
        if (!text.includes(cloze)) {
            var errorText = ">>> \"" + cloze + "\" does not appear in \"" + text + "\"\r\n";
            fs.appendFile("log.txt", this.command, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log(errorText);
            });
        }
    };
};

ClozeCard.prototype.cloze = function () {
    return this.cloze;
};

ClozeCard.prototype.partial = function () {
    return this.text.replace(this.cloze, " ... ");
};

ClozeCard.prototype.fullText = function () {
    return this.text;
};

module.exports = ClozeCard;