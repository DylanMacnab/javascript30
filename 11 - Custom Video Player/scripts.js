// Get The Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player-slider');

let isPlaying = false;


// Build functions
function playToggle() {
  if (isPlaying) {
    video.pause();
    isPlaying = false;
  } else {
    video.play();
    isPlaying = true;
  }
}

// Add Events
toggle.addEventListener('click', playToggle);


/* WHAT I LEARNED:
  1. You can scope the querySelector getter to a parent element!
  2. You can use the attribute selector in a querySelectorAll
*/