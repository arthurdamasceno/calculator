let values = {
    firstNumber: 0,
    secondNumber: 0,
    operand: null,
    isFirstNumber: true,
}

// do the math operation
function operate(num1, num2, operator){
    switch (operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

function add(num1, num2){
    return Number(num1) + Number(num2);
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}


let numbers = document.querySelector(".numbers");
let output = document.querySelector(".display");
// display numbers after the click event
numbers.addEventListener("click", function(e){
    let target = e.target;
    displayCheckNumber(target);
})

// display numbers and check if it is the first or second number
function displayCheckNumber(num){
    if (values.isFirstNumber == true && values.firstNumber == 0){
        output.textContent += num.textContent;
        values.firstNumber = num.textContent;
    }
    else if (values.isFirstNumber){
        output.textContent += num.textContent;
        values.firstNumber += num.textContent;
    }
    else if (values.isFirstNumber == false && values.secondNumber == 0){
        output.textContent = '';
        output.textContent += num.textContent;
        values.secondNumber = num.textContent;
    }
    else {
        output.textContent += num.textContent;
        values.secondNumber += num.textContent;
    }
}


let operators = document.querySelector(".operators");
// check operators click event
operators.addEventListener("click", function(e){
    // check if there is a second click on operators
    if (values.firstNumber != 0 && values.secondNumber != 0 && values.operand != null){
        displayResult(operate(values.firstNumber, values.secondNumber, values.operand));
        let targetOperator = e.target;
        values.operand = targetOperator.textContent; 
    }
    else if (values.firstNumber != 0){
        let targetOperator = e.target;
        values.operand = targetOperator.textContent;
        values.isFirstNumber = false;
        output.textContent = '';
    }
})


let equal = document.querySelector("#equal");
equal.addEventListener("click", () => checkOperation())
// check if math operation can start
function checkOperation(){
    if (values.firstNumber != 0 && values.secondNumber != 0 && values.operand != null){
        let result = operate(values.firstNumber, values.secondNumber, values.operand);
        displayResult(result);
    }
}


// Display operation result
function displayResult(result){
    output.textContent = result;
    values.firstNumber = result;
    values.secondNumber = 0;
    values.operand = null;
    values.isFirstNumber = false;
}


let clear = document.querySelector("#C")
clear.addEventListener("click", () => clearNumber())
//clear operation
function clearNumber(){
    output.textContent = '';
    values.firstNumber = 0;
    values.secondNumber = 0;
    values.operand = null;
    values.isFirstNumber = true;
}