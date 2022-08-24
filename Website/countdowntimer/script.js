//let radioCategory = document.getElementById("radioCategory");
//let title = document.getElementById("title");

// Users input date
/*let inputUserMonth = document.getElementById("month");
let inputUserDay = document.getElementById("day");
let inputUserYear = document.getElementById("year");

// Users input time
let inputUserHour = document.getElementById("hour");
let inputUserMinute = document.getElementById("minute");
let inputUserSecond = document.getElementById("second");*/



const dateValue = document.getElementById("date");

// Display countdown timer
let years = document.getElementById("years");
let months = document.getElementById("months");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let display = "";

let TODAY = new Date().getTime();

let dateSelected = "";

let differenceInTime = "";
let difference = "";

//Creat a function to start the countdown timer
function calculateCountdown() {
    dateSelected = new Date(dateValue.value).getTime();
    differenceInTime = dateSelected - TODAY;
    difference = Math.floor(differenceInTime / 1000);

    // Formulate to calculate the years, months, days, hours, minutes, seconds
    difference--;

    years = Math.floor(difference / (365 * 24 * 60 * 60)); // 365 days in a year
    difference = difference % (365 * 24 * 60 * 60); // Remaining days

    months = Math.floor(difference / (30 * 24 * 60 * 60)); // 30 days in a month
    difference = difference % (30 * 24 * 60 * 60); // Remaining days

    days = Math.floor(difference / (24 * 60 * 60)); // 24 hours in a day
    difference = difference % (24 * 60 * 60); // Remaining days

    hours = Math.floor(difference / (60 * 60)); // 60 minutes in an hour
    difference = difference % (60 * 60); // Remaining minutes

    minutes = Math.floor(difference / 60); // 60 seconds in a minute
    difference = difference % 60; // Remaining seconds

    seconds = difference; // Remaining seconds

    // If the countdown timer is finished, display the message
    if (difference > 0) {

        // Display the countdown timer
        display = `${years < 10 ? '0' + years : years} ${months < 10 ? '0' + months : months}
        ${days < 10 ? '0' + days : days} ${hours < 10 ? '0' + hours : hours}
        ${minutes < 10 ? '0' + minutes : minutes} ${seconds < 10 ? '0' + seconds : seconds}`;
        document.getElementById("display").innerHTML = display;

    } else {
        document.getElementById("display").innerHTML = "Time's up!";
    }
}

// Function to start the countdown timer
function startCountDown() {
    setInterval(calculateCountdown, 1000);
}


// Function to reset the countdown timer
function resetCountDown() {
    window.location.reload();
}

// Function to get the category for the countdown
// and set the coundown timer to the correct category
/*function getCategory() {
    document.body.addEventListener("click", function (e) {
        category = e.target.value;
        
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
                timer.innerHTML = "Countdown Timer";
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
}*/