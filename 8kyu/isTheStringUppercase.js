/*
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)

"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
*/

//Plan:
//check with conditional whether it is uppercase
//return boolean

String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};
