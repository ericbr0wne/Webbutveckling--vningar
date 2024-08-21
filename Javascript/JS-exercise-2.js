function singBottlesOfBeer() {
    for (let bottles = 99; bottles > 0; bottles--) {
      let nextBottles = bottles - 1;
  
      let bottleWord = bottles === 1 ? "bottle" : "bottles";
  
      nextBottlesWord = nextBottles === 0 ? "no more" : nextBottles;
  
      console.log(`${bottles} ${bottleWord} of beer on the wall, ${bottles} ${bottleWord} of beer.`);
      console.log(`Take one down and pass it around, ${nextBottlesWord} ${nextBottlesWord === "no more" ? "bottles" : bottleWord} of beer on the wall.`);
  
      if (bottles > 1) {
        console.log(""); 
      }
    }

    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
  }
  
  singBottlesOfBeer();