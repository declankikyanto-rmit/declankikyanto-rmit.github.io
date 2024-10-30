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
        <td>36</td>
        <td>28</td>
        <td>7</td>
        <td>8</td>
        <td>2</td>
        <td>3</td>
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
          <td>36</td>
          <td>28</td>
          <td>7</td>
          <td>8</td>
          <td>2</td>
          <td>3</td>
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

const newChild = document.createElement("p");
newChild.textContent = "Hello, I'm a new child element!";
const oldChild = document.createElement("p");
oldChild.textContent = "Hello, I'm an old one!";

// Create a function that checks whether the currentStatus is Starter or Bench, and from there it will display players accordingly
// function displayPlayers() {
//   let result;
//   if (currentStatus === "Starter") {
//     // Display the players (don't use add/append rather just replace and do cross-checking)
//     courtPlaceholder.appendChild(newChild);
//     courtPlaceholder.removeChild(oldChild);
//   } else if (currentStatus === "Bench") {
//     courtPlaceholder.appendChild(oldChild);
//     courtPlaceholder.removeChild(newChild);
//   }
// }

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

// const player = document.querySelectorAll(".player");

// player.addEventListener("mouseover", addHoverEffect);

// Hover Effect
// function addHoverEffect() {
//   const playerImages = document.querySelectorAll(".player");

//   playerImages.forEach((playerImage) => {
//     playerImage.addEventListener("mouseover", () => {
//       playerImage.style.transition = "transform 0.3s ease";
//       playerImage.style.transform = "scale(1.15)";
//     });

//     playerImage.addEventListener("mouseleave", () => {
//       playerImage.style.transform = "scale(1)";
//     });
//   });
// }

// addHoverEffect();

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
        tableHeader.textContent = clickedPlayerData.playerName;
        // tableHeader.
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

// Reset back to Team Lineup

const resetButton = document.querySelector(".reset-button");
console.log(resetButton);
