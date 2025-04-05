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

let number = "0";
let firstItem = "";
let secondItem = "";
let pressEqual = false;
function display() {
  buttonsNumbers.forEach((button) => {
    button.addEventListener("click", (event) => {
      if (pressEqual == true) {
        pressEqual == false;
        number = "0";
        if (number == "0" && event.target.id != "." && event.target.id != "0") {
          number = "";
          number = number + event.target.id;
          screen.textContent = `${number}`;
          console.log(number);
        } else if (number != "0" && number != "" && event.target.id != ".") {
          number = number + event.target.id;
          screen.textContent = `${number}`;
          console.log(number);
        } else if (number == "0" && event.target.id == ".") {
          number = number + event.target.id;
          screen.textContent = `${number}`;
          console.log(number);
        } else if (
          number != "0" &&
          event.target.id == "." &&
          number.includes(".") == false
        ) {
          number = number + event.target.id;
          screen.textContent = `${number}`;
          console.log(number);
        }
      } else {
        if (number == "0" && event.target.id != "." && event.target.id != "0") {
          number = "";
          number = number + event.target.id;
          screen.textContent = `${number}`;
          console.log(number);
        } else if (number != "0" && number != "" && event.target.id != ".") {
          number = number + event.target.id;
          screen.textContent = `${number}`;
          console.log(number);
        } else if (number == "0" && event.target.id == ".") {
          number = number + event.target.id;
          screen.textContent = `${number}`;
          console.log(number);
        } else if (
          number != "0" &&
          event.target.id == "." &&
          number.includes(".") == false
        ) {
          number = number + event.target.id;
          screen.textContent = `${number}`;
          console.log(number);
        }
      }
    });
  });
}

const buttonsNumbers = document.querySelectorAll("button.green");
const screen = document.querySelector("div.screen");
const btnAdd = document.querySelector("button#add");
const btnEqual = document.querySelector("button#equal");
const btnErase = document.querySelector("button#ac");

let operation = "";
let result = "";
let multiOperation = false;
btnAdd.addEventListener("click", (event) => {
  operation = operation + "+";
  if (operation == "+") {
    firstItem = Number(number);
    number = "0";
  } else if (operation.length == 2) {
    secondItem = Number(number);
    operation = "+";
    result = operate(operation, firstItem, secondItem);
    screen.textContent = `${result}`;
    firstItem = result;
    number = "0";
    multiOperation = true;
  }
});

btnErase.addEventListener("click", (event) => {
  operation = "";
  firstItem = "";
  secondItem = "";
  number = "0";
  screen.textContent = `${number}`;
});

btnEqual.addEventListener("click", (event) => {
  if (operation != "" && firstItem != "") {
    if (multiOperation == false) {
      secondItem = Number(number);
      result = operate(operation, firstItem, secondItem);
      screen.textContent = `${result}`;
      number = result;
      operation = "";
      pressEqual = true;
    } else {
      secondItem = Number(number);
      result = operate(operation, firstItem, secondItem);
      screen.textContent = `${result}`;
      multiOperation = false;
      number = result;
      operation = "";
    }
  } else {
  }
});

display();
// máximo entero . más 8 digitos
