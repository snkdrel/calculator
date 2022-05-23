// ----- global variables -------
let prevVal = '';
let currentVal = 0;
let currentOp = '';
let equalFlag = false;

const display = document.querySelector('.display');
// buttons
const numberButtons = document.querySelectorAll('.number-button');
const clearButton = document.querySelector('.clear-button');
const opButtons = document.querySelectorAll('.op-button');
const equalButton = document.querySelector('.equal-button');

// Basic operations
let add = function(a, b){
    return +a + +b;
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

// number button
function numbClicked(buttonValue){
    // remove boldness
    display.classList.remove('final-result');

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
    // remove boldness
    display.classList.remove('final-result');

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
    // remove boldness
    display.classList.remove('final-result');
    
    if(prevVal == ''){
        prevVal = currentVal;
    }else{
        prevVal = operate(currentOp, prevVal, currentVal);
    }
    currentOp = op;
    currentVal = 0;
    updateDisplayValue();
}

// equal button
equalButton.addEventListener('click', () => {
    if(prevVal != ''){
        const result = operate(currentOp, prevVal, currentVal);
        prevVal = '';
        currentOp = '';
        currentVal = result;
        updateDisplayValue();
    }
    // reset values so next value entered replaces current value in display
    prevVal = '';
    currentOp = '';
    currentVal = 0;
    display.classList.add('final-result'); // show result in bold
});

