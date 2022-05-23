/*
Complete the function that accepts a string parameter, and reverses each word
in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

//input: string
//output: string backwards
//plan: split string into words, reverse words, join back into string

function reverseWords(str) {
  return str
    .split(" ")
    .map((str) => str.split("").reverse().join(""))
    .join(" ");
}
