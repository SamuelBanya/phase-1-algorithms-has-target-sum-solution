function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  console.log("seenNumbers: ", seenNumbers);
  for (const number of array) {
    console.log("number: ", number);
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

/*
  Write the Big O time complexity of your function here
*/

// O(4n): this is due to the two variables being passed into the function as well as the two non 'const' variables created within the function itself

/*
  Add your pseudocode here
*/

// Way lengthy and wacky solution is:
// Look at entire array by using .forEach() loop for cycle through elements
// Use 'i' and 'j' variables to start at the beginning, and have 'i' equal to i+i so it goes ahead of 'i'
// Use 'k' and 'l' variables to start at the end, and have 'l' equal to k-1, so it goes before 'l'
// The only edge cases that are present are what to do if random values within the array itself equal to the 'target' --> This is what I have no idea how to accommodate

// Another possible solution:
// Sort all of the elements in ascending order --> No reason other than the 'sock' example used in the lessons where its easier to compare elements upon sorting
// Then, use a variable 'i' cycle through the entire array within one for loop
// Then, use a second 'j' variable cycle through the entire array within an embedded for loop
// Add an if statement within the second for loop to do the main comparison logic present to either return true or false
// This if statement most likely can be just further optimized to only include the if statement to return true

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 15));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2, 2], 3));
}

module.exports = hasTargetSum;
