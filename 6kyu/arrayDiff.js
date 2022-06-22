/*
Your goal in this kata is to implement a difference function, which
subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b
keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed
from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

//Input: 2 arrays
//Output: 1 array
//Plan:
//iterate over first and 2nd array
//check if any numbers in first array match numbers in 2nd array
//only push numbers that don't match to new array
//return new array

function arrayDiff(a, b) {
  if (a.length === 0 || b.length === 0) {
    return a;
  }

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        a.splice(i, 1);
        i--;
      }
    }
  }

  return a;
}
