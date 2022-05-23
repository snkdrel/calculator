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
const display = document.querySelector('.display');

const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((b) => {
    b.addEventListener('click', () => updateDisplayValue(b.textContent) );
});

function updateDisplayValue(buttonValue){
    display.textContent = buttonValue;
}