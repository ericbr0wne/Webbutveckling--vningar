function addNumbers(num) {
    let total = 0; 
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 || i % 5 === 0) { 
            total += i; 
        }
    }
    console.log(total); 
    return total; 
}

