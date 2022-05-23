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

// operate
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