/*
In a factory a printer prints labels for boxes. For one kind of boxes
the printer has to use colors which, for the sake of simplicity, are
named with letters from a to m.

The colors used by the printer are recorded in a control string. For
example a "good" control string would be aaabbbbhaijjjm meaning that
the printer used three times color a, four times color b, one time
color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction
and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm
with letters not from a to m.

You have to write a function printer_error which given a string will
return the error rate of the printer as a string representing a
rational whose numerator is the number of errors and the denominator
the length of the control string. Don't reduce this fraction to a
simpler expression.

The string has a length greater or equal to one and contains only
letters from ato z.

Examples:

s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/

//Input: string of letters
//Output: fraction of errors as a string
//Todo:
//turn string into array to use array methods
//iterate over array
//compare letters of input string with letters a through m
//if input letter !== any letters a through m, error += 1
//use string template literal to return fraction in a string
//fraction --> ${number of errors / total letters}

function printerError(s) {
  let errors = 0;
  const letters = [
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

  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[j] === letters[i]) {
        errors++;
      }
    }
  }
  return errors + "/" + s.length;
}
