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
function playToggle() {
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
  console.log('event fired');
  video.volume = ranges[0].value;
  console.log(volume);
}


// Add Events
toggle.addEventListener('click', playToggle);
toggle.addEventListener('click', updateProgress);
ranges[0].addEventListener('input', updateVolume);


/* WHAT I LEARNED:
  1. You can scope the querySelector getter to a parent element!
  2. You can use the attribute selector in a querySelectorAll
*/