// let count = 0;
// let counterTimeout;

// function startCounter() {
//   counterTimeout = setTimeout(() => {
//     console.log("startCounter");
//   }, 5000);
// }

// function stopCounter() {
//   clearTimeout(counterTimeout);
// }

let startTime, updatedTime, interval;
let isRunning = false;
let elapsedTime = 0;

const displayTime = document.getElementById("time-display");

function startStopwatch() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(updateTime, 10);
    isRunning = true;
  }
}

function stopStopwatch() {
  if (isRunning) {
    clearInterval(interval);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function resetStopwatch() {
  clearInterval(interval);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  displayTime.innerHTML = "00:00:00.00";
}

function updateTime() {
  updatedTime = Date.now() - startTime;
  const hours = Math.floor((updatedTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((updatedTime / (1000 * 60)) % 60);
  const seconds = Math.floor((updatedTime / 1000) % 60);
  const milliseconds = Math.floor((updatedTime % 1000) / 10);

  displayTime.innerHTML =
    `${hours.toString().padStart(2, "0")}:` +
    `${minutes.toString().padStart(2, "0")}:` +
    `${seconds.toString().padStart(2, "0")}.` +
    `${milliseconds.toString().padStart(2, "0")}`;
}

document
  .getElementById("start-button")
  .addEventListener("click", startStopwatch);
document.getElementById("stop-button").addEventListener("click", stopStopwatch);
document
  .getElementById("reset-button")
  .addEventListener("click", resetStopwatch);
