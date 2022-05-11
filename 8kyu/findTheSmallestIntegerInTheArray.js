/*
Given an array of integers your solution should find the smallest integer.

For example:

    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallestInteger;
    for (let i = 0; i < args.length; i++) {
      if (args[i] <= args[0]) {
        args[0] = args[i];
        smallestInteger = args[i];
      }
    }
    return smallestInteger;
  }
}
/*Used a for loop with an if statment within to compare the first two indexes of
the array, 0 and i. Whichever number is smaller, it is reassigned as the initial
value and the loop will run again comparing the new initial value to the next
index in the array.*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
//Using Math.min built-in method to return the smallest value
