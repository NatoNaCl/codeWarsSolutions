/*
The main idea is to count all the occurring characters in a string.
If you have a string like aba, then the result should be
{'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object
literal, {}.
*/

//Input: string
//Output: object that counts instances of each letter
//Plan:
//if empty, return empty object literal {}
//iterate over string
//conditional to check letters
//if 1 letter increment variable by 1
//if more than one letter increment variable by number of letters
//return object containing {'letter': number}

//hasOwnProperty() method returns a boolean depending on if the object
//directly contains a specific value
function count(string) {
  let numOfLetters = {};

  for (let i = 0; i < string.length; i++) {
    if (numOfLetters.hasOwnProperty(string[i])) {
      numOfLetters[string[i]]++;
    } else {
      numOfLetters[string[i]] = 1;
    }
  }
  return numOfLetters;
}
