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
    numbersContainer.appendChild(col);
  }
}

// function makeOps(){
//     for (let i = 0; i < 4)
// }

makeNumbers();

const numButtons = document.querySelectorAll(".numButton");
numButtons.forEach((button) => {
  button.textContent = temp;
  temp++;
});
