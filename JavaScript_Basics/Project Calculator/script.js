const numbers = document.querySelectorAll('.btn-number');
const display = document.querySelector('.calc-display');
const operations = document.querySelectorAll('.btn-operation');
const operateBtn = document.querySelector('.btn-operate');

let numOne = 0;
let numTwo = 0;
let result = 0;
let operator = '';

numbers.forEach(num => {
    num.addEventListener("click", addNumOnDisplay)
});

operations.forEach(operation => {
    operation.addEventListener("click", addOperator)
})

operateBtn.addEventListener("click", operationResult)

function operationResult() {
    if(numOne !== 0) {
        numTwo = parseInt(display.textContent);
        operate(numOne, numTwo, operator);
        display.textContent = result;
        numOne = 0;
        numTwo = 0;
        operator = '';
        result = 0;
    } else if(numOne === 0 && operator === "*") {
        result = 0;
        numTwo = 0;
        operator = '';
    }
}

function addOperator() {
    numOne = parseInt(display.textContent)
    operator = this.textContent;
    resetDisplay();
}

function cleanDisplay() {
    if(display.textContent.includes(" ") || display.textContent === "0" || display.textContent === NaN || display.textContent === "Infinity" || display.textContent === "-Infinity") {
        display.textContent = '';
    }
}

function resetDisplay() {
    if(display.textContent !== "0")
    display.textContent = '0';
}

function updateDisplay(value) {
    display.textContent += value;
}

function addNumOnDisplay() {
    cleanDisplay();
    let currentNum = this.textContent;
    updateDisplay(currentNum)
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
    return a / b;
}

function operate(a, b, op) {

    switch (op) {
        case '+':
           result = add(a, b)
            break;
        case '-':
        result = subtract(a, b)
            break;
        case '*':
            result = multiply(a, b)
            break;     
        case '/':
            result = divide(a, b)
            break;
    }
    return result;
}