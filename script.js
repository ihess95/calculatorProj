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

//Define function to make number divs
function makeNumbers() {
  //create 3 columns
  for (let i = 0; i < 3; i++) {
    let col = document.createElement("div");
    col.className = "col";
    //create 3x3 grid
    for (let j = 0; j < 3; j++) {
      let row = document.createElement("div");
      row.className = "numButton";
      col.appendChild(row);
    }
    //insert grid to numbers container
    numbersContainer.insertBefore(col, numbersContainer.misc);
  }
}

//define function for making operations button
function makeOps() {
  //make one column
  for (let i = 0; i < 1; i++) {
    let col = document.createElement("div");
    col.className = "opsCol";
    //make four buttons
    for (let j = 0; j < 4; j++) {
      let row = document.createElement("div");
      row.className = "opsButton";
      col.appendChild(row);
    }
    //add to operations container
    opsContainer.appendChild(col);
  }
}

//define function to make miscellaneous buttons (0 , . , backspace)
function makeMisc() {
  //make one row
  for (let i = 0; i < 1; i++) {
    let col = document.createElement("div");
    col.className = "miscCol";
    //make three columns
    for (let j = 0; j < 3; j++) {
      let row = document.createElement("div");
      row.className = "miscButton";
      col.appendChild(row);
    }
    //append
    miscContainer.appendChild(col);
  }
}

//not in use yet, supposed to add click responsiveness
function addTransition(e) {
  e.classList.add("playing");
}

//not in use yet, supposed to remove click transition
function removeTransition(e) {
  if (".playing" in e.classList) {
    e.target.classList.remove("playing");
  }
}

//define function for choosing which variable to store to
function isNum1(num1) {
  if (num1 === true) {
    mathNumber1 = screenContainer.textContent;
  } else {
    mathNumber2 = screenContainer.textContent;
  }
}

//function used to set screen container text content back to 0
function clearScreen() {
  screenContainer.textContent = "0";
}

//define function to create equations from calculator
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
  num1 = true;
}

//run calculator creating functions
makeNumbers();
makeOps();
makeMisc();

//define numbers on each number div
const numButtons = document.querySelectorAll(".numButton");
numButtons.forEach((button) => {
  button.textContent = temp;
  //add event listener for clicking on each number button where each button stores the number on the button
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

//define functionality for operator buttons
const opsButton = document.querySelectorAll(".opsButton");
opsButton.forEach((button) => {
  //if button 1 (divide)
  if (temp2 === 1) {
    button.textContent = "÷";
    temp2++;
    button.addEventListener("click", function () {
      opvar = "/";
      //if num1 is true, store on num1, else store on num2
      isNum1(num1);
      num1 = false;
      screenContainer.textContent = 0;
    });
    //if button 2 (multiply)
  } else if (temp2 === 2) {
    button.textContent = "x";
    button.addEventListener("click", function () {
      opvar = "*";
      //if num1 is true, store on num1, else store on num2
      isNum1(num1);
      num1 = false;
      screenContainer.textContent = 0;
    });
    temp2++;
  } else if (temp2 === 3) {
    button.textContent = "-";
    button.addEventListener("click", function () {
      opvar = button.textContent;
      //if num1 is true, store on num1, else store on num2
      isNum1(num1);
      num1 = false;
      screenContainer.textContent = 0;
    });
    temp2++;
  } else {
    button.textContent = "+";
    button.addEventListener("click", function () {
      opvar = button.textContent;
      //if num1 is true, store on num1, else store on num2
      isNum1(num1);
      num1 = false;
      screenContainer.textContent = 0;
    });
    temp2 = 1;
  }
});

//give functionality for each misc button
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

//define functionality for equals button
equalsContainer.addEventListener("click", function () {
  mathNumber2 = screenContainer.textContent;
  evaluator();
  screenContainer.textContent = equationVar;
});
