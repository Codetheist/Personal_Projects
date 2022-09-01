let question = document.querySelector("#question");
let magicBall = document.getElementById("magicball");
let answer = document.getElementById("answer");
let displayTriangle = document.getElementById("triangle");

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

    if (question.value === "") {

        question.classList.add("animate__heartBeat");
        answer.innerHTML = "Please Enter a Question";
        displayTriangle.style.visibility = "visible";

        setTimeout(function () {
            question.classList.remove("animate__heartBeat");
            answer.innerHTML = "";
            displayTriangle.style.visibility = "hidden";
        }, 2000);

    } else if (question.value != "") {
        answer.innerHTML = giveAnswers[Math.floor(Math.random() * giveAnswers.length)];
        displayTriangle.style.visibility = "visible";

        setTimeout(function () {
            answer.innerHTML = "";
            displayTriangle.style.visibility = "hidden";
        }, 2000);
    }

}

// Function to clear the question and answer
function clearQuestion() {
    question.value = "";
    answer.innerHTML = "";
    displayTriangle.style.visibility = "hidden";
}

// Funtion to start the magic 8 ball
function startMagic() {
    displayTriangle.style.visibility = "hidden";

    question.placeholder = "Ask me a question...";

    //Event listener for the button everytime the user presses the button
    magicBall.addEventListener("click", askMe);

    //Event listener for the clear button
    clearButton.addEventListener("click", clearQuestion);
}

startMagic();