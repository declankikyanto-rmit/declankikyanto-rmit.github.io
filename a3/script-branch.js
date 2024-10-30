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

// Updating the table through JS (taking data from arrays)

const starterDisplay = document.querySelector("#starterDisplay");
const benchDisplay = document.querySelector("#benchDisplay");

var postStarterStats = "";
for (var i = 0; i < playerList.length; i++) {
  if (playerList[i].teamStarter === true) {
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
var starterTab = document.getElementById("starter-tab");
var benchTab = document.getElementById("bench-tab");

var tabs = document.querySelectorAll(".tab");

// Attach event listeners to tabs
starterTab.addEventListener("click", function () {
  setStatus("Starter", benchTab, starterTab);
  console.log(currentStatus);
  displayPlayers();
});
benchTab.addEventListener("click", function () {
  setStatus("Bench", starterTab, benchTab);
  console.log(currentStatus);
  // Run the function displayPlayers that has been created in the bottom.
  displayPlayers();
});

// Initial display: Show starters on page load
let currentStatus = "Starter";

function setStatus(statusState, starterTab, benchTab) {
  currentStatus = statusState;

  starterTab.classList.remove("active-tab");
  benchTab.classList.add("active-tab");
}

var courtPlaceholder = document.querySelector(".court-placeholder");

// Displaying player based on currentStatus
function displayPlayers() {
  const selectedPlayers = playerList.filter(
    (player) => player.teamStarter === (currentStatus === "Starter")
  );

  selectedPlayers.forEach((player) => {
    const playerImage = document.getElementById(player.playerPosition);
    if (playerImage) {
      playerImage.src = player.playerImage;
    }
  });
}

//

let selectedPlayer = null;
const tableHeader = document.querySelector(".table-header");
console.log(tableHeader);

function onClickDisplay() {
  const playerImages = document.querySelectorAll(".player");

  playerImages.forEach((playerImage) => {
    playerImage.addEventListener("click", () => {
      // Reset the scale of previously selected player
      if (selectedPlayer) {
        selectedPlayer.style.transform = "scale(1)";
      }

      // Set the new selected player
      selectedPlayer = playerImage;
      selectedPlayer.style.transform = "scale(1.15)";

      // Find the full player data from playerList based on the position (id)
      const clickedPlayerData = playerList.find(
        (player) =>
          player.playerPosition === playerImage.id &&
          player.teamStarter === (currentStatus === "Starter")
      );

      // Display full player data in the console (or wherever you need it)
      if (clickedPlayerData) {
        tableHeader.textContent = "Player Profile";
        displayPlayerProfile(clickedPlayerData);
        resetButton.style.display = "inline-block";
        console.log("Selected Player Data:", clickedPlayerData);
      }
    });

    // Reset scale on mouse leave if not selected
    playerImage.addEventListener("mouseleave", () => {
      if (selectedPlayer !== playerImage) {
        playerImage.style.transform = "scale(1)";
      }
    });

    // Enlarge on hover only if not selected
    playerImage.addEventListener("mouseenter", () => {
      if (selectedPlayer !== playerImage) {
        playerImage.style.transform = "scale(1.15)";
      }
    });
  });
}

onClickDisplay();

// Replacing table content

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

  // Get the tbody element to add rows for each year's stats
  const playerDisplay = document.getElementById("playerDisplay");

  // Loop through each year's stats and create a row for each
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
    playerDisplay.appendChild(row);
  });
}

// Reset back to Team Lineup

const resetButton = document.querySelector(".reset-button");
const tableContent = document.querySelector(".table-main");

// Store the initial HTML for the team lineup
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

// Function to reset the screen
function resetToTeamLineup() {
  // tableContent.innerHTML = initialTeamLineupHTML;
  if (tableContent) {
    resetButton.style.display = "none";
    tableHeader.textContent = "Team Lineup";
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

  const starterDisplay = document.getElementById("starterDisplay");
  if (starterDisplay) {
    starterDisplay.innerHTML = postStarterStats;
  }

  const benchDisplay = document.getElementById("benchDisplay");
  if (benchDisplay) {
    benchDisplay.innerHTML = postBenchStats;
  }
}

// Add click event listener to reset button
resetButton.addEventListener("click", resetToTeamLineup);
