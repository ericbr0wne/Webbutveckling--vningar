function createFunctions(n) {
    const functions = [];
    for (let i = 0; i < n; i++) {
        functions.push((function(index) {
            return function() {
                return index;
            };
        })(i));
    }
    return functions;
}

// Example usage:
const funcs = createFunctions(5);
console.log(funcs[0]()); // Output: 0
console.log(funcs[1]()); // Output: 1
console.log(funcs[2]()); // Output: 2
console.log(funcs[3]()); // Output: 3
console.log(funcs[4]()); // Output: 4