// Define the target date and time for the countdown
const targetDate = new Date("2023-09-30T00:00:00").getTime();

// Function to update the countdown
function updateCountdown() {
  // Get the current date and time
  const currentDate = new Date().getTime();

  // Calculate the time remaining until the target date
  const timeLeft = targetDate - currentDate;

  // Check if the countdown has expired
  if (timeLeft <= 0) {
    // The countdown is over
    document.getElementById("clock1").innerHTML = "Countdown expired!";
  } else {
    // Calculate days, hours, minutes, and seconds remaining
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the HTML with the countdown values
    document.querySelector('#clock1 [data-value="days"]').textContent = days;
    document.querySelector('#clock1 [data-value="hours"]').textContent = hours;
    document.querySelector('#clock1 [data-value="minutes"]').textContent =
      minutes;
    document.querySelector('#clock1 [data-value="seconds"]').textContent =
      seconds;
  }
}

// Call the updateCountdown function every second
setInterval(updateCountdown, 1000);

// Initial call to set up the countdown
updateCountdown();
