const albumDatabase = [
  {
    albumId: 1,
    title: "Why Lawd?",
    year: "2024",
    type: "Album",
    image: "why-lawd.png",
    songs: [
      {
        songTitle: "ThankU (feat. Dave Chappelle)",
        artist: "NxWorries, Anderson Paak., Knxwledge, Dave Chappelle",
        trackNumber: 1,
        url: "https://open.spotify.com/track/6A5axPueEwxqUdi5JtZlpW?si=1b77cdae3a594ad5",
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
    image: "why-lawd.png",
  },
  {
    albumId: 3,
    title: "Ventura (Instrumentals)",
    year: "2019",
    type: "Album",
    image: "why-lawd.png",
  },
  {
    albumId: 4,
    title: "Ventura",
    year: "2019",
    type: "Album",
    image: "why-lawd.png",
  },
  {
    albumId: 4,
    title: "Malibu",
    year: "2016",
    type: "Album",
    image: "why-lawd.png",
  },
];

// const albumLabel = document.querySelector(".album-label");

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

// Top Songs

topSongsDatabase = [
  {
    id: 1,
    songName: "Leave the Door Open",
    artist: "Bruno Mars, Anderson Paak., Silk Sonic",
    image: "why-lawd.png",
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
    songName: "After Last Night (with Thundercat & Bootsy Collins)",
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
console.log(topSongList);
let postTopSong = "";
for (let i = 0; i < topSongsDatabase.length; i++) {
  postTopSong += `
    <div class="song-card">
        <img src="${topSongsDatabase[i].image}" alt="" />
            <div class="album-label">
                <div class="album-title">${topSongsDatabase[i].songName}</div>
                <div class="album-subtitle">${topSongsDatabase[i].artist}</div>
            </div>
    </div>`;
}

topSongList.innerHTML = postTopSong;
