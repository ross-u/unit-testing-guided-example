function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

// test

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
module.exports = { sum, subtract, divide, multiply };
