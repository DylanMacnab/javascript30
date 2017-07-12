// Get The Elements

const player = document.querySelector('.player');
const video = document.querySelector('.player__video viewer')
const play = document.querySelector('button[title="Toggle Play"]');
const volume = document.querySelector('input[name="volume"]');
const progress = document.querySelector('.progress');
const progressFill = document.querySelector('.progress__filled');
const skip ahead = document.querySelector('button[data-skip="25"]');
const skip back = document.querySelector('button[data-skip="-10"]');
const speed = document.querySelector('input[name="playbackRate"]');

// Build functions

// Add Events