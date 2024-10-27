// Working on the hover effect

const xavierWorthy = document.querySelector("#xavier-worthy");
console.log(xavierWorthy);
const moreInfo = document.querySelector("#more-info");
xavierWorthy.addEventListener("mouseover", showMoreInfo);
xavierWorthy.addEventListener("mouseout", hideMoreInfo);

function showMoreInfo() {
  moreInfo.classList.add("show");
}

function hideMoreInfo() {
  moreInfo.classList.remove("show");
}

// Click button to open navBar

const profileButton = document.querySelector("#profile-button");
const profileContent = document.querySelector("#profile-content");

profileButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  profileContent.classList.toggle("show");
}

// Scrolling navigation

const bottomButton = document.querySelector("#bottom-button");
console.log(bottomButton);
bottomButton.addEventListener("click", goToBottom);

function goToBottom() {
  window.location.href = "#bottom";
}

const topButton = document.querySelector("#top-button");
console.log(topButton);
topButton.addEventListener("click", goToTop);

function goToTop() {
  window.location.href = "#top";
}

// Scroll (horizontal + vertical)
const scrollContent = document.querySelector("#scroll-content");

const hscrollButton = document.querySelector("#hscroll-button");
console.log(hscrollButton);

hscrollButton.addEventListener("click", getHScroll);

const hscroll = document.querySelector("#hscroll");

function getHScroll() {
  hscroll.textContent = scrollContent.scrollLeft;
}

const vscrollButton = document.querySelector("#vscroll-button");
console.log(vscrollButton);

vscrollButton.addEventListener("click", getVScroll);

const vscroll = document.querySelector("#vscroll");

function getVScroll() {
  vscroll.textContent = scrollContent.scrollTop;
}

const hscroll150Button = document.querySelector("#hscroll150-button");
console.log(hscroll150Button);

hscroll150Button.addEventListener("click", gotoHScroll150);

function gotoHScroll150() {
  scrollContent.scrollTo({ left: 150, behavior: "smooth" });
}

const vscroll300Button = document.querySelector("#vscroll300-button");
console.log(vscroll300Button);

vscroll300Button.addEventListener("click", gotoVScroll300);

function gotoVScroll300() {
  scrollContent.scrollTo({ top: 300, behavior: "smooth" });
}

const wvscrollButton = document.querySelector("#wvscroll-button");
console.log(wvscrollButton);

wvscrollButton.addEventListener("click", getWVScroll);

const wvscroll = document.querySelector("#wvscroll");

function getWVScroll() {
  wvscroll.textContent = window.scrollY;
}

// Drag and Drop
const purpleBox = document.querySelector("#purple-box");
console.log(purpleBox);

const dropBox = document.querySelector("#drop-box");
console.log(dropBox);

let draggedElement = null;

purpleBox.addEventListener("dragstart", startDrag);
function startDrag() {
  draggedElement = purpleBox;
}

dropBox.addEventListener("dragover", endDrag);
function endDrag() {
  console.log("Stop dragging and drop now!");
  event.preventDefault();
}

dropBox.addEventListener("drop", handleDrop);
function handleDrop() {
  if (draggedElement) {
    let color = window
      .getComputedStyle(draggedElement)
      .getPropertyValue("background-color");
    console.log(color);
    dropBox.style.backgroundColor = color;
    dropBox.textContent = "Content is dropped";
    draggedElement = null;
  }
}
