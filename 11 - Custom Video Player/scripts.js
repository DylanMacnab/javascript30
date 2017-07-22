// Get The Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

let isPlaying = false;
let cTime = video.currentTime;


// Functions

// Play and Pause
function togglePlay() {
  if (isPlaying) {
    video.pause();
    isPlaying = false;
  } else {
    video.play();
    isPlaying = true;
  }
}

// Progress Bar
function updateProgressBarWidth() {
  let videoCompletion = 100 * (video.currentTime / video.duration);
  progressBar.style.flexBasis = `${videoCompletion}%`;
}

function updateProgress() {
  updateProgressBarWidth();
  if (isPlaying) {
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
toggle.addEventListener('click', playToggle);
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
*/