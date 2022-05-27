/*
Create a function that returns the name of the winner in a fight between
two fighters.

Each fighter takes turns attacking the other and whoever kills the other
first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class
below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be
integers larger than 0. You can mutate the Fighter objects.
*/

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew")
  => "Lew"

  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

//input: fighter1, fighter2, firstAttacker
//ouput: whichever fighter hp > 0 is the winner
//plan:
//find how many turns till each fighter loses, health/damagePerAttack
//conditional if-else to compare hps of each fighter
//if less turns till no hp, that fighter loses(survives shorter time)
//if more turns till no hp, that fighter wins(survives longer)

function declareWinner(fighter1, fighter2, firstAttacker) {
  const turnsTillLose1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  const turnsTillLose2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);

  if (turnsTillLose1 > turnsTillLose2) {
    return fighter1.name;
  } else if (turnsTillLose2 > turnsTillLose1) {
    return fighter2.name;
  } else {
    return firstAttacker;
  }
}
