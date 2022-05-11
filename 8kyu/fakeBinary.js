/*
Given a string of digits, you should replace any digit below 5 with '0' and any
digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x) {
  //turn string of integers into array
  //loop through array and check if each integer is < 5, return 0, else return 1
  //turn new array back into string of integers
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}
