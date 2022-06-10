/*
In this kata you will create a function that takes a list of
non-negative integers and strings and returns a new list with the
strings filtered out.

Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

//Input: array of non-negative integers and strings
//Output: array of non-negative integers
//Plan:
//iterate over array
//check whether each value is an integer or string
//if integer push to array
//if string skip
//return new array

function filter_list(l) {
  let filtered = [];
  for (let i = 0; i < l.length; i++) {
    if (l[i] !== `${l[i]}`) {
      filtered.push(l[i]);
    }
    continue;
  }
  return filtered;
}
