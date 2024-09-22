const myVideo = document.querySelector("#my-video");

const playPauseBtn = document.querySelector("#play-pause-button");

playPauseBtn.addEventListener("click", playPauseVideo);

const playPauseImg = document.querySelector("#play-pause-img");

function playPauseVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
