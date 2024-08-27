function checkWeather() {
  let temp = document.querySelector("#temp");
  let body = document.querySelector("body");
  let outer = document.querySelector("body .outer");

  //   console.log(temp.value);

  if (temp.value >= 40) {
    console.log("It is hot today!");
    body.style.backgroundColor = "#E15E55";
    body.style.color = "#222";
    outer.style.borderColor = "#222";
  } else if (temp.value < 40 && temp.value >= 30) {
    console.log("It is kinda hot today!");
    body.style.backgroundColor = "#FDAE61";
    body.style.color = "#222";
    outer.style.borderColor = "#222";
  } else if (temp.value < 30 && temp.value >= 20) {
    console.log("It is warm & sunny today!");
    body.style.backgroundColor = "#FFFFBF";
    body.style.color = "#222";
    outer.style.borderColor = "#222";
  } else if (temp.value < 20 && temp.value >= 10) {
    console.log("It is kinda cold today!");
    body.style.backgroundColor = "#ABD9E9";
    body.style.color = "#222";
    outer.style.borderColor = "#222";
  } else if (temp.value < 10 && temp.value >= 0) {
    console.log("It is cold today!");
    body.style.backgroundColor = "#4575B4";
    body.style.color = "#222";
    outer.style.borderColor = "#222";
  }
}
