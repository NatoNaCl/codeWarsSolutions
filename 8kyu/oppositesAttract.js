/*
Timmy & Sarah think they are in love, but around where they live, they will only
know once they pick a flower each. If one of the flowers has an even number of
petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return
true if they are in love and false if they aren't.
*/

function lovefunc(flower1, flower2) {
  return (Number(flower1) % 2 === 0 && Number(flower2) % 2 !== 0) ||
    Number(flower1 % 2 !== 0 && Number(flower2 % 2 === 0))
    ? true
    : false;
}
/*Number() method to make sure the number of petals in each flower is a number
Either the number of flower1 petals or flower2 petals must be even and the
other must be odd*/
