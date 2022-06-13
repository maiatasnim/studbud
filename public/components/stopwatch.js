// Tutorials 
// https://www.youtube.com/watch?v=1INmsFnD-u4,
// https://www.sitepoint.com/community/t/javascript-how-to-make-laps-in-the-stopwatch/244936,
// https://www.youtube.com/watch?v=49f1cjZWRJA, 

// Define variables to hold time values
var seconds = 0;
var minutes = 0;
var hours = 0;

// Define variables to hold "display" values
var displaySeconds = 0;
var displayMinutes = 0;
var displayHours = 0;

// Define variable for setInterval() function
let interval = null;

// Define variable to hold stopwatch status, by default it is paused
let watchStatus = "paused";

// Selector for the lap outputs
var lap = document.getElementById('lapButton');
var lapList = document.getElementById('lapsList');


// Resets last lap
var lastLap = { seconds: 0, minutes: 0, hours: 0 };

// Stopwatch function
function playTimer() {

    seconds++;

    // Logic to determine when to increment next value
    if (seconds / 60 === 1) {
        
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }

    }

    // Update displayed value to add a 0 if there's only one digit
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    }
    else {
        displayHours = hours;
    }

    // Display updated time value to user
    document.getElementById("timer").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}


// Functionality for start/stop button
const startStop = document.getElementById('startStop');
startStop.addEventListener("click", function startStop(){

    if (watchStatus === "paused") {

        // Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(playTimer, 1000);
        document.getElementById("startStop").innerHTML = "stop";
        watchStatus = "started";

    }
    else {
        
        // Default button status
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "start";
        watchStatus = "paused";

    }

})

// Function to reset stopwatch
resetButton.addEventListener("click", function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0; 
    hours = 0;
    document.getElementById("timer").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "start";

});

// Function to record a lap, uses math to calculate the length of each lap compared to the last
lapButton.addEventListener("click", function lap() {
//     lapList.innerHTML += "<li>" + timer.innerHTML + "</li>";
// });

    let lapSeconds = seconds - lastLap.seconds;
    let lapMinutes = minutes - lastLap.minutes;
    let lapHours = hours - lastLap.hours;
    
    lastLap = {
    hours: hours,
    minutes: minutes,
    seconds: seconds
    };

    lapList.innerHTML += "<li>" + leftLaps(lapHours) + ":" + leftLaps(lapMinutes) + ":" + leftLaps(lapSeconds) + "</li>";
  
})

// Checks to see if reset button has been clicked (?)
function leftLaps(value) {
    if (value >= 0) {
        return value < 10 ? ('0' + value) : value;
    }
    else if (value <= 0) {
        return value < 10 ? ('0' + -value) : value;
    }
}

// Function to clear lap records
clearLaps.addEventListener("click", function clear() {
    lapList.innerHTML = '';
})
