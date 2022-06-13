// Creating default variables for pomodoro intervals
const timer = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 30,
  longBreakInterval: 4,
  // Keeps track of pomodoro sessions completed
  sessions: 0,
}

let interval;

// Checks to see if start is clicked so the startTimer function can run
// If not, timer will remain stopped
const mainButton = document.getElementById('js-btn');
mainButton.addEventListener('click', () => {
  const { action } = mainButton.dataset;
  if (action === 'start') {
    startTimer();
  } else {
    stopTimer();
  }
});


const modeButtons = document.querySelector('#js-mode-buttons');
modeButtons.addEventListener('click', handleMode);

function getRemainingTime(endTime) {
  // Finds difference between current time and future end time of
  // curent timer mode to determine and store total number of seconds left
  const currentTime = Date.parse(new Date());
  const difference = endTime - currentTime;

  const total = Number.parseInt(difference / 1000, 10);
  const minutes = Number.parseInt((total / 60) % 60, 10);
  const seconds = Number.parseInt(total % 60, 10);
  
  return {
    total,
    minutes,
    seconds,
  };
}

function startTimer() {
  // Calculates when the timer will end
  let { total } = timer.remainingTime;
  const endTime = Date.parse(new Date()) + total * 1000;

  // Adds increments to sessions value at the start of each pomodoro
  if (timer.mode === 'pomodoro') timer.sessions++;

  // Changing button to pause button when timer is running
  mainButton.dataset.action = 'stop';
  mainButton.textContent = 'stop';
  mainButton.classList.add('active');

  // Exceutes updateClock every second to update countdown to latest value
  interval = setInterval(function() {
    timer.remainingTime = getRemainingTime(endTime);
    updateClock();

    // Checks to see if total remaining time is equal to zero
    // if yes will clear timer
    total = timer.remainingTime.total;
    if (total <= 0) {
      clearInterval(interval);

      // Automatically switches modes when one mode is completed
      switch (timer.mode) {
        case 'pomodoro':
          // Checks to see if number of sessions is divisible by a long break
          // interval to determine whether it should switch to a short break or
          // long break
          if (timer.sessions % timer.longBreakInterval === 0) {
            switchMode('longBreak');
          } else {
            switchMode('shortBreak');
          }
          break;
        // Starts pomodoro when break ends
        default:
          switchMode('pomodoro');
      }

      startTimer();
    }
  }, 1000);
}

// Clearing the interval causes setInterval method above to be triggered, 
// which pauses the timer, and changes button back to start
function stopTimer() {
  clearInterval(interval);
  
  mainButton.dataset.action = 'start';
  mainButton.textContent = 'start';
  mainButton.classList.remove('active');
}

function updateClock() {
  // Takes the remaining time and "pads" it with zeros so numbers always have
  // two digits (08 instead of 8)
  const { remainingTime } = timer;
  const minutes = `${remainingTime.minutes}`.padStart(2, '0');
  const seconds = `${remainingTime.seconds}`.padStart(2, '0');

  const min = document.getElementById('js-minutes');
  const sec = document.getElementById('js-seconds');
  min.textContent = minutes;
  sec.textContent = seconds;

}

function switchMode(mode) {
  // Sets mode property and remaining mode property to current mode
  timer.mode = mode;
  timer.remainingTime = {
    // Seconds remaining for current mode
    total: timer[mode] * 60,
    // Initial minutes and seconds for target mode
    minutes: timer[mode],
    seconds: 0,
  };

  // Removing the active class from current mode and sets to the mode that
  // user has clicked
  document
    .querySelectorAll('button[data-mode]')
    .forEach(e => e.classList.remove('active'));
  document.querySelector(`[data-mode="${mode}"]`).classList.add('active');

  updateClock();
}

// Function that responds to user switching the mode of the timer
function handleMode(event) {
  // Value of data mode retrieved from target button
  const { mode } = event.target.dataset;

  if (!mode) return;

  switchMode(mode);
  // Clears timer when mode is switched
  stopTimer();
}

// Button to reset timer
const resetButton = document.querySelector(".reset_button");
resetButton.addEventListener("click", reset);

function reset(mode){
  
  stopTimer();
  switchMode(timer.mode);
}


// Ensures mode and remainingTime properties are set on timer object when the 
// page loads, by executing switchMode to set default timer mode to pomodoro
document.addEventListener('DOMContentLoaded', () => {
    switchMode('pomodoro');
});




















