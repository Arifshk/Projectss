// Select elements
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

// Initialize variables
let timerInterval;
let isPaused = true;
let timeLeft = 25 * 60; // 25 minutes in seconds

// Update the timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
}

// Start the timer
function startTimer() {
    if (!isPaused) return; // Do nothing if timer is already running
    isPaused = false;
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            alert("Pomodoro session finished! Take a break!");
            // Optionally, you can add an alert sound or notification here
        }
    }, 1000);
}

// Pause the timer
function pauseTimer() {
    isPaused = true;
    clearInterval(timerInterval);
}

// Reset the timer
function resetTimer() {
    isPaused = true;
    clearInterval(timerInterval);
    timeLeft = 25 * 60; // Reset to 25 minutes
    updateTimerDisplay();
}

// Event listeners for buttons
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize the timer display on load
updateTimerDisplay();