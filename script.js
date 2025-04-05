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
  if (numberTwo == 0) {
    return "ERROR";
  } else {
    return numberOne / numberTwo;
  }
}

function limitDisplayLength(value) {
  if (value === "ERROR") return value;
  const maxLength = 10;
  const strValue = value.toString();

  if (strValue.length <= maxLength) return strValue;

  if (Math.abs(Number(value)) >= 1e10 || Math.abs(Number(value)) < 1e-3) {
    const scientific = Number(value).toExponential(2); // Ej: "1.23e+12"
    return scientific.length <= maxLength
      ? scientific
      : scientific.slice(0, maxLength);
  }
  const [integerPart, decimalPart] = strValue.split(".");
  if (!decimalPart) {
    return strValue.slice(0, maxLength);
  }

  const allowedIntegerLength = Math.min(integerPart.length, maxLength - 1);
  const remainingLength = maxLength - allowedIntegerLength - 1;
  const truncatedDecimal = decimalPart.slice(0, Math.max(0, remainingLength));
  return integerPart + "." + truncatedDecimal;
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
      btnMulti.disabled = false;
      btnDiv.disabled = false;
      if (pressEqual == true) {
        pressEqual = false;
        number = "0";
        if (number == "0" && event.target.id != "." && event.target.id != "0") {
          number = "";
          number = number + event.target.id;
          screen.textContent = limitDisplayLength(number);
        } else if (number != "0" && number != "" && event.target.id != ".") {
          number = number + event.target.id;
          screen.textContent = limitDisplayLength(number);
        } else if (number == "0" && event.target.id == ".") {
          number = number + event.target.id;
          screen.textContent = limitDisplayLength(number);
        } else if (
          number != "0" &&
          event.target.id == "." &&
          number.includes(".") == false
        ) {
          number = number + event.target.id;
          screen.textContent = limitDisplayLength(number);
        }
      } else {
        if (number == "0" && event.target.id != "." && event.target.id != "0") {
          number = "";
          number = number + event.target.id;
          screen.textContent = limitDisplayLength(number);
        } else if (number != "0" && number != "" && event.target.id != ".") {
          number = number + event.target.id;
          screen.textContent = limitDisplayLength(number);
        } else if (number == "0" && event.target.id == ".") {
          number = number + event.target.id;
          screen.textContent = limitDisplayLength(number);
        } else if (
          number != "0" &&
          event.target.id == "." &&
          number.includes(".") == false
        ) {
          number = number + event.target.id;
          screen.textContent = limitDisplayLength(number);
        }
      }
    });
  });
}

const buttonsNumbers = document.querySelectorAll("button.green");
const screen = document.querySelector("div.screen");
const btnAdd = document.querySelector("button#add");
const btnSub = document.querySelector("button#sub");
const btnMulti = document.querySelector("button#mult");
const btnDiv = document.querySelector("button#div");
const btnEqual = document.querySelector("button#equal");
const btnErase = document.querySelector("button#ac");
const btnMinus = document.querySelector("button#minus");
const btnPercentage = document.querySelector("button#percentage");

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
    screen.textContent = limitDisplayLength(result);
    firstItem = result;
    number = "0";
    multiOperation = true;
  }
});

btnSub.addEventListener("click", (event) => {
  operation = operation + "-";
  if (operation == "-") {
    firstItem = Number(number);
    number = "0";
  } else if (operation.length == 2) {
    secondItem = Number(number);
    operation = "-";
    result = operate(operation, firstItem, secondItem);
    screen.textContent = limitDisplayLength(result);
    firstItem = result;
    number = "0";
    multiOperation = true;
  }
});

btnMulti.addEventListener("click", (event) => {
  btnMulti.disabled = true;
  operation = operation + "*";
  if (operation == "*") {
    firstItem = Number(number);
    number = "0";
  } else if (operation.length == 2) {
    secondItem = Number(number);
    operation = "*";
    result = operate(operation, firstItem, secondItem);
    screen.textContent = limitDisplayLength(result);
    firstItem = result;
    number = "0";
    multiOperation = true;
  }
});

btnDiv.addEventListener("click", (event) => {
  btnDiv.disabled = true;
  operation = operation + "/";
  if (operation == "/") {
    firstItem = Number(number);
    number = "0";
  } else if (operation.length == 2) {
    secondItem = Number(number);
    operation = "/";
    result = operate(operation, firstItem, secondItem);
    screen.textContent = limitDisplayLength(result);
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

btnMinus.addEventListener("click", (event) => {
  number = -1 * number;
  screen.textContent = limitDisplayLength(number);
});

btnPercentage.addEventListener("click", (event) => {
  number = number / 100;
  screen.textContent = limitDisplayLength(number);
});

btnEqual.addEventListener("click", (event) => {
  if (operation != "" && firstItem != "") {
    if (multiOperation == false) {
      secondItem = Number(number);
      result = operate(operation, firstItem, secondItem);
      screen.textContent = limitDisplayLength(result);
      number = result.toString();
      operation = "";
      pressEqual = true;
    } else {
      secondItem = Number(number);
      result = operate(operation, firstItem, secondItem);
      screen.textContent = limitDisplayLength(result);
      multiOperation = false;
      number = result.toString();
      operation = "";
    }
  } else {
  }
});

display();
// máximo entero . más 8 digitos
