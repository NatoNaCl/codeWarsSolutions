/*
In this game, the hero moves from left to right. The player rolls the
dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position
of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15
*/

//input: position and roll
//output: new position
//examples:
//move(3,6) => 15
//move(0,4) => 8
//move(2,5) => 12
//plan: position + roll * 2

function move(position, roll) {
  return position + roll * 2;
}
