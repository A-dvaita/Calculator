//variable declarations

let num1;
let num2;
let operator;

//functions for mathematical operations

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

//function to select and call mathematical function based on operator inputted

function operate(operator, num1, num2){
    let result;
    switch(operator){
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
    }
    return result;
}

//logic to make the buttons of the calculator functional

  let currentInput = "";
  let btn = document.querySelectorAll("button");
  btn.forEach((button) => {
    button.addEventListener("click", (e) => {
      currentInput += button.textContent;
      populateDisplay(currentInput);
    });
  });

// function to populate the display

function populateDisplay(currentInput){
    let numDisplay = document.querySelector('#numDisplay');
    numDisplay.textContent = `${currentInput}`;
}