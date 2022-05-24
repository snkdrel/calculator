// ----- global variables -------
let prevVal = '';
let currentVal = 0;
let currentOp = '';
let lastButtonPressed = 'number';

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
            if( numb2 == 0){
                divideByZeroError();
                return 0;
            }else{
                res = divide(numb1, numb2);
            }
            break;
        default:
            alert('Invalid operation');
    }
    return res;
}

function divideByZeroError(){
    alert("ERROR: Division by zero not permitted.");
    resetAll();
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
    lastButtonPressed = 'number';
}

function updateDisplayValue(buttonValue){
    display.textContent = prevVal + currentOp + currentVal;
}

// clear button
clearButton.addEventListener('click', resetAll);

function resetAll(){
    // remove boldness
    display.classList.remove('final-result');

    prevVal = '';
    currentOp = '';
    currentVal = 0;
    updateDisplayValue();
    lastButtonPressed = 'number';
}

// when operator button is clicked
opButtons.forEach((b)=>{
    b.addEventListener('click', () => OpClicked(b.textContent));
});

function OpClicked(op){
    // remove boldness
    display.classList.remove('final-result');

    // if two operands are clicked one after the other
    if(lastButtonPressed == 'operator'){
        currentOp = op;
        updateDisplayValue();
        lastButtonPressed = 'operator';
        return;
    }

    if(prevVal == ''){
        prevVal = currentVal;
    }else{
        prevVal = operate(currentOp, prevVal, currentVal);
    }
    currentOp = op;
    currentVal = '';
    updateDisplayValue();
    lastButtonPressed = 'operator';
}

// equal button
equalButton.addEventListener('click', () => {
    // prevents clicking equal immediately after an operator
    if(lastButtonPressed == 'operator'){
       alert('Missing operand');
       return;
    }

    if(prevVal != ''){
        currentVal = operate(currentOp, prevVal, currentVal);   
    }
    prevVal = '';
    currentOp = '';
    updateDisplayValue();

    // reset values so next value entered replaces current value in display
    display.classList.add('final-result'); // show result in bold
});

