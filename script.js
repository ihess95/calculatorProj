const screenContainer = document.querySelector(".screenContainer");
const buttonsContainer = document.querySelector(".buttonsContainer");
const numbersContainer = document.querySelector(".numbersContainer");
const opsContainer = document.querySelector(".opsContainer");
const miscContainer = document.querySelector(".misc");
let temp = 1;

function makeNumbers() {
  for (let i = 0; i < 3; i++) {
    let col = document.createElement("div");
    col.className = "col";
    for (let j = 0; j < 3; j++) {
      let row = document.createElement("div");
      row.className = "numButton";
      col.appendChild(row);
    }
    numbersContainer.insertBefore(col, numbersContainer.misc);
  }
}

function makeOps() {
  for (let i = 0; i < 1; i++) {
    let col = document.createElement("div");
    col.className = "opsCol";
    for (let j = 0; j < 4; j++) {
      let row = document.createElement("div");
      row.className = "opsButton";
      col.appendChild(row);
    }
    opsContainer.appendChild(col);
  }
}

function makeMisc() {
  for (let i = 0; i < 1; i++) {
    let col = document.createElement("div");
    col.className = "miscCol";
    for (let j = 0; j < 4; j++) {
      let row = document.createElement("div");
      row.className = "miscButton";
      col.appendChild(row);
    }
    miscContainer.appendChild(col);
  }
}

makeNumbers();
makeOps();
makeMisc();

const numButtons = document.querySelectorAll(".numButton");
numButtons.forEach((button) => {
  button.textContent = temp;
  temp++;
});
const opsButton = document.querySelectorAll(".opsButton");
opsButton.forEach((button) => {
  button.textContent = "test";
});
const miscButton = document.querySelectorAll(".miscButton");
miscButton.forEach((button) => {
  button.textContent = "misc";
});
