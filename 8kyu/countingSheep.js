/*
Consider an array/list of sheep where some sheep may be missing from
their place. We need a function that counts the number of sheep present
in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

//input: array
//ouput: integer
//plan: iterate over array
//conditional to check for boolean values: true = +1, false = 0
//else if null or undefined return 0

function countSheeps(arrayOfSheep) {
  let totalSheep = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      totalSheep += 1;
    }
  }
  return totalSheep;
}
