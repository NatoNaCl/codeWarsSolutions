/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):

* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "*/

function doubleChar(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newStr += str[i] + str[i];
    } else if (str[i] === str[i].toLowerCase()) {
      newStr += str[i] + str[i];
    }
  }
  return newStr;
}

//Refactored version
function doubleChar(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + str[i];
  }
  return newStr;
}

//Using .split().map().join()
const doubleChar = (str) =>
  str
    .split("")
    .map((i) => i + i)
    .join("");
