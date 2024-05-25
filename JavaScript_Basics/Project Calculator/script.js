const numbers = document.querySelectorAll('.btn-number');
const display = document.querySelector('.calc-display');
const operations = document.querySelectorAll('.btn-operation');
const operateBtn = document.querySelector('.btn-operate');
const clearBtn = document.querySelector('.btn-clear');

let numOne = '';
let numTwo = '';
let operator = '';
let resultDisplayed = false;

numbers.forEach(num => {
    num.addEventListener("click", addNumOnDisplay);
});

operations.forEach(operation => {
    operation.addEventListener("click", addOperator);
});

operateBtn.addEventListener("click", operationResult);

clearBtn.addEventListener("click", resetDisplay);

function operationResult() {
    if (numOne !== '' && operator !== '' && display.textContent !== '') {
        numTwo = display.textContent;
        const result = operate(parseFloat(numOne), parseFloat(numTwo), operator);
        display.textContent = result;
        numOne = result.toString();
        numTwo = '';
        operator = '';
        resultDisplayed = true;
    }
}

function addOperator() {
    if (numOne === '') {
        numOne = display.textContent;
    } else if (operator !== '' && !resultDisplayed) {
        operationResult();
        numOne = display.textContent;
    }
    operator = this.textContent;
    resultDisplayed = true; // Mark resultDisplayed true to start new input after operator
}

function resetDisplay() {
    display.textContent = '0';
    numOne = '';
    numTwo = '';
    operator = '';
    resultDisplayed = false;
}

function updateDisplay(value) {
    if (display.textContent === '0' || resultDisplayed) {
        display.textContent = value;
        resultDisplayed = false;
    } else {
        display.textContent += value;
    }
}

function addNumOnDisplay() {
    let currentNum = this.textContent;
    updateDisplay(currentNum);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Error! Division by zero.");
        return 0;
    }
    return a / b;
}

function operate(a, b, op) {
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 0;
    }
}
