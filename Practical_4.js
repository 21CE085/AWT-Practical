let globalVar = "Global Variable";

function factorialRecursive(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorialRecursive(num - 1);
  }
}

function outerFunction() {
  let outerVar = "Outer Function Variable";

  function nestedFunction() {
    let nestedVar = "Nested Function Variable";

    console.log(globalVar);
    console.log(outerVar);
    console.log(nestedVar);
  }

  nestedFunction();
}

const numToFactorial = 5;
const result = factorialRecursive(numToFactorial);
console.log(result);

outerFunction();