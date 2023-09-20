'use strict'

class Warrior {
  constructor(characterName, health, power) {
      this.characterName = characterName;
      this.health = health;
      this.power = power;
  }
}

class Hero extends Warrior {
  constructor(characterName, health, power, hasMjolnir) {
    super(characterName, health, power);
    this.hasMjolnir = hasMjolnir
  }

  heroGreet(otherPerson) {
    console.log(`Hello ${otherPerson.characterName}, I am ${this.characterName} the Asgardian god of Thudner!  Your evil ways will abruptly come to an end!`);
  }

  heroAnnounce(otherPerson) {
    console.log(`Vile ${otherPerson.characterName}, you will now feel the unhindered power of Mjolnir.  Mjolnir!  Activate rm -rf!`);
  }

  heroAttack(otherPerson) {
    console.log(`Thor strikes ${otherPerson.characterName}, and ${this.characterName} is hit!  `);
    console.log('')
  }


}

class Villain extends Warrior {
  constructor(characterName, health, power, hasDom) {
    super(characterName, health, power);
    this.hasDom = hasDom;
  }

  villainGreet(otherPerson) {
    console.log(`Greetings ${otherPerson.characterName}, I am mighty ${this.characterName}.  My power knows no bounds you puny thunder God.  I hope you are prepared for your inevitable death!`);
  }

  villainTaunt(otherPerson) {
    console.log(`You are gravely mistaken, young ${otherPerson.characterName}.  Now shudder in terror, for when my DOCUMENT OBJECT MODEL refreshes this universe you will disappear!`);
  }
}

const thor = new Hero ('Thor', 30, 12, true);
const javascript =  new Villain ('JavaScript', 25, 10, true);

console.log(thor);
console.log(javascript);

thor.heroGreet(javascript);
javascript.villainGreet(thor);

thor.heroAnnounce(javascript);
javascript.villainTaunt(thor);

