/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the
alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in
the original string.

All letters will be lowercase and all inputs will be valid.
*/

//Input: string of lowercase words
//Output: highest scoring word
//Plan:
//convert string to array of words
//iterate through words
//iterate through letters in each word
//compare each letter to their corresponding numbers, add them up
//compare each word to other words in array
//return highest scoring word

function high(x) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let words = x.split(" ");
  let highestScore = 0;
  let highestScoreWord = "";

  //iterating over string to get each word
  for (let word of words) {
    let lettersSum = 0;

    //iterate over words to get each letter
    for (let letter of word) {
      lettersSum += alphabets.indexOf(letter) + 1;
    }

    //compare score of each word, concatenate to empty string
    if (lettersSum > highestScore) {
      highestScore = lettersSum;
      highestScoreWord = word;
    }
  }

  return highestScoreWord;
}
