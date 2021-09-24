//Grabs input value and displays it in a div
function exercise1() {
  const txtValue = document.querySelector("#txt1").value;
  showText(txtValue, "txtOutput");
}

//Takes input number and add it along with each number that proceeds it
function exercise2() {
  const value2 = document.querySelector("#number").value;
  let result = sumNumberUntil(value2);
  showText(result, "txtOutput2");
}

//adds two numbers and displays the sum in a div
function exercise3() {
  let number1 = document.querySelector("#number1").value;
  let number2 = document.querySelector("#number2").value;
  let result = parseFloat(number1) + parseFloat(number2);
  showText(result, "txtOutput3");
}

//multiplies two numbers and displays the product in a div
const multiply = () => {
  let number1 = document.querySelector("#number1").value;
  let number2 = document.querySelector("#number2").value;
  let result = parseFloat(number1) * parseFloat(number2);
  showText(result, "txtOutput3");
};

//subtracts two numbers and displays the difference in a div
const substract = function () {
  let number1 = document.querySelector("#number1").value;
  let number2 = document.querySelector("#number2").value;
  let result = parseFloat(number1) - parseFloat(number2);
  showText(result, "txtOutput3");
};

// what: is  text to show  where: is the id of the div to show the result
function showText(what, where) {
  const txtOutput = document.querySelector(`#${where}`);
  txtOutput.innerHTML = what;
}

//adds a sequence of numbers
function sumNumberUntil(number) {
  let total = 0;
  for (i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}
