const albumDatabase = [
  {
    albumId: 1,
    title: "Why Lawd?",
    year: "2024",
    type: "Album",
    image:
      "https://www.jbhifi.com.au/cdn/shop/files/708896-Product-0-I-638482355404394493.jpg?v=1712638808",
    songs: [
      {
        songTitle: "ThankU (feat. Dave Chappelle)",
        artist: "NxWorries, Anderson Paak., Knxwledge, Dave Chappelle",
        trackNumber: 1,
        url: "https://youtu.be/ZiQfHLz8rzs?si=0y5xyjI6-m45gu3I",
      },
      {
        songTitle: "86Sentra",
        artist: "NxWorries, Anderson Paak., Knxwledge",
        trackNumber: 2,
      },
      {
        songTitle: "MoveOn",
        artist: "NxWorries, Anderson Paak., Knxwledge",
        trackNumber: 3,
      },
      {
        songTitle: "KeepHer (feat. Thundercat)",
        artist: "NxWorries, Anderson Paak., Knxwledge, Thundercat",
        trackNumber: 4,
      },
      {
        songTitle: "Distractions",
        artist: "NxWorries, Anderson Paak., Knxwledge",
        trackNumber: 5,
      },
      {
        songTitle: "Lookin'",
        artist: "NxWorries, Anderson Paak., Knxwledge",
        trackNumber: 6,
      },
      {
        songTitle: "Where I Go (feat. H.E.R.)",
        artist: "NxWorries, Anderson Paak., H.E.R., Knxwledge",
        trackNumber: 7,
      },
      {
        songTitle: "Daydreaming",
        artist: "NxWorries, Anderson Paak., Knxwledge",
        trackNumber: 8,
      },
      {
        songTitle: "FromHere (feat. Snoop Dogg & October London)",
        artist:
          "NxWorries, Anderson Paak., Knxwledge, Snoop Dogg, October London",
        trackNumber: 9,
      },
      {
        songTitle: "FallThru",
        artist: "NxWorries, Anderson Paak., Knxwledge",
        trackNumber: 10,
      },
      {
        songTitle: "Battlefield",
        artist: "NxWorries, Anderson Paak., Knxwledge",
        trackNumber: 11,
      },
      {
        songTitle: "HereIAm",
        artist: "NxWorries, Anderson Paak., Knxwledge",
        trackNumber: 12,
      },
      {
        songTitle: "OutTheWay (feat. Rae Khalil)",
        artist: "NxWorries, Anderson Paak., Knxwledge, Rae Khalil",
        trackNumber: 13,
      },
      {
        songTitle: "SheUsed",
        artist: "NxWorries, Anderson Paak., Knxwledge",
        trackNumber: 14,
      },
      {
        songTitle: "MoreOfIt",
        artist: "NxWorries, Anderson Paak., Knxwledge",
        trackNumber: 15,
      },
      {
        songTitle: "NVR.RMX (feat. Charlie Wilson)",
        artist: "NxWorries, Anderson Paak., Knxwledge, Charlie Wilson",
        trackNumber: 16,
      },
      {
        songTitle: "DistantSpace (feat. The Last Artful, Dodgr)",
        artist: "NxWorries, Anderson Paak., Knxwledge, The Last Artful, Dodgr",
        trackNumber: 17,
      },
      {
        songTitle: "WalkOnBy (feat. Earl Sweatshirt & Rae Khalil)",
        artist:
          "NxWorries, Anderson Paak., Knxwledge, Earl Sweatshirt, Rae Khalil",
        trackNumber: 18,
      },
      {
        songTitle: "EvnMore",
        artist: "NxWorries, Anderson Paak., Knxwledge",
        trackNumber: 19,
      },
    ],
  },
  {
    albumId: 2,
    title: "An Evening With Silk Sonic",
    year: "2021",
    type: "Album",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/8e/Silk_Sonic_-_An_Evening_with_Silk_Sonic.png",
    songs: [
      {
        songTitle: "Silk Sonic Intro",
        artist: "Bruno Mars, Anderson Paak., Silk Sonic",
        trackNumber: 1,
        url: "https://youtu.be/ZiQfHLz8rzs?si=0y5xyjI6-m45gu3I",
        image:
          "https://upload.wikimedia.org/wikipedia/en/8/8e/Silk_Sonic_-_An_Evening_with_Silk_Sonic.png ",
      },
    ],
  },
  {
    albumId: 3,
    title: "Ventura (Instrumentals)",
    year: "2019",
    type: "Album",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/57/Anderson_Paak_-_Ventura.png",
  },
  {
    albumId: 4,
    title: "Ventura",
    year: "2019",
    type: "Album",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/57/Anderson_Paak_-_Ventura.png",
  },
  {
    albumId: 5,
    title: "Malibu",
    year: "2016",
    type: "Album",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Anderson-Park-Malibu-Cover-Billboard-650x650.jpg",
  },
];

