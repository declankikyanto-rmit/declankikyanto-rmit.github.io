// We create an object array containing the videos
const videoList = [
  { name: "Zenscape", link: "zenscape.mp4" },
  { name: "Stardust", link: "stardust.mp4" },
  {
    name: "Video art",
    link: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
  },
];

let loop = false;

const playPauseButton = document.querySelector("#play-pause-btn");
// Event listener to toggle between playing and pausing video on clicking the button
playPauseButton.addEventListener("click", togglePlay);
const playPauseImg = document.querySelector("#play-pause-img");

const myVideo = document.querySelector("#my-video");
const videoName = document.querySelector("#video-name");
const videoTime = document.querySelector("#video-time");
const progressBar = document.querySelector("#progress-bar-fill");
// myVideo.removeAttribute("controls");

const firstVideoButton = document.querySelector("#first-video-btn");

// Event listener to play the first video
firstVideoButton.addEventListener("click", function playIt() {
  myVideo.pause();
  playVideo(0);
});

const secondVideoButton = document.querySelector("#second-video-btn");
secondVideoButton.addEventListener("click", function playIt() {
  myVideo.pause();
  playVideo(1);
});

//video will be played if it is currently paused or ended
//otherwise the same function will pause the video
function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

//depending on the number, it will fetch the right video and its name
//from the VideoList array, see at the top.
function playVideo(no) {
  myVideo.pause();
  myVideo.src = videoList[no].link;
  videoName.textContent = videoList[no].name;
  myVideo.load();
  myVideo.play();
}

// The following code allows moving to previous and next audio or video
const prevButton = document.querySelector("#previous-btn");
console.log(prevButton);
prevButton.addEventListener("click", prevTrack);

const nextButton = document.querySelector("#next-btn");
console.log(nextButton);
nextButton.addEventListener("click", nextTrack);

let currentIndex = 0;

function prevTrack() {
  console.log("previous track loading");
  currentIndex = (currentIndex - 1 + videoList.length) % videoList.length;
  console.log(currentIndex);
  playVideoAtIndex(currentIndex);
}

function nextTrack() {
  console.log("next track loading");
  currentIndex = (currentIndex + 1) % videoList.length;
  console.log(currentIndex);
  playVideoAtIndex(currentIndex);
}

// Function to play video at a specific index
function playVideoAtIndex(index) {
  myVideo.pause(); // Pause the video before changing source
  console.log(videoList[index].link);
  myVideo.src = videoList[index].link;
  myVideo.load(); // Load the new source
  myVideo.play(); // Play the video
}
