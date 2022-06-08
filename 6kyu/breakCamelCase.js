/*
Complete the solution so that the function will break up camel casing,
using a space between words.

Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

//Input: string
//Output: strings with camel casing have space between
//Plan:
//check input string if uppercase
//iterate over letters then split with a space
//else return the input string with no changes

function solution(string) {
  return string
    .split("")
    .map((str) => (str === str.toUpperCase() ? " " + str : str))
    .join("");
}
