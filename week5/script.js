console.log("Welcome to Interactive Media");
// This is a single line comment
// This is another comment

// let count = 10;
// console.log(count);

// const name = prompt("Your name, please");
// console.log("Hello", name);

// const myName = "Declan";
// const myCity = "Melbourne";
// console.log(myName, "lives in", myCity);

// count = 20;
// console.log(count);

{
  // Only accessed within {}
  let a = 25;
  let b = 30;
  // console.log(b);
}

// let isItRaining = false;
// console.log(isItRaining);
// let isItOARTClass = true;
// console.log(isItOARTClass);

// const studentRecord = {
//   name: "Declan",
//   id: 3963443,
//   class: "OART1013",
//   amIScienceStudent: false,
//   amIDesignStudent: true,
// };

// if (studentRecord.amIDesignStudent === true) {
//   console.log("Welcome to Design class");
// } else {
//   console.log("You're in the wrong class!");
// }

// console.log(studentRecord.AmIDesignStudent);
// console.log(studentRecord.name, "is a", studentRecord.class, "student");
// console.log(`${studentRecord.name} is a ${studentRecord.class} student`);

// let LADodgersPlayers = [
//   "S Ohtani",
//   "M Betts",
//   "F Freeman",
//   "T Hernández",
//   "C Taylor",
//   "G Lux",
//   "W Smith",
//   "M Muncy",
//   "T Edman",
//   "M Rojas",
// ];

// console.log(LADodgersPlayers);
// console.log(LADodgersPlayers[3]);

// let isItRaining = false;
// console.log(isItRaining);
// if (isItRaining === true) {
//   console.log("Please bring umbrella");
// } else {
//   console.log("You're good to go!");
// }

// let myGrade = 10;
// if (myGrade >= 80) {
//   console.log("High Distinction");
// } else if (myGrade < 80 && myGrade >= 70) {
//   console.log("Distinction");
// } else if (myGrade < 70 && myGrade >= 60) {
//   console.log("Credit");
// } else if (myGrade < 60 && myGrade >= 50) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }

// console.log("Hello S Ohtani");
// console.log("Hello M Betts");
// console.log("Hello F Freeman");
// console.log("Hello T Hernández");

/*
let playerNames = [
  "S Ohtani",
  "M Betts",
  "F Freeman",
  "T Hernández",
  "C Taylor",
  "G Lux",
  "W Smith",
  "M Muncy",
  "T Edman",
  "M Rojas",
];

console.log(playerNames.length);

for (let i = 0; i < playerNames.length; i++) {
  console.log("Welcome", playerNames[i]);
}
*/

let playerStats = [
  { player: "Luka Doncic", points: 32 },
  { player: "Kyrie Irving", points: 29 },
  { player: "PJ Washington", points: 14 },
  { player: "Derrick Jones Jr.", points: 19 },
  { player: "Derek Lively II", points: 12 },
  { player: "Tim Hardaway Jr", points: 5 },
];

// let total =
//   playerStats[0].points +
//   playerStats[1].points +
//   playerStats[2].points +
//   playerStats[3].points +
//   playerStats[4].points;

// console.log("Total Points is", total);

let sum = 0;

for (let i = 0; i < playerStats.length; i++) {
  sum = sum + playerStats[i].points;
  console.log("Total team points is", sum);
}
