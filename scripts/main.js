'use strict'


// WARRIOR CLASS
class Warrior {
  constructor(characterName, health = [], power) {
    this.characterName = characterName;
    this.health = health;
    this.power = power;
  }
}


// Hero Class, an extension of Warrior
class Hero extends Warrior {
  constructor(characterName, health = [], power, hasMjolnir) {
    super(characterName, health, power);
    this.hasMjolnir = hasMjolnir
  }

  heroGreet(otherPerson) {
    // console.log(`Hello ${otherPerson.characterName}, I am ${this.characterName} the Asgardian god of Thudner!  Your evil ways will abruptly come to an end!`);
    document.querySelector('#hGreeting').innerText = `Hello ${otherPerson.characterName}, I am ${this.characterName} the Asgardian god of Thudner!  Your evil ways will abruptly come to an end!`;
  };

  heroAnnounce(otherPerson) {
    // console.log(`Vile ${otherPerson.characterName}, you will now feel the unhindered power of Mjolnir.  Mjolnir!  Activate rm -rf!`);
    document.querySelector('#hAnnounce').innerText = `Vile ${otherPerson.characterName}, you will now feel the unhindered power of Mjolnir.  Mjolnir!  Activate rm -rf!`;
  };

  heroAttack(otherPerson) {
    const healthModify = otherPerson.health - this.power;
    document.querySelector('#hAttack').innerText = `${this.characterName} strikes ${otherPerson.characterName}, and ${otherPerson.characterName} is hit!`;
    document.querySelector('#hHealth').innerText = `${otherPerson.characterName} has ` + healthModify + ` health remaining.`;
  };

  heroAttack2(otherPerson) {
    document.querySelector('#hFinish').innerText = `${this.characterName} raises Mjolnir high over his head... a gutteral war cry eminates from deep within him as he brings the hammer downwards and strikes ${otherPerson.characterName} across the face. It is a clean blow, and a deadly one.  Without drama, ${otherPerson.characterName} disintegrates into the ether and is gone.`;
    document.querySelector('#hFinish2').innerText = `The finality of this moment lingers heavily in the atmosphere.  The only audible sound is our Hero's heavy breathing.  He pauses in the silence for a long moment while the new reality of a world without villainous ${otherPerson.characterName} settles into existence.  Evil is defeated this day.  The god of Thunder cracks a Miller Lite in victory.  His work here is done.`;
    document.querySelector('#hFinish3').innerText = '... belch...';
  };
}

// Villain Class, an extension of Warrior
class Villain extends Warrior {
  constructor(characterName, health = [], power, hasDom) {
    super(characterName, health, power);
    this.hasDom = hasDom;
  }

  villainGreet(otherPerson) {
    // console.log(`Greetings ${otherPerson.characterName}, I am mighty ${this.characterName}.  My power knows no bounds you puny thunder God.  I hope you are prepared for your inevitable death!`);
    document.querySelector('#vGreeting').innerText = `Greetings ${otherPerson.characterName}, I am mighty ${this.characterName}.  My power knows no bounds you puny thunder God.  I hope you are prepared for your inevitable death!`;
  }

  villainTaunt(otherPerson) {
    // console.log(`You are gravely mistaken, young ${otherPerson.characterName}.  Now shudder in terror, for when my DOCUMENT OBJECT MODEL refreshes this universe you will disappear!`);
    document.querySelector('#vTaunt').innerText = `You are gravely mistaken, young ${otherPerson.characterName}.  Now shudder in terror, for when my DOCUMENT OBJECT MODEL refreshes this universe you will disappear!`;
  }

  villainAttack(otherPerson) {
    const healthModify = otherPerson.health - this.power;
    document.querySelector('#vAttack').innerText = `${this.characterName} strikes ${otherPerson.characterName}, and ${otherPerson.characterName} is hit!`;
    document.querySelector('#vHealth').innerText = `${otherPerson.characterName} has ` + healthModify + ` health remaining.`;
  }
}

// Instantiate a new Hero and a new Villain
const thor = new Hero('Thor', 30, 15, true);
const javascript = new Villain('JavaScript', 25, 10, true);

// Console log to confirm their accuracy
// console.log(thor);
// console.log(javascript);

// Greetings to one another in preparation for battle
// thor.heroGreet(javascript);
// javascript.villainGreet(thor);

// Hero announces himself, Villain taunts Hero
// thor.heroAnnounce(javascript);
// javascript.villainTaunt(thor);

// Hero attacks Villain
// thor.heroAttack(javascript);

// Villain attacks Hero
// javascript.villainAttack(thor);

// Hero attacks Villain again
// thor.heroAttack2(javascript);

const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');

btn0.addEventListener('click', () => {
  thor.heroGreet(javascript);
});

btn1.addEventListener('click', () => {
  javascript.villainGreet(thor);
});

btn2.addEventListener('click', () => {
  thor.heroAnnounce(javascript);
});

btn3.addEventListener('click', () => {
  javascript.villainTaunt(thor);
});

btn4.addEventListener('click', () => {
  thor.heroAttack(javascript);
});

btn5.addEventListener('click', () => {
  javascript.villainAttack(thor);
});

btn6.addEventListener('click', () => {
  thor.heroAttack2(javascript);
});