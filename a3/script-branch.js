// Before I start developing my javaScript, I start by creating the "database" using arrays and objects. From there, I just listed out all the data that I feel would be useful and that I want to be displayed

const playerList = [
  {
    orderNo: 1,
    playerName: "Alex Caruso",
    jerseyNumber: "9",
    playerPosition: "SG",
    playerAge: "30",
    playerHeight: "1.96m",
    playerWeight: "84 kg",
    teamStarter: false,
    playerImage: "alex-caruso.webp",
    experience: "7 Years",
    // If you look at here, there are nested array within objects. This is because I want to display a player's statistics not only in one specific year/timeframe, but multiple. But for this project I just want to display 2 years / player as I just want to learn how I can manipulate arrays and object and to see whether what I can execute what I have in mind.
    stats: [
      {
        year: "2024-25",
        GP: 3,
        MIN: 20.7,
        PTS: 1.7,
        REB: 3.3,
        AST: 2.3,
        STL: 1.7,
        BLK: 1.3,
      },
      {
        year: "2023-24",
        GP: 71,
        MIN: 28.7,
        PTS: 10.1,
        REB: 3.8,
        AST: 3.5,
        STL: 1.7,
        BLK: 1.01,
      },
    ],
  },
  {
    orderNo: 2,
    playerName: "Ousmane Dieng",
    jerseyNumber: "13",
    playerPosition: "PF",
    playerAge: "21",
    playerHeight: "2.06m",
    playerWeight: "83 kg",
    teamStarter: false,
    playerImage: "ousmane-dieng.webp",
    experience: "2   Years",
    stats: [
      {
        year: "2024-25",
        GP: 3,
        MIN: 14.0,
        PTS: 5.7,
        REB: 3.3,
        AST: 0.3,
        STL: 0.0,
        BLK: 0.7,
      },
      {
        year: "2023-24",
        GP: 33,
        MIN: 11.1,
        PTS: 4.0,
        REB: 1.5,
        AST: 1.1,
        STL: 0.2,
        BLK: 0.2,
      },
    ],
  },
  {
    orderNo: 3,
    playerName: "Lugentz Dort",
    jerseyNumber: "25",
    playerPosition: "SF",
    playerAge: "25",
    playerHeight: "1.93m",
    playerWeight: "99 kg",
    teamStarter: true,
    playerImage: "lugentz-dortz.webp",
    experience: "5 Years",
    stats: [
      {
        year: "2024-25",
        GP: 3,
        MIN: 27.3,
        PTS: 9.3,
        REB: 2.0,
        AST: 0.7,
        STL: 1.0,
        BLK: 0.3,
      },
      {
        year: "2023-24",
        GP: 79,
        MIN: 28.4,
        PTS: 10.9,
        REB: 3.6,
        AST: 1.4,
        STL: 0.9,
        BLK: 0.6,
      },
    ],
  },
  {
    orderNo: 4,
    playerName: "Shai-Gilgeous Alexander",
    jerseyNumber: "2",
    playerPosition: "PG",
    playerAge: "26",
    playerHeight: "1.98m",
    playerWeight: "88 kg",
    teamStarter: true,
    playerImage: "shai-gilgeous-alexander.webp",
    experience: "6 Years",
    stats: [
      {
        year: "2024-25",
        GP: 3,
        MIN: 34.0,
        PTS: 28.7,
        REB: 8.7,
        AST: 6.3,
        STL: 3.0,
        BLK: 2.0,
      },
      {
        year: "2023-24",
        GP: 75,
        MIN: 34.0,
        PTS: 30.1,
        REB: 5.5,
        AST: 6.2,
        STL: 2.0,
        BLK: 0.9,
      },
    ],
  },
  {
    orderNo: 5,
    playerName: "Isaiah Hartenstein",
    jerseyNumber: "55",
    playerPosition: "C",
    playerAge: "26",
    playerHeight: "2.13m",
    playerWeight: "113 kg",
    teamStarter: false,
    playerImage: "isaiah-hartenstein.webp",
    experience: "6 Years",
    stats: [
      {
        year: "2024-25",
        GP: 0,
        MIN: 0,
        PTS: 0,
        REB: 0,
        AST: 0,
        STL: 0,
        BLK: 0,
      },
      {
        year: "2023-24",
        GP: 75,
        MIN: 25.3,
        PTS: 7.8,
        REB: 8.3,
        AST: 2.5,
        STL: 1.2,
        BLK: 1.1,
      },
    ],
  },
  {
    orderNo: 6,
    playerName: "Chet Holmgren",
    jerseyNumber: "7",
    playerPosition: "C",
    playerAge: "22",
    playerHeight: "2.16m",
    playerWeight: "94 kg",
    teamStarter: true,
    playerImage: "chet-holmgren.png",
    experience: "1 Years",
    stats: [
      {
        year: "2024-25",
        GP: 3,
        MIN: 32.7,
        PTS: 23.7,
        REB: 13.0,
        AST: 3.0,
        STL: 1.3,
        BLK: 4.0,
      },
      {
        year: "2023-24",
        GP: 82,
        MIN: 29.4,
        PTS: 16.5,
        REB: 7.9,
        AST: 2.4,
        STL: 0.6,
        BLK: 2.3,
      },
    ],
  },
  {
    orderNo: 7,
    playerName: "Isaiah Joe",
    jerseyNumber: "11",
    playerPosition: "SG",
    playerAge: "25",
    playerHeight: "1.91m",
    playerWeight: "74 kg",
    teamStarter: true,
    playerImage: "isaiah-joe.webp",
    experience: "4 Years",
    stats: [
      {
        year: "2024-25",
        GP: 3,
        MIN: 16.0,
        PTS: 6.3,
        REB: 1.3,
        AST: 1.0,
        STL: 0.0,
        BLK: 0.0,
      },
      {
        year: "2023-24",
        GP: 78,
        MIN: 18.5,
        PTS: 8.2,
        REB: 2.3,
        AST: 1.3,
        STL: 0.6,
        BLK: 0.3,
      },
    ],
  },
  {
    orderNo: 8,
    playerName: "Cason Wallace",
    jerseyNumber: "22",
    playerPosition: "PG",
    playerAge: "25",
    playerHeight: "1.91m",
    playerWeight: "88 kg",
    teamStarter: false,
    playerImage: "cason-wallace.webp",
    experience: "1 Years",
    stats: [
      {
        year: "2024-25",
        GP: 3,
        MIN: 25.3,
        PTS: 6.0,
        REB: 4.7,
        AST: 1.0,
        STL: 2.7,
        BLK: 0.0,
      },
      {
        year: "2023-24",
        GP: 82,
        MIN: 20.6,
        PTS: 6.8,
        REB: 2.3,
        AST: 1.5,
        STL: 0.9,
        BLK: 0.5,
      },
    ],
  },
  {
    orderNo: 9,
    playerName: "Aaron Wiggins",
    jerseyNumber: "21",
    playerPosition: "SF",
    playerAge: "25",
    playerHeight: "1.96m",
    playerWeight: "86 kg",
    teamStarter: false,
    playerImage: "aaron-wiggins.webp",
    experience: "3 Years",
    stats: [
      {
        year: "2024-25",
        GP: 3,
        MIN: 17.7,
        PTS: 10.7,
        REB: 3.3,
        AST: 1.0,
        STL: 0.7,
        BLK: 0.7,
      },
      {
        year: "2023-24",
        GP: 78,
        MIN: 15.7,
        PTS: 6.9,
        REB: 2.4,
        AST: 1.1,
        STL: 0.7,
        BLK: 0.2,
      },
    ],
  },
  {
    orderNo: 10,
    playerName: "Jaylen Williams",
    jerseyNumber: "11",
    playerPosition: "PF",
    playerAge: "23",
    playerHeight: "1.96m",
    playerWeight: "95 kg",
    teamStarter: true,
    playerImage: "jalen-williams.webp",
    experience: "2 Years",
    stats: [
      {
        year: "2024-25",
        GP: 3,
        MIN: 33.3,
        PTS: 18.7,
        REB: 7.0,
        AST: 5.3,
        STL: 0.7,
        BLK: 0.7,
      },
      {
        year: "2023-24",
        GP: 71,
        MIN: 31.3,
        PTS: 19.1,
        REB: 4.0,
        AST: 4.5,
        STL: 1.1,
        BLK: 0.6,
      },
    ],
  },
];

