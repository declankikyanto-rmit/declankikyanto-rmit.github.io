const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseBtn = document.querySelector("#play-pause-btn");
console.log(playPauseBtn);

playPauseBtn.addEventListener("click", togglePlay);

const playPauseImg = document.querySelector("#play-pause-img");

function togglePlay() {
  if (myVideo.pause || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

// Mute and unmute

const muteUnmuteBtn = document.querySelector("#mute-unmute-btn");
console.log(muteUnmuteBtn);

muteUnmuteBtn.addEventListener("click", toggleSound);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");

function toggleSound() {
  if (myVideo.muted) {
    myVideo.muted = false;
  } else {
    myVideo.muted = true;
  }
}

myVideo.addEventListener("timeupdate", showProgress);

const progressBar = document.querySelector("#progress-bar-fill");
const videoTime = document.querySelector("#video-time");

function showProgress() {
  const currentTime = myVideo.currentTime;
  console.log("currentime", currentTime.toFixed(2));
  videoTime.textContent = currentTime.toFixed(2);
  const progress = (currentTime / myVideo.duration) * 100;
  console.log("progress", progress.toFixed(2));
  progressBar.style.width = progress + "%";
}

const step1Btn = document.querySelector("#step-1-btn");
console.log(step1Btn);
step1Btn.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 9.5;
  myVideo.play();
}

// Likes

const likes = document.querySelector("#likes");
console.log(likes);

let likeCount = 0;

const likesBtn = document.querySelector("#like-btn");
likesBtn.addEventListener("click", addLikes);

function addLikes() {
  likeCount++;
  likes.textContent = likeCount;
}

myVideo.addEventListener("dbclick", toggleFullScreen);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

const videos = [
  {
    name: "zenscape",
    src: "zenscape.mp4",
  },
  {
    name: "stardust",
    src: "stardust.mp4",
  },
];

const firstVideoBtn = document.querySelector("#first-video-btn");
console.log(firstVideoBtn);

const secondVideoBtn = document.querySelector("#second-video-btn");
console.log(secondVideoBtn);

firstVideoBtn.addEventListener("click", function () {
  chooseVideo(0);
});

secondVideoBtn.addEventListener("click", function () {
  chooseVideo(1);
});

const videoName = document.querySelector("#video-name");

function chooseVideo(no) {
  myVideo.src = videos[no].src;
  videoName.textContent = videos[no].name;
  console.log(myVideo.src);
  myVideo.load();
  myVideo.play();
}
