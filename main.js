// ----- global variables -------
let prevVal = '';
let currentVal = 0;
let currentOp = '';

const display = document.querySelector('.display');
// buttons
const numberButtons = document.querySelectorAll('.number-button');
const clearButton = document.querySelector('.clear-button');
const opButtons = document.querySelectorAll('.op-button');

// Basic operations
let add = function(a, b){
    return a + b;
}

let subtract = function(a, b){
    return a - b;
}

let multiply = function(a, b){
    return a * b;
}

let divide = function(a, b){
    return a / b;
}

let operate = function(operator, numb1, numb2){
    let res;
    switch(operator){
        case '+':
            res = add(numb1, numb2);
            break;
        case '-':
            res = subtract(numb1, numb2);
            break;
        case '*':
            res = multiply(numb1, numb2);
            break;
        case '/':
            res = divide(numb1, numb2);
            break;
        default:
            alert('Invalid operation');
    }
    return res;
}

// --- display functions ----
numberButtons.forEach((b) => {
    b.addEventListener('click', () => numbClicked(b.textContent) );
});

function numbClicked(buttonValue){
    if(currentVal == 0){
        currentVal = buttonValue;
    }else{
        currentVal = currentVal.toString() + buttonValue;
    }
    updateDisplayValue();
}

function updateDisplayValue(buttonValue){
    display.textContent = prevVal + currentOp + currentVal;
}

// clear button
clearButton.addEventListener('click', () => {
    prevVal = '';
    currentOp = '';
    currentVal = 0;
    updateDisplayValue();
});

// when operator button is clicked
opButtons.forEach((b)=>{
    b.addEventListener('click', () => OpClicked(b.textContent));
});

function OpClicked(op){
    prevVal = currentVal;
    currentOp = op;
    currentVal = 0;
    updateDisplayValue();
}

