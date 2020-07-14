const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const calculatorScreen = document.querySelector('.calculator-screen');
const equalSign = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const updateScreen = (number) => {
  calculatorScreen.value = number;
}

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
}

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const calculate = () => {
  let result = '';
  switch (calculationOperator) {
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = prevNumber - currentNumber;
      break;
    case '*':
      result = prevNumber * currentNumber;
      break;
    case '/':
      result = prevNumber / currentNumber;
      break;
    default: return;
  }
  currentNumber = result;
  calculationOperator = '';
}

const inputOperator = (operator) => {
  if (calculationOperator === '') {
     prevNumber = currentNumber;
  }
    prevNumber = currentNumber;
    calculationOperator = operator;
    currentNumber = '0';
}

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

equalSign.addEventListener('click', () => {
  calculate();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = '';
  calculationOperator = '';
  currentNumber = '0';
}

clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return;
  } else {
    currentNumber += dot;
    angka = currentNumber;
  }
}

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});