// Updating the table through JS (taking data from arrays).
// What I did here was initially make a variable that selects the container I want to display my data for each player group (Starter/Bench)

const starterDisplay = document.querySelector("#starterDisplay");
const benchDisplay = document.querySelector("#benchDisplay");

// Then from there I used a forEach function that lets the function run through all the players in playerList array and cross check it whether the teamStarter value is true/false. If it's true it will be displayed in the "Starter", if it's false it will be displaye in the "Bench"

var postStarterStats = "";
for (var i = 0; i < playerList.length; i++) {
  if (playerList[i].teamStarter === true) {
    // Here i just use template literals to add on row for each person, using the interpolation I retrieve data based on the [i] returned by the forEach function
    postStarterStats += `
    <tr>
        <td class="player-name">${playerList[i].playerName}<span class="player-position">${playerList[i].playerPosition}</span></td>
        <td>${playerList[i].stats[0].MIN}</td>
        <td>${playerList[i].stats[0].PTS}</td>
        <td>${playerList[i].stats[0].REB}</td>
        <td>${playerList[i].stats[0].AST}</td>
        <td>${playerList[i].stats[0].STL}</td>
        <td>${playerList[i].stats[0].BLK}</td>
    </tr>
    `;
  }
}

// Then after all of that is done I just append all of the content into the container using innerHTML
starterDisplay.innerHTML = postStarterStats;

