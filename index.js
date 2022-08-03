// Déclaration des variables
const buttons = document.querySelectorAll(".btn");
const buttonsOperators = document.querySelectorAll(".operators");
const result = document.getElementById("result");
const result2 = document.getElementById("result2");
let decimal = document.querySelector(".decimal");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");
let containsPlus = plus.classList.contains("plus_none");
let containsMinus = minus.classList.contains("minus_none");
let containsDivide = divide.classList.contains("divide_none");
let containsMultiply = multiply.classList.contains("multiply_none");


///// boucle sur les boutons chiffres c et . 

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
    result2.textContent += e.target.id;

    if ((containsPlus = true)) {
      plus.classList.remove("plus_none");
      minus.classList.remove("minus_none");
      divide.classList.remove("divide_none");
      multiply.classList.remove("multiply_none");
    }
    if ((containsMinus = true)) {
      plus.classList.remove("plus_none");
      minus.classList.remove("minus_none");
      divide.classList.remove("divide_none");
      multiply.classList.remove("multiply_none");
    }
    if ((containsDivide = true)) {
      plus.classList.remove("plus_none");
      minus.classList.remove("minus_none");
      divide.classList.remove("divide_none");
      multiply.classList.remove("multiply_none");
    }
    if ((containsMultiply = true)) {
      plus.classList.remove("plus_none");
      minus.classList.remove("minus_none");
      divide.classList.remove("divide_none");
      multiply.classList.remove("multiply_none");
    }
  });
});

///// boucle sur les opérateurs 

buttonsOperators.forEach((buttonOperator) => {
  buttonOperator.addEventListener("click", (e) => {
    result2.textContent += e.target.id;

    if ((containsPlus = true)) {
      plus.classList.remove("plus_none");
      minus.classList.remove("minus_none");
      divide.classList.remove("divide_none");
      multiply.classList.remove("multiply_none");
    }
    if ((containsMinus = true)) {
      plus.classList.remove("plus_none");
      minus.classList.remove("minus_none");
      divide.classList.remove("divide_none");
      multiply.classList.remove("multiply_none");
    }
    if ((containsDivide = true)) {
      plus.classList.remove("plus_none");
      minus.classList.remove("minus_none");
      divide.classList.remove("divide_none");
      multiply.classList.remove("multiply_none");
    }
    if ((containsMultiply = true)) {
      plus.classList.remove("plus_none");
      minus.classList.remove("minus_none");
      divide.classList.remove("divide_none");
      multiply.classList.remove("multiply_none");
    }
  });
});


///// Les écouteurs d'évenements

equal.addEventListener("click", () => {
  result.textContent = eval(result2.textContent);
  result2.textContent += e.target.id;
  decimal.classList.remove("decimal_none");
});

clear.addEventListener("click", () => {
  result.textContent = "";
  result2.textContent = "";
  decimal.classList.remove("decimal_none");
});

decimal.addEventListener("click", () => {
  decimal.classList.add("decimal_none");
});

plus.addEventListener("click", () => {
  result.textContent = "";
  decimal.classList.remove("decimal_none");
  plus.classList.toggle("plus_none");
  minus.classList.toggle("minus_none");
  multiply.classList.toggle("multiply_none");
  divide.classList.toggle("divide_none");
});

minus.addEventListener("click", () => {
  result.textContent = "";
  decimal.classList.remove("decimal_none");
  plus.classList.toggle("plus_none");
  minus.classList.toggle("minus_none");
  multiply.classList.toggle("multiply_none");
  divide.classList.toggle("divide_none");
});

multiply.addEventListener("click", () => {
  result.textContent = "";
  decimal.classList.remove("decimal_none");
  plus.classList.toggle("plus_none");
  minus.classList.toggle("minus_none");
  multiply.classList.toggle("multiply_none");
  divide.classList.toggle("divide_none");
});

divide.addEventListener("click", () => {
  result.textContent = "";
  decimal.classList.remove("decimal_none");
  plus.classList.toggle("plus_none");
  minus.classList.toggle("minus_none");
  multiply.classList.toggle("multiply_none");
  divide.classList.toggle("divide_none");
});
