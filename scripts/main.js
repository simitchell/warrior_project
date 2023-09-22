// 'use strict'

// WARRIOR CLASS
class Warrior {
  constructor(characterName, attributes, health, power, weapon) {
    this.characterName = characterName;
    this.attributes = attributes;
    this.health = health;
    this.power = power;
    this.weapon = weapon;
  }

  alive() {
    return this.health > 0;
  }
}
// Hero Class, an extension of Warrior
class Hero extends Warrior {
  constructor(characterName, attributes, health, power, weapon) {
    super(characterName, attributes, health, power, weapon);
  }

  heroGreet() {
    document.querySelector('#hGreeting').innerText = `I am ${this.characterName} the ${this.attributes}!  My power level is ${this.power}, my health is ${this.health}, and I wield ${this.weapon}!  None can defeat me, and if you should try, then your evil ways will abruptly come to an end!`;
  };

  heroAnnounce(otherPerson) {
    document.querySelector('#hAnnounce').innerText = `I laugh at your ignorance.  Power surges throughout my body and you will soon witness it firsthand.  Surely I do not concede this battle.  Vile ${otherPerson.characterName}, you will now feel the unhindered power of ${this.weapon}.  ${this.weapon}!  Activate rm -rf!`;
  };

  heroAttack(otherPerson) {
    otherPerson.health = otherPerson.health - this.power;
    document.querySelector('#hAttack').innerText = `Lightning flashes across the sky as ${this.characterName} strikes ${otherPerson.characterName}, and ${otherPerson.characterName} is hit!`;
    if (otherPerson.alive()) {
      document.querySelector('#hHealth').innerText = `${otherPerson.characterName} has ${otherPerson.health} health remaining`;
      return;
    }
    document.querySelector('#Finish').innerText = `${this.characterName} raises ${this.weapon} high over his head... a gutteral war cry eminates from deep within as the weapon falls downwards and strikes ${otherPerson.characterName} across the face. It is a clean blow, and a deadly one.  Without drama, ${otherPerson.characterName} disintegrates into the ether and is gone.`;
    document.querySelector('#Finish2').innerText = `The finality of this moment lingers heavily in the atmosphere.  The only audible sound is ${this.characterName}'s heavy breathing.  He pauses in the silence for a long moment while the new reality of a world without villainous ${otherPerson.characterName} settles into existence.  Evil is defeated this day.  The ${this.attributes} cracks a Miller Lite in victory.  His work here is done.`;
    document.querySelector('#Finish3').innerText = '... belch...';
    return;
  };


  // heroAttack2(otherPerson) {

  // };
};

// Villain Class, an extension of Warrior
class Villain extends Warrior {
  constructor(characterName, attributes, health, power, weapon) {
    super(characterName, attributes, health, power, weapon);
  }

  villainGreet() {
    document.querySelector('#vGreeting').innerText = `I am mighty ${this.characterName} the ${this.attributes}.  With a power level of ${this.power} and a health of ${this.health}, I stand in defiance of lesser beings who have spent lifetimes trying to unlock my weaknesses in vain.  I wield the ${this.weapon} and my power knows no bounds!`;
  }

  villainTaunt(otherPerson) {
    document.querySelector('#vTaunt').innerText = `You are gravely mistaken, puny ${otherPerson.characterName}.  I hope you are prepared for your inevitable death!  Concede now or I shall take it upon me to bring it thusly.  Now shudder in terror, for when my ${this.weapon} refreshes this universe you will disappear and be forgotten for all time!`;
  }

  villainAttack(otherPerson) {
    otherPerson.health = otherPerson.health - this.power;
    document.querySelector('#vAttack').innerText = `A deep rumbling emenates from the ground as ${this.characterName} strikes ${otherPerson.characterName}, and ${otherPerson.characterName} is hit!`;
    if (otherPerson.alive()) {
      document.querySelector('#vHealth').innerText = `${otherPerson.characterName} has ${otherPerson.health} health remaining.`;
      return;
    }
    document.querySelector('#Finish').innerText = `That's it.  ${this.characterName} has defeated ${otherPerson.characterName}.  Everything sucks.  Game Over.  Everyone go home.`;
    document.querySelector('#Finish2').innerText = '';
    document.querySelector('#Finish3').innerText = '';
  }
};

