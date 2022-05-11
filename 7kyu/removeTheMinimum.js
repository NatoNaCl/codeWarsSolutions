/*
The museum of incredible dull things

The museum of incredible dull things wants to get rid of some exhibitions.
Miriam, the interior architect, comes up with a plan to remove the most boring
exhibitions. She gives them a rating, and then removes the one with the lowest
rating.

However, just as she finished rating all exhibitions, she's off to an important
fair, so she asks you to write a program that tells her the ratings of the items
after one removed the lowest one. Fair enough.

Task

Given an array of integers, remove the smallest value. Do not mutate the
original array/list. If there are multiple elements with the same value, remove
the one with a lower index. If you get an empty array/list, return an empty
array/list.

Don't change the order of the elements that are left.
Examples

* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

function removeSmallest(numbers) {
  let emptyArray = [];
  let min = numbers.indexOf(Math.min(...numbers));
  for (let i = 0; i < numbers.length; i++) {
    if (i !== min) {
      emptyArray.push(numbers[i]);
    }
  }
  return emptyArray;
}
/*declare empty array which is returned if numbers is an empty array/list,
otherwise find the index of the minimum integer in the numbers array and assign
to a variable, loop through the numbers array and if the integers are not equal
to the minimum integer in the numbers array, push those integers to the empty
array and return the array*/

function removeSmallest(numbers) {
  let smallestIndex = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((n, i) => i !== smallestIndex);
}
/*Found the index of the smallest integer in the numbers array then filtered the
numbers array and returned a new array with only the integers that did not match
up with the smallestIndex*/
