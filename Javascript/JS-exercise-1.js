function sumMultiples(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

let userInput = 124;

if (userInput) {
  let result = sumMultiples(userInput);
  console.log("The sum of multiples of 3 or 5 up to", userInput, "is:", result);
} else {
  console.log("Invalid input. Please enter a number.");
}