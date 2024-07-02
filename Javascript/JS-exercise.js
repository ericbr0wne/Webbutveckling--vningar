//Exercise1
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

//Exercise2
for (let bottles = 99; bottles > 0; bottles--) {
    if (bottles === 1) {
      console.log(
        `${bottles} bottle of beer on the wall, ${bottles} bottle of beer.`
      );
      console.log(
        `Take one down and pass it around, no more bottles of beer on the wall.`
      );
    } else {
      console.log(
        `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`
      );
      console.log(
        `Take one down and pass it around, ${bottles - 1} bottles of beer on the wall.`
      );
    }
    console.log(""); // Add an empty line between verses
  }
  
  console.log("No more bottles of beer on the wall, no more bottles of beer.");
  console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");

//Exercise3


//Exercise4


//Exercise5
