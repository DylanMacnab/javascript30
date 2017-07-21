// Get The Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

let cTime = video.currentTime;

// Functions

// Play and Pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update Play/Pause button
function updateButton() {
  const icon = this.paused ? '▶' : '❚❚';
  toggle.textContent = icon;
}

// Progress Bar
function updateProgressBarWidth() {
  let videoCompletion = 100 * (video.currentTime / video.duration);
  progressBar.style.flexBasis = `${videoCompletion}%`;
}

function updateProgress() {
  updateProgressBarWidth();
  if (video.playing) {
    setInterval(updateProgressBarWidth, 1000);
  }
}

// Volume Controls
function updateVolume() {
  video.volume = ranges[0].value;
}

// Playback Controls
function updatePlaybackRate() {
  video.playbackRate = ranges[1].value;
}

// Skip Ahead
function skipCurrentTime(e) {
  let timeToSkip = e.target.dataset.skip;
  video.currentTime = +video.currentTime + +timeToSkip;
}


// Add Events
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);


toggle.addEventListener('click', updateProgress);
ranges[0].addEventListener('input', updateVolume);
ranges[1].addEventListener('input', updatePlaybackRate);
skipButtons[0].addEventListener('click', skipCurrentTime);
skipButtons[1].addEventListener('click', skipCurrentTime);



/* WHAT I LEARNED:
  1. You can scope the querySelector getter to a parent element!
  2. You can use the attribute selector in a querySelectorAll
  3. The 'input' event change will track input changes immiately / continuously
  4. Getter is just a value returned with the object notation
  5. Setter is set through the '=' sign

  // VERSION 2
  6. There is a play and pause button property on the video player
    // It's better to use a built in property than creating a flag variable that...
    // ... act like a property. it's cleaner.
  7. Separate your functions to keep them reusable. togglePlay and updating the play button are better apart.
*/
