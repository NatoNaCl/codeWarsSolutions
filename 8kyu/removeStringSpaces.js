/*
Simple, remove the spaces from the string, then return the resultant
string.
*/

//Input: string
//Output: string
//Plan:
//declare empty string
//iterate over string
//check if character at index is a whitespace
//only add characters without whitespaces to the empty string
//return string

function noSpace(x) {
  let y = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      y += x[i];
    }
  }
  return y;
}
