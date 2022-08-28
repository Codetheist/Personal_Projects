let question = document.getElementById("question");
let magicBall = document.getElementById("magicball");
let answer = document.getElementById("answer");

// Array answer for a magic 8 ball
let giveAnswers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

// Function to get a random answer from the array
function askMe() {
    let random = Math.floor(Math.random() * giveAnswers.length);
    return giveAnswers[random];
}

// Function to create the magic 8 ball
function magic8Ball() {
    answer = askMe();
    magicBall.innerHTML = answer;
}

// Function to clear the magic 8 ball
function clearMagic8Ball() {
    magicBall.innerHTML = "";
}

// Function to clear the question
function clearQuestion() {
    question.value = "";
}

// Function to clear the magic 8 ball and the question
function clearAll() {
    clearMagic8Ball();
    clearQuestion();
}

// Function to ask the magic 8 ball
function ask() {
    magic8Ball();
    clearQuestion();
}