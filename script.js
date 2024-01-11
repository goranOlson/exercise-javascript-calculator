// 1) Ask for a number
const number1 = prompt("Please give a number");
// const number1 = "9";

// 2) Ask for a number
const number2 = prompt("Please give another number");
// const number2 = 3;

// 3) Ask for calculation method
const method = prompt("Which calculation method do you want to use? Choose one of: +, -, *, /");
// const method = "/";
// Check that methoc is correct
const isMethod = (method === '+' || method === '-' || method === '*' || method === '/');

// 4) Calculate data if correct
const nbr1 = parseInt(number1);
const nbr2 = parseInt(number2);
// console.log(`${nbr1} ${nbr2} '${method}' ${isMethod}`);

if (isNaN(nbr1) === false && isNaN(nbr2) === false && isMethod === true) {
    let result;
    // 
    console.log('Data ok');
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