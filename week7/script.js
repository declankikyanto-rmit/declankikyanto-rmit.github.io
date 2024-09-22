const notify = document.querySelector("#notify");

const playBtn = document.querySelector("#play-button");
const pauseBtn = document.querySelector("#pause-button");

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);

function playAudio() {
  notify.play();
}

function pauseAudio() {
  notify.pause();
}

// Pop Button

const popSound = document.querySelector("#pop-sound");

const popBtn = document.querySelector("#pop-button");
console.log(popBtn);

popBtn.addEventListener("click", popAudio);

function popAudio() {
  popSound.play();
}

// Video

const myVideo = document.querySelector("#my-video");

const playVideoBtn = document.querySelector("#play-video-button");
const pauseVideoBtn = document.querySelector("#pause-video-button");

playVideoBtn.addEventListener("click", playVideo);
pauseVideoBtn.addEventListener("click", pauseVideo);

function playVideo() {
  myVideo.play();
}

function pauseVideo() {
  myVideo.pause();
}