// const albumLabel = document.querySelector(".album-label");
// This JS is for adding albums into the website, so I don't need much lines of code.

const albumList = document.querySelector("#album-list");
console.log(albumList);
let postAlbum = "";
for (let i = 0; i < albumDatabase.length; i++) {
  postAlbum += `
    <div class="album-card">
        <div class="album-cover">
          <img src="${albumDatabase[i].image}" alt="" />
        </div>
        <div class="album-label">
            <div class="album-title">${albumDatabase[i].title}</div>
            <div class="album-subtitle">${albumDatabase[i].year}</div>
        </div>
    </div>
  `;
}

albumList.innerHTML = postAlbum;

const albumCards = document.querySelector(".album-card");

// Top Songs Database

topSongsDatabase = [
  {
    id: 1,
    songName: "Leave the Door Open",
    artist: "Bruno Mars, Anderson Paak., Silk Sonic",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/8e/Silk_Sonic_-_An_Evening_with_Silk_Sonic.png ",
    audioLink: url(),
    videoLink: "https://www.youtube.com/watch?v=adLGHcj_fmA",
  },
  {
    id: 2,
    songName: "places to be",
    artist: "Fred again.., Anderson Paak. CHIKA",
    image: "why-lawd.png",
  },
  {
    id: 3,
    songName: "Smoking Out The Window",
    artist: "Bruno Mars, Anderson Paak., Silk Sonic",
    image: "why-lawd.png",
  },
  {
    id: 4,
    songName: "After Last Night (w/ Thundercat & Bootsy Collins)",
    artist: "Fred again.., Anderson Paak. CHIKA",
    image: "why-lawd.png",
  },
  {
    id: 5,
    songName: "Dang! (feat. Anderson Paak.)",
    artist: "Mac Miller, Anderson Paak.",
    image: "why-lawd.png",
  },
  {
    id: 6,
    songName: "Skate",
    artist: "Bruno Mars, Anderson Paak., Silk Sonic",
    image: "why-lawd.png",
  },
  {
    id: 7,
    songName: "Come Down",
    artist: "Anderson Paak.",
    image: "why-lawd.png",
  },
  {
    id: 8,
    songName: "Love's Train",
    artist: "Bruno Mars, Anderson Paak., Silk Sonic",
    image: "why-lawd.png",
  },
  {
    id: 9,
    songName: "Am I Wrong (feat. ScHoolboy Q)",
    artist: "Anderson Paak., ScHoolboy Q",
    image: "why-lawd.png",
  },
  {
    id: 10,
    songName: "Make it Better (feat. Smokey Robinson)",
    artist: "Anderson Paak., Smokey Robninson",
    image: "why-lawd.png",
  },
];

const topSongList = document.querySelector("#top-song-list");
const audioPlayer = document.getElementById("audioPlayer");

var postTopSong = "";
for (var j = 0; j < topSongsDatabase.length; j++) {
  postTopSong += `
    <div class="song-card" data-audio-link="${topSongsDatabase[j].audioLink}">
        <div class="album-cover-container">
          <img src="${topSongsDatabase[j].image}" alt="" />
          <div class="song-play-btn">
            <img src="play.svg"></img>
          </div>
        </div>
        <div class="album-label">
          <div class="album-title">${topSongsDatabase[j].songName}</div>
          <div class="album-subtitle">${topSongsDatabase[j].artist}</div>
        </div>
    </div>`;
}

topSongList.innerHTML = postTopSong;

const songCards = document.querySelectorAll(".song-card");
songCards.forEach(function (card) {
  card.addEventListener("click", function () {
    const audioSource = this.getAttribute("audioLink"); // Get audio source from data attribute

    // Set the audio player's source
    audioPlayer.src = audioSource; // Use the audio link directly
    audioPlayer.play(); // Play the audio
  });
});
