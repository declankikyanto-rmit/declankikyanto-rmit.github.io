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
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDngoYDBhtPOpelODDFr8Bu9TN82kIbNGjw&s",
    img: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Water-Feature.mp3",
    id: "song-4",
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

// Play Button functionality
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

// playMedia function
function playMedia(no) {
  mainMedia.pause();
  mainMedia.src = songList[no].src;
  currentlyPlayedTitle.textContent = songList[no].songName;
  currentlyPlayedSubtitle.textContent = songList[no].artist;
  currentlyPlayedAlbumCover.src = songList[no].img;
  mainMedia.load();
  mainMedia.play();
}

// Skip and Back functionality

const skipBtn = document.querySelector("#skip-btn");
skipBtn.addEventListener("click", skipSong);

const backBtn = document.querySelector("#back-btn");
backBtn.addEventListener("click", backSong);

let songOrder = 0;

function backSong() {
  console.log("Previous Song Loading");
  songOrder = (songOrder - 1 + songList.length) % songList.length;
  console.log(songOrder);
  playMedia(songOrder);
  playBtn.src = "pause-circular.svg";
}

function skipSong() {
  console.log("Next Song Loading");
  songOrder = (songOrder + 1) % songList.length;
  console.log(songOrder);
  playMedia(songOrder);
  playBtn.src = "pause-circular.svg";
}

// Repeat functionality (maybe change)
let repeat = false;

const repeatBtn = document.querySelector("#repeat-btn");
repeatBtn.addEventListener("click", repeatSong);

mainMedia.addEventListener("ended", replay);

function replay() {
  console.log("Repeat is", repeat);
  if (repeat) {
    mainMedia.currentTime = 0;
    mainMedia.play();
  }
}

function repeatSong() {
  if (repeat) {
    repeat = false;
    repeatBtn.style.backgroundColor = "transparent";
  } else {
    repeat = true;
    repeatBtn.style.backgroundColor = "gold";
  }
}

// Mute and unmute functionality

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

//  Randomizer functionality
const randomBtn = document.querySelector("#randomize-btn");
randomBtn.addEventListener("click", getRandomSong);

function getRandomSong() {
  const randomIndex = Math.floor(Math.random() * songList.length);
  playMedia(randomIndex);
  playBtn.src = "pause-circular.svg";
}

console.log(3 % 4);
console.log(1 % 4);
