/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
Example:

h = 0
m = 1
s = 1

result = 61000

Input constraints:

    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59
*/

//Input: hours, minutes, seconds
//Output: milliseconds
//Plan:
// 1 second = 1000 milliseconds
// 1 minute = 60 seconds
// 1 hour = 60 minutes
//convert each parameter into milliseconds
//sum all parameters up
//return milliseconds

function past(h, m, s) {
  return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
}
