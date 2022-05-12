/*Implement a function that adds two numbers together and returns their sum in
binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)*/

function addBinary(a, b) {
  return (a + b).toString(2);
}
//The .toString(2) method makes a binary value from a number

function addBinary(a, b) {
  let sum = a + b;
  let binary = "";
  while (sum > 0) {
    binary = (sum % 2) + binary;
    sum = Math.floor(sum / 2);
  }
  return binary;
}
/*Using a while loop we add the remainder of sum divided by 2 to empty string,
round down the value of sum divided by 2, repeat loop if value of sum > 0,
then return the binary variable*/
