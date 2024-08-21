function calculate(num1, num2, operation) {
    return operation(num1, num2);
  }

  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero!");
    }
    return a / b;
  }
 
  let sum = calculate(5, 3, add);
  console.log("Sum:", sum); 
  
  let difference = calculate(5, 3, subtract);
  console.log("Difference:", difference); 
  
  let product = calculate(5, 3, multiply);
  console.log("Product:", product); 
  
  let quotient = calculate(5, 3, divide);
  console.log("Quotient:", quotient); 
  

  try {
    let invalidResult = calculate(5, 0, divide);
  } catch (error) {
    console.error("Error:", error.message); 
  }