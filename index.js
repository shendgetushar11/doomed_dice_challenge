// Part-A

// 1. Total Combinations
const totalCombinations = 6 * 6;
console.log("Total combinations possible:", totalCombinations);

// 2. Distribution of Possible Combinations
const distribution = [];
for (let i = 0; i < 6; i++) {
    distribution[i] = [];
    for (let j = 0; j < 6; j++) {
        distribution[i][j] = (i + 1) + (j + 1);
    }
}

console.log("Distribution of possible combinations:");
distribution.forEach(row => console.log(row.join(", ")));

// 3. Probability of Sums
const probability = {};
for (let i = 2; i <= 12; i++) {
    const count = distribution.reduce((acc, row) => acc + row.filter(value => value === i).length, 0);
    probability[i] = count / totalCombinations;
}

console.log("Probability of each sum:");
Object.entries(probability).forEach(([key, value]) => console.log(`P(Sum = ${key}) = ${value}`));

// Part-B

// Function to undoom the dice
function undoom_dice(Dice_A, Dice_B) {
    const newDiceA = transformDiceA(Dice_A);
    const newDiceB = Dice_B;
  
    return {
      New_Dice_A: newDiceA,
      New_Dice_B: newDiceB,
    };
  }
  
  function countOccurrences(diceA, diceB, target) {
    let count = 0;
    for (let i = 0; i < diceA.length; i++) {
      for (let j = 0; j < diceB.length; j++) {
        if (diceA[i] + diceB[j] === target) {
          count++;
        }
      }
    }
    return count;
  }
  
  function transformDiceA(Dice_A) {
    const transformedDiceAFaces = [];
  
    for (let i = 0; i < Dice_A.length; i++) {
      const originalSpots = Dice_A[i];
  
      let transformedSpots;
  
     if (originalSpots > 4) {
    transformedSpots = 4;
   } else {
    transformedSpots = originalSpots;
  }
  
      transformedDiceAFaces.push(transformedSpots);
    }
  
    return transformedDiceAFaces;
  }
  
  const diceAFaces = [1, 2, 3, 4, 5, 6];
  const diceBFaces = [1, 2, 3, 4, 5, 6];
  
  const transformedDice = undoom_dice(diceAFaces, diceBFaces);
  
  console.log("Original Dice A:", diceAFaces);
  console.log("Transformed Dice A:", transformedDice.New_Dice_A);
  console.log("Original Dice B:", diceBFaces);
  console.log("Transformed Dice B:", transformedDice.New_Dice_B);