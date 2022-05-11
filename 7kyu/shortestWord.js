/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  return s
    .split(" ") //separate strings into words in an array
    .map((a) => a.length) //iterate over words and convert to number of letters
    .reduce((a, b) => Math.min(a, b)); //iterate over, find smallest number
}
