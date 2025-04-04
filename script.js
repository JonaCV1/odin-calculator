function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function operate(operation, numberOne, numberTwo) {
  switch (operation) {
    case "+":
      return add(numberOne, numberTwo);
    case "-":
      return subtract(numberOne, numberTwo);
    case "*":
      return multiply(numberOne, numberTwo);
    case "/":
      return divide(numberOne, numberTwo);
  }
}

const btnGreen = document.querySelectorAll("button.green");
let screen = document.querySelector("div.screen");

function display(event) {
  if (value.length == 0 && event.target.id != 0 && event.target.id != ".") {
    value = value + `${event.target.id}`;
    screen.textContent = `${value}`;
  } else if (
    value.length == 0 &&
    event.target.id != 0 &&
    event.target.id == "."
  ) {
    value = value + "0.";
    screen.textContent = `${value}`;
  } else if (value.length <= 8 && value.length >= 1) {
    value = value + `${event.target.id}`;
    screen.textContent = `${value}`;
  } else {
    value = value;
  }
}

let value = "";
btnGreen.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (value.includes(".") == false) {
      display(event);
    } else if (value.includes(".") && event.target.id != ".") {
      display(event);
    }
  });
});

const btnErase = document.querySelector("button#ac");
btnErase.addEventListener("click", () => {
  value = "";
  result = "";
  screen.textContent = `0`;
});

const btnPercentage = document.querySelector("button#percentage");
btnPercentage.addEventListener("click", () => {
  if (value.includes(".")) {
    let afterDot = value.split(".");
    if (afterDot[1].length >= 7) {
      value = `${(Number(value) / 100).toFixed(afterDot[1].length)}`;
    } else {
      value = `${(Number(value) / 100).toFixed(afterDot[1].length + 2)}`;
    }
  } else {
    value = `${Number(value) / 100}`;
  }

  if (value == "0" || Number(value) * 100 == 0) {
    value = "";
    screen.textContent = `0`;
  } else {
    screen.textContent = `${value}`;
  }
});

const btnMinus = document.querySelector("button#minus");
btnMinus.addEventListener("click", () => {
  if (value == 0) {
    value = "";
    screen.textContent = `0`;
  } else {
    value = `${Number(value) * -1}`;
    screen.textContent = `${value}`;
  }
});

let operation = "";
let numberOne = "";
let numberTwo = "";
let result = "";

btnAdd = document.querySelector("button#add");
btnAdd.addEventListener("click", () => {
  if (result != "") {
    numberOne = Number(result);
    console.log(numberOne);
    result = "";
  } else {
    numberOne = Number(value);
    operation = "+";
    value = "";
  }
});

btnEqual = document.querySelector("button#equal");
btnEqual.addEventListener("click", () => {
  if (numberOne != "") {
    let numberTwo = Number(value);
    result = operate(operation, numberOne, numberTwo);
    screen.textContent = `${result}`;
  }
  value = "";
  numberOne = "";
  numberTwo = "";
});

// máximo entero . más 8 digitos
