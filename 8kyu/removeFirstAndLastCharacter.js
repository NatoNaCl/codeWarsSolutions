/*
It's pretty straightforward. Your goal is to create a function that removes the
first and last characters of a string. You're given one parameter, the original
string. You don't have to worry with strings with less than two characters.
*/

//inputs: string
//outputs: string without first and last characters
//examples:
//"great" => "rea"
//"brownie" => "rowni"
//"by" => "by"
//plan: loop string, find index of first character, find index of last
//character, return resulting string

function removeChar(str) {
  return str.slice(1, -1);
}
//slice() returns a new array containing only the extracted elements
