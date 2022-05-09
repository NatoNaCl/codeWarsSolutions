/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted
string, the longest possible, containing distinct letters - each taken only once
- coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

/*Concatenate given strings, split into individual letters,
filter out only letters that are identical, sort in alphbetical order,
join letters back together and return the new string*/
function longest(s1, s2) {
  s1 += s2;
  return s1
    .split("")
    .filter((firstLetter, otherLetter, newArray) => {
      return newArray.indexOf(firstLetter) === otherLetter;
    })
    .sort()
    .join("");
}
