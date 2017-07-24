// Get The Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');

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

// Skip Ahead
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Progress Bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Volume Controls
function updateVolume() {
  video.volume = ranges[0].value;
}

// Playback Controls
function updatePlaybackRate() {
  video.playbackRate = ranges[1].value;
}

// Scrub
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  handleProgress();
}


// Add Events
fullscreen.addEventListener('click', function() {
  if(video.requestFullscreen) {
    video.requestFullscreen();
  } else if(video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if(video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if(video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

video.addEventListener('timeupdate', handleProgress);

ranges[0].addEventListener('input', updateVolume);
ranges[1].addEventListener('input', updatePlaybackRate);

skipButtons.forEach(button => button.addEventListener('click', skip));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => { mousedown = true; });
progress.addEventListener('mouseup', () => { mousedown = false; });

/* WHAT I LEARNED V2:
  6. There is a play and pause button property on the video player
    // It's better to use a built in property than creating a flag variable that...
    // ... act like a property. it's cleaner.
  7. Separate your functions to keep them reusable. togglePlay and updating the play button are better apart.
  8. You can call a forEach loop on a node list to add an event listener to each item in the list.
  9. A data attribute can be accessed with dataset, and this.dataset will return an object with a property of whatever you named it.
  10. You can use the this keyword to get the clicked element, and find the dataset attribute that way.
  11. parseFloat() is a built in function used to work with floating point numbers.
  12. There's a timeupdate event listener. I used a setInterval function to run the my update progress every
    ... bar ever 1 second but it's a better for it to run everytime the video changes time.
  13. It's sometime eaiser to use fewer variables and do the math in one variable.
  14. OffsetX returns the offset value relative to the padding edge of the element clicked
*/

// NEW FEATURES FOR V3
// 1. Full Screen button
// 2. Total Time and Current Time UI
// 3. Click and drag to update current time