// Zombie Class, an extension of Warrior
class Zombie extends Warrior {
  constructor(characterName, attributes, health, power, weapon) {
    super(characterName, attributes, power, weapon);
    this.health = Infinity;
  }

  zombieGreet() {
    document.querySelector('#vGreeting').innerText = `growl`
  }

  zombieTaunt(otherPerson) {
    document.querySelector('#vTaunt').innerText = `ughhmfbhfhfhfffhhhthttthffk.`
  }

  zombieAttack() {
    otherPerson.health = otherPerson.health - this.power;
    document.querySelector('#vAttack').innerText = `${this.characterName} bites ${otherPerson.characterName}.`;
    if (otherPerson.alive()) {
      document.querySelector('#vHealth').innerText = `${otherPerson.characterName} has ${otherPerson.health} health remaining.`;
      return;
    }
    document.querySelector('#Finish').innerText = `${this.characterName} bites your jugular.  Blood sprays everywhere, you give up the fight and die.  It was inevitable.`;
  }
}

// let state = {
//   myHero: null,
//   myVillain: null
// };

// Assign buttons to constants
const btnSubmit = document.getElementById('btnSubmit');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

// btnSubmit instantiates all heroes and villains, then selects them depending on the user's input
let myHero;
let myVillain;
btnSubmit.addEventListener('click', () => {
  event.preventDefault();
  function selHero() {
    const thor = new Hero('Thor', 'Asgardian god of Thunder', 30, 15, 'Mjolnir');
    const sam = new Hero('Sam', 'developer of web', 35, 5, 'MacBook Pro');
    const frodo = new Hero('Frodo Baggins', 'Ring-bearer', 60, 35, 'The One Ring')
    if (document.querySelector('#heroSelect').value === "1") {
      myHero = thor;
    }
    if (document.querySelector('#heroSelect').value === "2") {
      myHero = sam;
    }
    if (document.querySelector('#heroSelect').value === "3") {
      myHero = frodo;
    }
    console.log(myHero);
    return myHero;
  }

  function selVillain() {
    const javascript = new Villain('JavaScript', 'complicated', 30, 10, 'DOCUMENT OBJECT MODEL');
    const zombie = new Villain('The Mysterious Undead', null, null, 1, null);
    const vader = new Villain('Darth Vader', 'Sith Lord', 60, 25, 'Force Choke');
    if (document.querySelector('#villainSelect').value === "1") {
      myVillain = javascript;
    }
    if (document.querySelector('#villainSelect').value === "2") {
      myVillain = zombie;
    }
    if (document.querySelector('#villainSelect').value === "3") {
      myVillain = vader;
    }
    console.log(myVillain);
    return myVillain
  }

  selHero();
  selVillain();
});

// btn0 through btn5 are clicked to proceed in the story.  They trigger text and the next consecutive button to display on the DOM
btn0.addEventListener('click', () => {
  event.preventDefault();
  myHero.heroGreet(myVillain);
  function show(a) {
    const element = document.getElementById('btn1');
    element.classList.toggle(a);
  }
  if (document.getElementById('btn1').classList.contains('btnVG'))
    show('btnVG');
});

btn1.addEventListener('click', () => {
  event.preventDefault();
  myVillain.villainGreet(myHero);
  function show(a) {
    const element = document.getElementById('btn2');
    element.classList.toggle(a);
  }
  if (document.getElementById('btn2').classList.contains('btnHAn'))
    show('btnHAn');
});

btn2.addEventListener('click', () => {
  event.preventDefault();
  myHero.heroAnnounce(myVillain);
  function show(a) {
    const element = document.getElementById('btn3');
    element.classList.toggle(a);
  }
  if (document.getElementById('btn3').classList.contains('btnVT'))
    show('btnVT');
});

btn3.addEventListener('click', () => {
  event.preventDefault();
  myVillain.villainTaunt(myHero);
  function show(a) {
    const element = document.getElementById('btn4');
    element.classList.toggle(a);
  }
  if (document.getElementById('btn4').classList.contains('btnHAt'))
    show('btnHAt')
});

btn4.addEventListener('click', () => {
  event.preventDefault();
  myHero.heroAttack(myVillain);
  function show(a) {
    const element = document.getElementById('btn5');
    element.classList.toggle(a);
  }
  if (document.getElementById('btn5').classList.contains('btnVAt'))
    show('btnVAt')
});

btn5.addEventListener('click', () => {
  event.preventDefault();
  myVillain.villainAttack(myHero);
});