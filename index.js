// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   for (let i = 0; i < array.length; i++) {
//     //n steps
//     const complement = target - array[i];
//     for (let j = i + 1; j < array.length; j ++) {
//       // n * n steps
//       if (array[j] === complement) return true;
//     }
//   }
//   return false;
// }

function hasTargetSum(array, target) {
  const seenNumbers = {};
  for (const number of array) {
    const complement = target - number;
  if (seenNumbers[complement]) return true;
  seenNumbers[number] = true;
}

return false

}



/* 
  Write the Big O time complexity of your function here
  Runtime: O(n^2)
  Space: 0(n)
*/

/* 
  create an object to keep track of numbers we've already seen

  Add your pseudocode here
  Iterate through each number in the array.
    For the current number, identify a complement that adds to the target (complement = target - num). 
    iterate through the rest of the aray
      Check if any number is our complement
      if so, return true
  If I reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
*/

/* 
I need to make a function hasTargetSum that checks if two numbers from the array add up to some target.
For example, if I have an array '[1, 2, 3, 4]' and the target is '6', I should return true because 2 and 4 add to 6. For each number check if there's a numebr that adds up to the target.
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
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7, 10], 22));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30, 39, 81, 80], 80));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 5, 7, 8, 9, 11, 15, 26, 37, 48], 4));
}

module.exports = hasTargetSum;
