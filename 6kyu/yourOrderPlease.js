/*
Your task is to sort a given string. Each word in the string will
contain a single number. This number is the position the word should
have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in
the input String will only contain valid consecutive numbers.
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e
pe6ople"
""  -->  ""
*/

//Input: unordered string
//Output: ordered string from least to greatest by number in string
//Plan:
//declare empty array
//split sentence into words
//iterate over letters in each word
//check if the index in each word is a number greater than 0
//push word to empty array
//join array back into a sentence

function order(words) {
  let newWords = [];
  let splitWords = words.split(" ");
  for (let i = 0; i <= splitWords.length; i++) {
    for (let j = 0; j < splitWords.length; j++) {
      if (splitWords[j].indexOf(i) >= 0) {
        newWords.push(splitWords[j]);
      }
    }
  }
  return newWords.join(" ");
}
