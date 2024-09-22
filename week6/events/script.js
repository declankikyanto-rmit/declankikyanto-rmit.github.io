// const primaryBtn = document.querySelector("#primaryBtn");

// console.log(primaryBtn);

// primaryBtn.addEventListener("click", btnClicked);
// let clickCount = 0;

// const count = document.querySelector("#count");

// function btnClicked() {
//   console.log("button clicked!");
//   //   clickCount = clickCount + 1;
//   clickCount++;
//   count.textContent = clickCount;
// }

const boxContainer = document.querySelector(".box-container");
console.log(boxContainer);

// Toggle Button event listener

const toggleButton = document.querySelector("#toggle-button");
console.log(toggleButton);

toggleButton.addEventListener("click", toggleMe);

function toggleMe() {
  console.log("Toggle button is clicked!");
  boxContainer.classList.add("row-reverse");
}

// Add Button event listener

const addButton = document.querySelector("#add-button");
console.log(addButton);

addButton.addEventListener("click", addMe);

let count = 0;

function addMe() {
  console.log("Add button is clicked!");
  if (count % 2 === 0) {
    boxContainer.innerHTML += `<div class="box purple-box"></div>`;
  } else {
    boxContainer.innerHTML += `<div class="box coral-box"></div>`;
  }
  count++;
}

// Remove Button event listener

const removeButton = document.querySelector("#remove-button");
console.log(removeButton);

removeButton.addEventListener("click", removeMe);

function removeMe() {
  let lastBox = boxContainer.lastElementChild;
  console.log(lastBox);
  if (lastBox) {
    lastBox.remove();
  }
  count--;
}

boxContainer.addEventListener("mouseover", dropMe);
boxContainer.addEventListener("mouseout", pickMe);

function dropMe() {
  boxContainer.classList.add("drop");
}

function pickMe() {
  boxContainer.classList.remove("drop");
}
