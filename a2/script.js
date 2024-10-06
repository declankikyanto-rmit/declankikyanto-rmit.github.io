// To start off the development process of my media player, I started by creating objects (song details) inside an array. I included details such as:
// songName, artist, src of audio, album cover image, and also an Id to distinguish it from other songs.

const songList = [
  {
    songName: "Not Like Us",
    artist: "Kendrick Lamar",
    src: "Not Like Us.mp3",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_H5FC_4F4GNE-LhC8gXGwm19kuFGNImxGw&s",
    id: "song-1",
  },
  {
    songName: "All The Stars (with SZA)",
    artist: "Kendrick Lamar, SZA",
    src: "Kendrick Lamar, SZA - All The Stars.mp3",
    img: "https://i.scdn.co/image/ab67616d00001e02c027ad28821777b00dcaa888",
    id: "song-2",
  },
  {
    songName: "Like That",
    artist: "Future, Metro Boomin, Kendrick Lamar",
    src: "Future, Metro Boomin - Like That (Official Audio).mp3",
    img: "https://cdns-images.dzcdn.net/images/cover/544249214bc4cf9e3763707d4cb4dfc5/1900x1900-000000-80-0-0.jpg",
    id: "song-3",
  },
  {
    songName: "HUMBLE.",
    artist: "Kendrick Lamar",
    src: "Kendrick Lamar - HUMBLE..mp3",
    img: "https://i.scdn.co/image/ab67616d00001e028b52c6b9bc4e43d873869699",
    id: "song-4",
  },
  {
    songName: "Count Me Out",
    artist: "Kendrick Lamar",
    src: "Kendrick Lamar - Count Me Out.mp3",
    img: "https://images.genius.com/2f8cae9b56ed9c643520ef2fd62cd378.1000x1000x1.png",
    id: "song-5",
  },
];

// Then from there, from what I learnt in class, I used a for-loop to rendering each song in the song list and append it into the HTML

const topSongList = document.querySelector("#top-song-list");

var postTopSong = "";
for (var i = 0; i < songList.length; i++) {
  postTopSong += `
    <div class="song-card" id=${songList[i].id}>
        <button class="album-cover-container">
          <img src="${songList[i].img}" alt="" />
          <div class="song-play-btn">
            <img src="play.svg"></img>
          </div>
        </button>
        <div class="album-label">
          <div class="album-title">${songList[i].songName}</div>
          <div class="album-subtitle">${songList[i].artist}</div>
        </div>  
    </div>`;
}

// I then insert these songs
topSongList.innerHTML = postTopSong;

// Then from there, I created variables that lets me update the song label with any song that is currently playing, this can be seen on the bottom left of the website.
const currentlyPlayedTitle = document.querySelector("#currently-played-title");
const currentlyPlayedSubtitle = document.querySelector(
  "#currently-played-subtitle"
);
const currentlyPlayedAlbumCover = document.querySelector(
  "#currently-played-album-cover"
);

// Then here I want to added a functionality where I can click each song and the media player plays that song while displaying its details + progress slider. Basically since I added a "id: song-X" in my songList array, and use a template literal to append new song to the top-song list, each song has a unique id. From there I select each song with specific id and created a constant which make the media player pause the current songs and plays the selected song based on the unique id.

const mainMedia = document.querySelector("#main-media");
console.log(mainMedia);

// 1st Song
const firstSongBtn = document.querySelector("#song-1");

firstSongBtn.addEventListener("click", function playIt() {
  mainMedia.pause();
  playMedia(0);
  playBtn.src = "pause-circular.svg";
});

// 2nd Song
const secondSongBtn = document.querySelector("#song-2");
secondSongBtn.addEventListener("click", function playIt() {
  mainMedia.pause();
  playMedia(1);
  playBtn.src = "pause-circular.svg";
});

// 3rd Song
const thirdSongBtn = document.querySelector("#song-3");
thirdSongBtn.addEventListener("click", function playIt() {
  mainMedia.pause();
  playMedia(2);
  playBtn.src = "pause-circular.svg";
});

