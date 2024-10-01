// To contorl the ball we need acces to the the ball

const ball = document.querySelector(".ball");
console.log(ball);

// Translate logic

const moveButton = document.querySelector("#move-button");
console.log(moveButton);

moveButton.addEventListener("click", moveBall);

// Access the outer box and check its width
const outer = document.querySelector(".outer");
console.log(outer);
let outerWidth = outer.clientWidth / 2 - 60;
console.log(outerWidth);

let moveBallCount = 0;

let distance = 0;

function moveBall() {
  distance = 100;
  //   ball.style.transform = `translateX(${distance}px)`;
  distance += 15;
  transformBall();

  //   if (moveBallCount % 2 === 0) {
  //     // ball.style.transform = `translateX(${distance}px)`;
  //   } else {
  //     ball.style.transform = `translateX(-${distance}px)`;
  //   }

  moveBallCount++;

  // Another function
  //   if (distance < outerWidth) {
  //     distance += 30;
  //     console.log(distance);
  //     ball.style.transform = `translateX(${distance}px)`;
  //   }
}

// Rotate Logic
const rotateButton = document.querySelector("#rotate-button");
console.log(rotateButton);

rotateButton.addEventListener("click", rotateBall);

let angle = 0;

function rotateBall() {
  angle += 15;
  transformBall();
  //   ball.style.transform = `rotate(${angle}deg)`;
}

// Scale Logic
const scaleButton = document.querySelector("#scale-button");
console.log(scaleButton);

scaleButton.addEventListener("click", scaleBall);

let size = 1;

function scaleBall() {
  size += 0.1;
  transformBall();
  //   ball.style.transform = `scale(${size})`;
}

// Altogether
function transformBall() {
  ball.style.transform = `translateX(${distance}px) rotate(${angle}deg) scale(${size})`;
}

// Reset
const resetButton = document.querySelector("#reset-button");
console.log(resetButton);
resetButton.addEventListener("click", resetBall);
function resetBall() {
  distance = 0;
  angle = 0;
  size = 1;
  transformBall();
}
