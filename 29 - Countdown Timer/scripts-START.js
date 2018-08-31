let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const timerButtons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing countdown intervals to start
  clearInterval(countdown);

  // get current time and future then time
  const now = Date.now(); 
  const then = now + seconds * 1000;

  // run once before interval starts
  displayTimeLeft(seconds);
  displayEndTime(then);

  // Uses setInterval function to track updates to the time
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);

}

// function to display time left UI
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;

  const display = `${minutes}:${remainderSeconds < 10 ? `0${remainderSeconds}` : remainderSeconds}`;
  timerDisplay.textContent = display;

  document.title = display; // set title
}

// function to display end time
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `${hour > 12 ? `${hour - 12}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}${hour > 12 ? "pm" : "am"}`;
}

// starts the timer
function startTimer(e) {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

// attach event listeners
timerButtons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const minutes = parseInt(this.minutes.value);
  timer(minutes * 60);
  this.reset();
});



/* Lessons and Reminders:
1. You can use the "this" keyword to refer to the element click in an event handler -- very similar to how jQuery works.
2. You can access "name" element directly from the document. syntax
3. Date.now() returns milliseconds since jan 1, 1970
4. If you need to make a set interval run once immediately you can extract that meat of the interval callback into another function and run that before the setInterval starts.
5. Always declare your setInterval to a variable so you can clear it at a later time.
6. Node list has a forEach() method that is good for add event listeners to a bunch of elements at once
7. Submit event is triggered when button is clicked.
8. 
*/