// 4th Song
const fourthSongBtn = document.querySelector("#song-4");
fourthSongBtn.addEventListener("click", function playIt() {
  mainMedia.pause();
  playMedia(3);
  playBtn.src = "pause-circular.svg";
});

// 5th Song
const fifthSongBtn = document.querySelector("#song-5");
fifthSongBtn.addEventListener("click", function playIt() {
  mainMedia.pause();
  playMedia(4);
  playBtn.src = "pause-circular.svg";
});

// playMedia (main media) function - Here not only the song is played in the media player, but the song details such as: Title, Subtitle (artist), and Album cover is all updated, again based on the information within the object inside the array.
function playMedia(no) {
  mainMedia.pause();
  mainMedia.src = songList[no].src;
  currentlyPlayedTitle.textContent = songList[no].songName;
  currentlyPlayedSubtitle.textContent = songList[no].artist;
  currentlyPlayedAlbumCover.src = songList[no].img;
  mainMedia.load();
  mainMedia.play();
}

// playBtn (play button) functionality - so basically what happens here is that I selected a button with an id of #play-btn and store it in playBtn cosntant. then from there I added an event listener which will listen to a click. Then from there it runs the function where if the mainMedia (my audio source), is paused or ended it will play and change the icon and it will pause if theres any other conditions
const playBtn = document.querySelector("#play-btn");
console.log(playBtn);

playBtn.addEventListener("click", playAudioVideo);

function playAudioVideo() {
  if (mainMedia.paused || mainMedia.ended) {
    mainMedia.play();
    playBtn.src = "pause-circular.svg";
  } else {
    mainMedia.pause();
    playBtn.src = "play-circular.svg";
  }
}

// Skip and Back functionality - so in this code I want to let a user skips or go back one time in a song order. I first created and added Event Listeners to both buttons.

const skipBtn = document.querySelector("#skip-btn");
skipBtn.addEventListener("click", skipSong);

const backBtn = document.querySelector("#back-btn");
backBtn.addEventListener("click", backSong);

// Then I set a new variable, songOrder to be 0 - it keeps track of the song playing by its index, which is 0 at the start.
let songOrder = 0;

// Then as a user press on it runs the function below. Let's say as we click play button, our songOrder is now at 0, then it is then intergrated into the formula:
// 0 - 1 = -1
// -1 + 5 (number of song in the list) = 4
// 4 % 5 (number of song in the list) = 4
// Then the playMedia would play the song with the order of (4) in the list, which is the last song
// Then if we click again, it would do the same things and go back 1 order.

function backSong() {
  console.log("Previous Song Loading");
  songOrder = (songOrder - 1 + songList.length) % songList.length;
  console.log(songOrder);
  playMedia(songOrder);
  playBtn.src = "pause-circular.svg";
}

// Same as the skip song, but this time it adds +1 into the order and we use the modulus operator to make go 1 order forward.

function skipSong() {
  console.log("Next Song Loading");
  songOrder = (songOrder + 1) % songList.length;
  console.log(songOrder);
  playMedia(songOrder);
  playBtn.src = "pause-circular.svg";
}

// Repeat functionality - we start off by making a variable of repeat and set it as "false". Then we select the variable assign it to a another variable and use Event Listener to listen to any click that will set the "repeatSong" function.
// We also do the same thing for mainMedia, except this one listen for an event that has ended, and will trigger the "replay" function
let repeat = false;

const repeatBtn = document.querySelector("#repeat-btn");
repeatBtn.addEventListener("click", repeatSong);

mainMedia.addEventListener("ended", replay);

// The replay function checks if the repeat is "true", it will make the current time of the main media (the song source) to 0, and play it again.

function replay() {
  if (repeat) {
    mainMedia.currentTime = 0;
    mainMedia.play();
  }
}

// The repeatSong function is to toggle the repeat state.
// If the repeat is true, it will se it to "false" and change the visual state of the element, and vice versa

function repeatSong() {
  if (repeat) {
    repeat = false;
    repeatBtn.style.backgroundColor = "transparent";
  } else {
    repeat = true;
    repeatBtn.style.backgroundColor = "var(--border-color)";
    repeatBtn.style.borderRadius = "4px";
  }
}

