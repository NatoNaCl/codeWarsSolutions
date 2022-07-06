/*
A pangram is a sentence that contains every single letter of the
alphabet at least once. For example, the sentence "The quick brown
fox jumps over the lazy dog" is a pangram, because it uses the letters
A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True
if it is, False if not. Ignore numbers and punctuation.
*/

//Input: string
//Output: boolean true or false
//Plan:
//declare a string with all letters of the alphabet
//turn string to lowercase to avoid unique cases
//compare string to letters of the alphabet, return boolean

function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  string = string.toLowerCase();
  return alphabet.every((a) => string.includes(a));
}
