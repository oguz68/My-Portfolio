let displayValue = "0";

function updateDisplay() {
  document.getElementById("display").innerText = displayValue;
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1) || "0";
  updateDisplay();
}

function appendNumber(number) {
  if (displayValue === "0" && number !== ".") {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  const lastChar = displayValue[displayValue.length - 1];
  if ("+-*/".includes(lastChar)) {
    displayValue = displayValue.slice(0, -1);
  }
  displayValue += operator;
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (e) {
    displayValue = "Error";
  }
  updateDisplay();
}