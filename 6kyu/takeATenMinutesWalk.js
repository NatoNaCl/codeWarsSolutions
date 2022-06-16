/*
You live in the city of Cartesia where all roads are laid out in a
perfect grid. You arrived ten minutes too early to an appointment,
so you decided to take the opportunity to go for a short walk.
The city provides its citizens with a Walk Generating App on their
phones -- everytime you press the button it sends you an array of
one-letter strings representing directions to walk
(eg. ['n', 's', 'w', 'e']). You always walk only a single block for
each letter (direction) and you know it takes you one minute to
traverse one city block, so create a function that will return true
if the walk the app gives you will take you exactly ten minutes
(you don't want to be early or late!) and will, of course, return
you to your starting point. Return false otherwise.
*/

//Input: array of strings ['n','s','w','e']
//Output: boolean(true/false)
//Plan:
//each letter is 1 block and 1 min
//if 10 min, return true, else false
//iterate over array, if 10 string values, return true, else false
//test string to make sure the app doesn't backtrack

function isValidWalk(walk) {
  let distanceX = 0;
  let distanceY = 0;
  let distance = walk.length;

  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        distanceY++;
        break;
      case "s":
        distanceY--;
        break;
      case "w":
        distanceX--;
        break;
      case "e":
        distanceX++;
        break;
    }
  }
  return distance === 10 && (distanceX === 0) & (distanceY === 0);
}
