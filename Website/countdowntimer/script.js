let radioCategory = document.getElementById("radioCategory");
let title = document.getElementById("title");
let countdown = document.getElementById("countdown");
let timer = document.getElementById("timer");
let years = document.getElementById("years");
let months = document.getElementById("months");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let submit = document.getElementById("submit");

let category = "";

// Function to get the category for the countdown
// and set the coundown timer to the correct category
document.body.addEventListener("click", function (e) {
    category = e.target.value;

    // See if its possible to connect an if and switch statement together

    switch (category) {
        case "american football":
            timer.innerHTML = "American Football";
            break;
        case "baby":
            timer.innerHTML = "Baby";
            break;
        case "basketball":
            timer.innerHTML = "Basketball";
            break;
        case "birthday":
            timer.innerHTML = "Birthday";
            break;
        case "chinese new year":
            timer.innerHTML = "Chinese New Year";
            break;
        case "christmas":
            timer.innerHTML = "Christmas";
            break;
        case "easter":
            timer.innerHTML = "Easter";
            break;
        case "football":
            timer.innerHTML = "Football";
            break;
        case "generic":
            timer.innerHTML = "Generic";
            break;
        case "halloween":
            timer.innerHTML = "Halloween";
            break;
        case "new year":
            timer.innerHTML = "New Year";
            break;
        case "retirement":
            timer.innerHTML = "Retirement";
            break;
        case "thanksgiving":
            timer.innerHTML = "Thanksgiving";
            break;
        case "vacation":
            timer.innerHTML = "Vacation";
            break;
        case "valentine's day":
            timer.innerHTML = "Valentine's Day";
            break;
        case "wedding":
            timer.innerHTML = "Wedding";
            break;
        default:
            timer.innerHTML = "Countdown Timer";
            break;
    }
});
