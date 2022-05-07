/*
Take an array and remove every second element from the array. Always keep the
first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] -->
["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

function removeEveryOther(arr) {
  //declare empty array
  let firstElements = [];
  //loop through given array
  for (let i = 0; i < arr.length; i++) {
    //check if index is 0 or even
    if (i % 2 === 0) {
      //push this value to new array
      firstElements.push(arr[i]);
    }
  }
  //return new array with every other element
  return firstElements;
}

//Using the .filter() method
function removeEveryOther(arr) {
  return arr.filter((n, i) => i % 2 === 0);
}
