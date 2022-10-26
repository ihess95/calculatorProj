const screenContainer = document.querySelector(".screenContainer");
const buttonsContainer = document.querySelector(".buttonsContainer");
const numbersContainer = document.querySelector(".numbersContainer");
const opsContainer = document.querySelector(".opsContainer");
const miscContainer = document.querySelector(".misc");
const equalsContainer = document.querySelector(".equalsContainer");
let mathNumber1 = "0";
let mathNumber2 = "0";
let num1 = true;
let equationVar = "";
let opvar = "";
equalsContainer.textContent = "=";
screenContainer.textContent = mathNumber1;
let temp = 1;
let temp2 = 1;

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
    for (let j = 0; j < 3; j++) {
      let row = document.createElement("div");
      row.className = "miscButton";
      col.appendChild(row);
    }
    miscContainer.appendChild(col);
  }
}

function addTransition(e) {
  e.classList.add("playing");
}

function removeTransition(e) {
  if (".playing" in e.classList) {
    e.target.classList.remove("playing");
  }
}

function clearScreen() {
  screenContainer.textContent = "0";
}
function evaluator() {
  if (opvar === "/") {
    equationVar = parseFloat(mathNumber1) / parseFloat(mathNumber2);
  } else if (opvar === "*") {
    equationVar = parseFloat(mathNumber1) * parseFloat(mathNumber2);
  } else if (opvar === "-") {
    equationVar = parseFloat(mathNumber1) - parseFloat(mathNumber2);
  } else if (opvar === "+") {
    equationVar = parseFloat(mathNumber1) + parseFloat(mathNumber2);
  }
}

makeNumbers();
makeOps();
makeMisc();

const numButtons = document.querySelectorAll(".numButton");
numButtons.forEach((button) => {
  button.textContent = temp;
  button.addEventListener("mousedown", function () {
    // addTransition(button);
    let maxChars = 9;
    if (screenContainer.textContent.length <= maxChars) {
      if (screenContainer.textContent === "0") {
        screenContainer.textContent = "";
        screenContainer.textContent = button.textContent;
      } else {
        screenContainer.textContent =
          screenContainer.textContent + button.textContent;
      }
    }
  });
  temp++;
});

const opsButton = document.querySelectorAll(".opsButton");
opsButton.forEach((button) => {
  if (temp2 === 1) {
    if (num1 === true) {
      mathNumber1 = screenContainer.textContent;
    } else {
      mathNumber2 = screenContainer.textContent;
    }
    button.textContent = "÷";
    temp2++;
    button.addEventListener("click", function () {
      opvar = "/";
      num1 = false;
    });
  } else if (temp2 === 2) {
    if (num1 === true) {
      mathNumber1 = screenContainer.textContent;
    } else {
      mathNumber2 = screenContainer.textContent;
    }
    button.textContent = "x";
    button.addEventListener("click", function () {
      opvar = "*";
      num1 = false;
    });
    temp2++;
  } else if (temp2 === 3) {
    if (num1 === true) {
      mathNumber1 = screenContainer.textContent;
    } else {
      mathNumber2 = screenContainer.textContent;
    }
    button.textContent = "-";
    button.addEventListener("click", function () {
      opvar = button.textContent;
      num1 = false;
    });
    temp2++;
  } else {
    if (num1 === true) {
      mathNumber1 = screenContainer.textContent;
    } else {
      mathNumber2 = screenContainer.textContent;
    }
    button.textContent = "+";
    button.addEventListener("click", function () {
      opvar = button.textContent;
      num1 = false;
    });
    temp2 = 1;
  }
});
const miscButton = document.querySelectorAll(".miscButton");
miscButton.forEach((button) => {
  if (temp2 === 1) {
    button.textContent = "0";
    temp2++;
  } else if (temp2 === 2) {
    button.textContent = ".";
    temp2++;
  } else {
    button.textContent = "⌫";
    temp2 = 1;
  }
});

equalsContainer.addEventListener("click", function () {
  console.log(mathNumber1);
  console.log(mathNumber2);
  console.log(opvar);
  evaluator();
  screenContainer.textContent = equationVar;
});
