/*
Task

Given a string str, reverse it and omit all non-alphabetic characters.

Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".
Input/Output

    [input] string str

A string consists of lowercase latin letters, digits and symbols.

    [output] a string
*/

//Input: string
//Output: string with only alphabetic characters
//Plan:
//declare empty string
//iterate over string backwards
//only add alphabetical characters to empty string
//return string

function reverseLetter(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i].toLowerCase() === str[i].toUpperCase()) {
      continue;
    }
    newStr += str[i];
  }
  return newStr;
}