var postBenchStats = "";
for (var i = 0; i < playerList.length; i++) {
  if (playerList[i].teamStarter === false) {
    postBenchStats += `
      <tr>
          <td class="player-name">${playerList[i].playerName}<span class="player-position">${playerList[i].playerPosition}</span></td>
          <td>${playerList[i].stats[0].MIN}</td>
          <td>${playerList[i].stats[0].PTS}</td>
          <td>${playerList[i].stats[0].REB}</td>
          <td>${playerList[i].stats[0].AST}</td>
          <td>${playerList[i].stats[0].STL}</td>
          <td>${playerList[i].stats[0].BLK}</td>
      </tr>
      `;
  }
}

benchDisplay.innerHTML = postBenchStats;

// Tab functionality + setting state
// I started by again making variables for each button.
var starterTab = document.getElementById("starter-tab");
var benchTab = document.getElementById("bench-tab");

var tabs = document.querySelectorAll(".tab");

// Then I attached event listeners to listen for click for each button. E.g. if the starter button is clicked, it will run the setStatus function which will:
// 1. Change the statusState to "Starter"
// 2. Change the starterTab to "benchTab", which will reverse the classList.add and classList.remove (this will affect the button styling)
// 3. Change the benchTab to "starterTab", same effect as the above
// 4. Then I also add console.log to double check the currentStatus
// 5. Finally, It will run the function displayPlayers, which is explain below later.
starterTab.addEventListener("click", function () {
  setStatus("Starter", benchTab, starterTab);
  console.log(currentStatus);
  displayPlayers();
});

// Same thing for this function, but its just vice versa
benchTab.addEventListener("click", function () {
  setStatus("Bench", starterTab, benchTab);
  console.log(currentStatus);
  // Run the function displayPlayers that has been created in the bottom.
  displayPlayers();
});

// I let the Initial display: Show starters on page load
let currentStatus = "Starter";

// This function just change the currentStatus, and it just remove "active-tab" on the previous button and adds it on the clicked button
function setStatus(statusState, starterTab, benchTab) {
  currentStatus = statusState;

  starterTab.classList.remove("active-tab");
  benchTab.classList.add("active-tab");
}

var courtPlaceholder = document.querySelector(".court-placeholder");

