let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(num) {
  if (display.innerText === '0' || currentInput === '') {
    currentInput = num;
  } else {
    currentInput += num;
  }
  display.innerText = currentInput;
}

function appendOperator(op) {
  if (op === '+/-') {
    currentInput = String(parseFloat(currentInput) * -1);
    display.innerText = currentInput;
    return;
  }

  firstOperand = parseFloat(currentInput);
  operator = op;
  currentInput = '';
}

function calculate() {
  let secondOperand = parseFloat(currentInput);
  let result;

  switch (operator) {
    case '+': result = firstOperand + secondOperand; break;
    case '-': result = firstOperand - secondOperand; break;
    case '*': result = firstOperand * secondOperand; break;
    case '/': result = firstOperand / secondOperand; break;
    default: return;
  }

  display.innerText = result;
  currentInput = String(result);
  operator = '';
}

function clearDisplay() {
  display.innerText = '0';
  currentInput = '';
  operator = '';
  firstOperand = null;
}