// Mute and unmute functionality - this is also similar to the repeatSong, it just checks if the muteUnmuteBtn is true (clicked) or not, if its true, it will set it to "false", which also unmute the audio, and if it is clicked again, it will set it to "true", and mute the audio.

const muteUnmuteBtn = document.querySelector("#unmute-btn");
muteUnmuteBtn.addEventListener("click", toggleMuteUnmute);

function toggleMuteUnmute() {
  if (mainMedia.muted) {
    mainMedia.muted = false;
    muteUnmuteBtn.src = "unmute.svg";
  } else {
    mainMedia.muted = true;
    muteUnmuteBtn.src = "mute.svg";
  }
}

//  Randomizer functionality - this is a function that I recollected as I was thinking on what feature to add, I remembered learning Math when I did an online JS course (which I haven't finished).
// So again it starts with an Event Listener that runs the "getRandomSong" function once randomize button is clicked.
// Inside the function, a random index will then be generated through Math.random -> which return a random decimals between 0 and 1
// And then by multiplying it with the songList.length (5 right now), it will get a number that is between 0 and 4 (songList.length - 1)
// Then Math.floor just rounds down the result to the nearest whole number that will let the playMedia select a song from the songList.
// Then from there it just plays the song and update the play button image to be pause button image (visual state)
const randomBtn = document.querySelector("#randomize-btn");
randomBtn.addEventListener("click", getRandomSong);

function getRandomSong() {
  const randomIndex = Math.floor(Math.random() * songList.length);
  playMedia(randomIndex);
  playBtn.src = "pause-circular.svg";
}

// Progress slider functionality - so what I did first is to select all elements using querySelector, and make it a variable
// I then add an event listener to listen the mainMedia (song source) time continously throughout. Then I use a variable to get the mainMedia current time and duration
// then I created another variable called percentPlayed to see the percentage of how much the media has been played, then from there I use the function "updateProgressSliderControl" and use percentPlayed as the value.

var progressSlider = document.querySelector("#progress-slider");
var currentTimeDisplay = document.querySelector("#current-time");
var durationDisplay = document.querySelector("#duration");

mainMedia.addEventListener("timeupdate", function () {
  var currentTime = mainMedia.currentTime;
  var duration = mainMedia.duration;

  var percentPlayed = (currentTime / duration) * 100;

  progressSlider.value = percentPlayed;
  updateProgressSliderControl(percentPlayed);

  currentTimeDisplay.textContent = formatTime(currentTime);
  durationDisplay.textContent = formatTime(duration);
});

// Then updateProgressSliderControll function which applies a lienar gradient to the sliders. This gives a visual indication of how much time of the song has been played/elapsed.

function updateProgressSliderControl(value) {
  progressSlider.style.background = `linear-gradient(to right, #fff ${value}%, var(--border-color) ${value}%)`;
}
// I then added an event listener to the progressSlider for any input (which is if when a user slide the slider), it then runs a function that calculates the new time for the song -> (sliderValue / 100) * duration

progressSlider.addEventListener("input", function () {
  var duration = mainMedia.duration;
  var sliderValue = progressSlider.value;

  mainMedia.currentTime = (sliderValue / 100) * duration;

  updateProgressSliderControl(sliderValue);
});

// Then finally the last function that is used is formatTime that inputs a certain (seconds). So initially the (seconds) checks to 2 variables, minutes and secs, and then afte that it returns the value of minutes:seconds, it also has a rules that if the seconds is less than 10, a new 0 will be added into the front of that number.

function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var secs = Math.floor(seconds % 60);
  return minutes + ":" + (secs < 10 ? "0" : "") + secs;
}

// Finally this triggers listen to the loadedmetadata that happens once an information (metadata) is ready, and once its ready it will take the mainMedia.duration and format it into minutes:seconds and finally it displays the updated duration. Initially there was trouble as my time was update, so I used ChatGPT to help me with this part.

mainMedia.addEventListener("loadedmetadata", function () {
  durationDisplay.textContent = formatTime(mainMedia.duration);
});

// console.log(3 % 4);
// console.log(1 % 4);