// Displaying player based on currentStatus
// So here I just created a variables called selectedPlayers that filter the objects (players) within the array playerList. It checks whether the player.teamStarter = currentStatus === "Starter". So if a player has teamStarter set to true, it will be declared as a one of the players in selectedPlayers.
function displayPlayers() {
  const selectedPlayers = playerList.filter(
    (player) => player.teamStarter === (currentStatus === "Starter")
  );

  // Then from there, the selectedPlayers goes through a forEach function again. This time it creates a variables that gets the player's position. Then it will get a unique id (position), whether its PG, SG, SG, etc. If the position exists within the HTML it will set the playerImage.src into that specific position image then it will be appended to the Court illustration.

  selectedPlayers.forEach((player) => {
    const playerImage = document.getElementById(player.playerPosition);
    if (playerImage) {
      playerImage.src = player.playerImage;
    }
  });
}

let selectedPlayer = null;
const tableHeader = document.querySelector(".table-header");
console.log(tableHeader);

// This functions is used to create a functionality where if we click on a certain player, their statistics will show up on the right part of the screen.

function onClickDisplay() {
  const playerImages = document.querySelectorAll(".player");

  // Here we run a forEach function too loop through and gets every individual player from the list.
  playerImages.forEach((playerImage) => {
    // Then we add event listener that listens for a click.
    playerImage.addEventListener("click", () => {
      // When it's clicked the code checks for any existing player that has been clicked and reset the scale to 1.
      if (selectedPlayer) {
        selectedPlayer.style.transform = "scale(1)";
      }

      // Then from there, the clicked playerImage is set as the new selectedPlayer and the scale increase to 1.15
      selectedPlayer = playerImage;
      selectedPlayer.style.transform = "scale(1.15)";

      // Then it will find the full player data from playerList based on the position (id) and their teamStarter status (starter or bench), this way the code can get a specific player out of 10 players.
      const clickedPlayerData = playerList.find(
        (player) =>
          player.playerPosition === playerImage.id &&
          player.teamStarter === (currentStatus === "Starter")
      );

      // From there, the player exist in the playerList array, it will display that player data in the table.
      if (clickedPlayerData) {
        tableHeader.textContent = "Player Profile";
        displayPlayerProfile(clickedPlayerData);
        resetButton.style.display = "inline-block";
        console.log("Selected Player Data:", clickedPlayerData);
      }
    });

    // I also added an event listener that listen for a mouseleave. When a mouse leave this player, it's scale will reset to 1 (this is done so users know the players are clickable, and with the hover effect (scale size to 1.15), user knows which players are they're hovering on
    playerImage.addEventListener("mouseleave", () => {
      if (selectedPlayer !== playerImage) {
        playerImage.style.transform = "scale(1)";
      }
    });

    // This event listeners listens for a mouseenter for each playerImage, and if there is one, it will scale that playerImage into 1.15.
    playerImage.addEventListener("mouseenter", () => {
      if (selectedPlayer !== playerImage) {
        playerImage.style.transform = "scale(1.15)";
      }
    });
  });
}

onClickDisplay();

// Finally, this is one of the last functionality: Replacing table content.
// We use template literals with interpolation inside to add the player-data that will be displayed in the right-hand side container once a player is selected.

