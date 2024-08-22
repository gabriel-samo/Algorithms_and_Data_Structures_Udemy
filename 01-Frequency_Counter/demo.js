// // N^2 Time Complexity. Because of indexOf method as it is a loop inside a loop. NOT OPTIMAL!
const sameNaive = (arr1, arr2) => {
  // Check if the arrays have the same length, if not return false
  if (arr1.length !== arr2.length) return false;
  // Create a frequency counter for the first array
  for (let i = 0; i < arr1.length; i++) {
    // Find the index of the square of the current element in the second array
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // If the square is not found in the second array, return false
    if (correctIndex === -1) return false;
    // Remove the found element from the second array
    arr2.splice(correctIndex, 1);
  }
  // If all elements are found, return true
  return true;
};

// calculate the time to run the function
console.time("Naive");

sameNaive(
  [1, 2, 7, 3, 10, 4, 8, 5, 9, 6],
  [1, 4, 9, 16, 25, 36, 100, 49, 64, 81]
);

console.timeEnd("Naive");

// ---------------------------------------------------------------------------------------------------

// N Time Complexity. Because the loops are not nested.
const sameRefactor = (arr1, arr2) => {
  // Check if the arrays have the same length, if not return false
  if (arr1.length !== arr2.length) return false;
  // Create a frequency counter for the first array
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // Loop through the first array and create a frequency counter
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  // Loop through the second array and create a frequency counter
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // Loop through the first frequency counter
  for (let key in frequencyCounter1) {
    // Check if the square of the key in frequencyCounter1 is in frequencyCounter2
    if (!(key ** 2 in frequencyCounter2)) return false;
    // Check if the frequency of the square of the key in frequencyCounter1 is the same as the frequency of the key in frequencyCounter2
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  // If all elements are found, return true
  return true;
};

// calculate the time to run the function
console.time("Refactor");

sameRefactor(
  [1, 2, 7, 3, 10, 4, 8, 5, 9, 6],
  [1, 4, 9, 16, 25, 36, 100, 49, 64, 81]
);

console.timeEnd("Refactor");
