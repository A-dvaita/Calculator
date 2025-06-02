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
    if(b === 0){
        return 'ERROR';
    } else{
    return a/b;
    }
}

//function to select and call mathematical function based on operator inputted

function operate(num1, operator, num2) {
    let result;

    switch (operator) {
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
            result = divide(num1, num2);  // might return 'ERROR'
            break;
        default:
            return 'ERROR';
    }

    // round only if result is a number and has decimal places
    if (typeof result === 'number' && !Number.isInteger(result)) {
        result = parseFloat(result.toFixed(6)); // round to 6 decimal places
    }

    return result;
}


//logic to make the buttons of the calculator functional

let currentInput = "";

let digitBtn = document.querySelectorAll(".digit");

digitBtn.forEach((digit) => {
  digit.addEventListener("click", (e) => {
    if (resultDisplayed) {
      // clear state because a new digit means a new calculation
      currentInput = "";
      num1 = undefined;
      operator = "";
      resultDisplayed = false;
    }
    if (currentInput.length >= 15){
        alert('Maximum length reached');
        return;
    }
    currentInput += e.target.textContent;  // add the clicked digit's text
    populateDisplay(currentInput);
  });
});


//logic to listen for operator button clicks
let operatorBtn = document.querySelectorAll(".symbol");
operatorBtn.forEach((symbol) => {
  symbol.addEventListener("click", (event) => {
    if (operator && currentInput !== '') {
      // Compute intermediate result
      num2 = Number(currentInput);
      let intermediateResult = operate(num1, operator, num2);
      num1 = intermediateResult;
      populateDisplay(num1);
    } else {
      num1 = Number(currentInput);
    }

    operator = symbol.textContent;
    populateDisplay(operator);
    currentInput = '';
  });
});

//logic to get num2 and enable '=' button

let resultDisplayed = false;

let equals = document.querySelector('#equal');
equals.addEventListener('click', (e) => {
    let answer;
    num2 = Number(currentInput);
    if(num1 !== undefined && operator && currentInput !== ''){
    answer = operate(num1, operator, num2);
    populateDisplay(answer);
    resultDisplayed = true;
    } else {
        e.preventDefault();
    }
});

// function to populate the display

function populateDisplay(currentInput){
    let numDisplay = document.querySelector('#numDisplay');
    numDisplay.textContent = `${currentInput}`;
}

// function for AC button

function clear(){
    num1 = undefined;
    num2 = undefined;
    operator = '';
    currentInput = '';
    populateDisplay('');
}

// enable AC button

let acBtn = document.querySelector('#ac');
acBtn.addEventListener('click', (e) => {
    clear();
});