function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zero if needed
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Update the clock display
  clockElement.textContent = ${hours}:${minutes}:${seconds};
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();