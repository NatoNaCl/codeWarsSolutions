/*
Given a random non-negative number, you have to return the digits of
this number within an array in reverse order.

Example(Input => Output):

348597 => [7,9,5,8,4,3]
0 => [0]
*/

//Input: positive number
//Output: array of reversed digits
//Plan:
//turn number into string to use array methods on string
//split number into individual numbers in an array
//reverse integers in the array
//convert string digits back into numbers
//return array of digits

function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}
