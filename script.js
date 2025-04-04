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
  } else if (value.length <= 9 && value.length >= 1) {
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
      console.log(value);
    } else if (value.includes(".") && event.target.id != ".") {
      display(event);
      console.log(value);
    }
  });
});

console.log(operate("+", 2, 3));
console.log(operate("-", 2, 3));
console.log(operate("*", 2, 3));
console.log(operate("/", 2, 3));

// máximo entero . más 8 digitos
