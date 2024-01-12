// Ask user for two numbers and the calculation method
const number1 = prompt("Please give a number");
const number2 = prompt("Please give another number");
const method = prompt("Which calculation method do you want to use? Choose one of: +, -, *, /");

// Check that method is correct
const isMethod = (method === '+' || method === '-' || method === '*' || method === '/');

// Get the numerical value of the input numbers
const nbr1 = parseInt(number1);
const nbr2 = parseInt(number2);
// console.log(`${nbr1} ${nbr2} '${method}' ${isMethod}`);

if (isNaN(nbr1) === false && isNaN(nbr2) === false && isMethod === true) {
    let result;
    
    if (method === '+') {
        result = nbr1 + nbr2;
    }
    else if (method === '-') {
        result = nbr1 - nbr2;
    }
    else if (method === '*') {
        result = nbr1 * nbr2;
    }
    else if (method === '/') {  // No check for if nbr2 == 0...
        result = nbr1 / nbr2;
    }

    alert('The result is: ' + result);
}
else {
    // console.log("Bad data");
    alert("We cant perform the calculation. Some data seems incorrect. Please reload page and try again.");
}