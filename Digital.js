// script.js
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Format hours, minutes, and seconds to be 2 digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    // Display the time
    document.getElementById('time').innerText = `${hours}:${minutes}:${seconds}`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize the clock
  updateClock();