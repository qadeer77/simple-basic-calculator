var num1 = +prompt("Enter your ist number");
var num2 = +prompt("Enter your 2nd number");
var opt = prompt("Enter your operator , + - * /");
var result;

if (opt === "+") {
    result = num1 + num2;    
}

if (opt === "-") {
    result = num1 - num2;
}

if (opt === "*") {
    result = num1 * num2;
}

if (opt === "/") {
    result = num1 / num2;
}

console.log(result);