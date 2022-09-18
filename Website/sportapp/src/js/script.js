// Get the button from the dom
let footballButton = document.getElementById("football");
let basketballButton = document.getElementById("basketball");
let basebollButton = document.getElementById("baseball");
let hockeyButton = document.getElementById("hockey");
let soccerButton = document.getElementById("soccer");

// Table elements
let table = document.getElementById("table");
let gameDate = document.getElementById("date");
let gameTime = document.getElementById("time");
let homeTeam = document.getElementById("home");
let awayTeam = document.getElementById("away");
let gameLocation = document.getElementById("location");

// When button is clicked, call the function
footballButton.addEventListener("click", football);
basketballButton.addEventListener("click", basketball);
basebollButton.addEventListener("click", baseball);
hockeyButton.addEventListener("click", hockey);
soccerButton.addEventListener("click", soccer);

// Create a table for the sport
function football() {
    table.style.display = "block";
    gameDate.innerHTML = "Date";
    gameTime.innerHTML = "Time";
    homeTeam.innerHTML = "Home Team";
    awayTeam.innerHTML = "Away Team";
    gameLocation.innerHTML = "Location";
}

function basketball() {
    table.style.display = "block";
    gameDate.innerHTML = "Date";
    gameTime.innerHTML = "Time";
    homeTeam.innerHTML = "Home Team";
    awayTeam.innerHTML = "Away Team";
    gameLocation.innerHTML = "Location";
}

function baseball() {
    table.style.display = "block";
    gameDate.innerHTML = "Date";
    gameTime.innerHTML = "Time";
    homeTeam.innerHTML = "Home Team";
    awayTeam.innerHTML = "Away Team";
    gameLocation.innerHTML = "Location";
}

function hockey() {
    table.style.display = "block";
    gameDate.innerHTML = "Date";
    gameTime.innerHTML = "Time";
    homeTeam.innerHTML = "Home Team";
    awayTeam.innerHTML = "Away Team";
    gameLocation.innerHTML = "Location";
}

function soccer() {
    table.style.display = "block";
    gameDate.innerHTML = "Date";
    gameTime.innerHTML = "Time";
    homeTeam.innerHTML = "Home Team";
    awayTeam.innerHTML = "Away Team";
    gameLocation.innerHTML = "Location";
}