function displayPlayerProfile(playerData) {
  const tableContent = document.querySelector(".table-main");
  console.log(tableContent);

  tableContent.innerHTML = `
  <div class="player-profile">
      <div class="player-profile-image" style="background-image: url('${
        playerData.playerImage
      }');"></div>
      <div class="player-profile-data">
        <span id="player-profile-name">${playerData.playerName}</span>
        <div class="data-row">
          <div class="data-label">Position</div>
          <div class="data-input">${playerData.playerPosition}</div>
        </div>
        <div class="data-row">
          <div class="data-label">Jersey No</div>
          <div class="data-input">#${playerData.jerseyNumber}</div>
        </div>
        <div class="data-row">
          <div class="data-label">Shoots</div>
          <div class="data-input">${playerData.shoots || "Right"}</div>
        </div>
        <div class="data-row">
          <div class="data-label">Height</div>
          <div class="data-input">${playerData.playerHeight}</div>
        </div>
        <div class="data-row">
          <div class="data-label">Weight</div>
          <div class="data-input">${playerData.playerWeight}</div>
        </div>
        <div class="data-row">
          <div class="data-label">Team</div>
          <div class="data-input">${playerData.team || "OKC Thunder"}</div>
        </div>
        <div class="data-row">
          <div class="data-label">Experience</div>
          <div class="data-input">${playerData.experience || "1 year"}</div>
        </div>
      </div>
    </div>
    <table>
      <thead>
      <tr>
          <th>YEAR</th>
          <th>GP</th>
          <th>MINS</th>
          <th>PTS</th>
          <th>REB</th>
          <th>AST</th>
          <th>STL</th>
          <th>BLK</th>
        </tr>
      </thead>
      <tbody id="playerDisplay">
      </tbody>
    </table>`;

  // Set a variable that selects #playerDisplay
  const playerDisplay = document.getElementById("playerDisplay");

  // It then loops each player stats (playerData.stats), and then for each stats it creates a new table row (tr), within each row there are table data (td) that represents each stats of that player.
  playerData.stats.forEach((stat) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${stat.year}</td>
      <td>${stat.GP}</td>
      <td>${stat.MIN}</td>
      <td>${stat.PTS}</td>
      <td>${stat.REB}</td>
      <td>${stat.AST}</td>
      <td>${stat.STL}</td>
      <td>${stat.BLK}</td>
    `;
    // Finally it appends each row to the playerDisplay variable
    playerDisplay.appendChild(row);
  });
}

// Reset back to Team Lineup
// To create a button that reset the right-hand container to a team lineup display, I created two variables that declares the resetButton and tableContent

const resetButton = document.querySelector(".reset-button");
const tableContent = document.querySelector(".table-main");

// I also store the actual HTML of the initial team-lineup
const initialTeamLineupHTML = `
  <table>
    <thead>
      <tr>
        <th>STARTERS</th>
        <th>MINS</th>
        <th>PTS</th>
        <th>REB</th>
        <th>AST</th>
        <th>STL</th>
        <th>BLK</th>
      </tr>
    </thead>
    <tbody id="starterDisplay"></tbody>
    <thead class="bench-table-header">
      <tr>
        <th>BENCH</th>
        <th>MINS</th>
        <th>PTS</th>
        <th>REB</th>
        <th>AST</th>
        <th>STL</th>
        <th>BLK</th>
      </tr>
    </thead>
    <tbody id="benchDisplay"></tbody>
  </table>
`;

// Then I use this function to reset the right-hand container into the team lineup container.
function resetToTeamLineup() {
  // tableContent.innerHTML = initialTeamLineupHTML;
  // 1. It checks if the tableContent element exist or not, if it exist we proceed.
  if (tableContent) {
    // 2. We then change the button "Go to Team Lineup" display to none
    resetButton.style.display = "none";
    // 3. We change the header from "Player Profile" back to "Team Lineup"
    tableHeader.textContent = "Team Lineup";
    // 4. We then add table (copied from HTML) to the tableContent container that displays player statistics (both Starters and Bench)
    tableContent.innerHTML = `
    <table>
        <thead>
          <tr>
            <th>STARTERS</th>
            <th>MINS</th>
            <th>PTS</th>
            <th>REB</th>
            <th>AST</th>
            <th>STL</th>
            <th>BLK</th>
          </tr>
        </thead>
        <tbody id="starterDisplay"></tbody>
        <thead class="bench-table-header">
          <tr>
            <th>BENCH</th>
            <th>MINS</th>
            <th>PTS</th>
            <th>REB</th>
            <th>AST</th>
            <th>STL</th>
            <th>BLK</th>
          </tr>
        </thead>
        <tbody id="benchDisplay"></tbody>
      </table>`;
  }

  // 5. Here we just re-run the function that has been written on top to fill out the player statistics using JS.
  const starterDisplay = document.getElementById("starterDisplay");
  if (starterDisplay) {
    starterDisplay.innerHTML = postStarterStats;
  }

  // 6. Same goes here for the bench
  const benchDisplay = document.getElementById("benchDisplay");
  if (benchDisplay) {
    benchDisplay.innerHTML = postBenchStats;
  }
}

// 7. Finally we added event listeners to listen to click on the resetToTeamLineup button and execute the function
resetButton.addEventListener("click", resetToTeamLineup);
