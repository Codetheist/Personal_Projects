// Read word bank from file
let wordBank = [];
let wordBankFile = "word_bank.txt";
let wordBankRequest = new XMLHttpRequest();
wordBankRequest.open("GET", wordBankFile, false);
wordBankRequest.send(null);
let wordBankText = wordBankRequest.responseText;
let wordBankLines = wordBankText.split(" ");
for (let i = 0; i < wordBankLines.length; i++) {
    wordBank.push(wordBankLines[i]);
}

// Select random word from word bank
let word = wordBank[Math.floor(Math.random() * wordBank.length)];

// Create array of letters in word
let letters = [];
for (let i = 0; i < word.length; i++) {
    letters.push(word.charAt(i));
}

// Create array of underscores
let underscores = [];
for (let i = 0; i < letters.length; i++) {
    underscores.push("_");
}

// Create array of guessed letters
let guessedLetters = [];

// Create array of incorrect letters
let incorrectLetters = [];