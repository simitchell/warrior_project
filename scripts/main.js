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
    document.querySelector('#hGreeting').innerText = `I am ${this.characterName} the Asgardian god of Thunder!  My power level is 15, my health is 30, and I wield Mjolnir!  None can defeat me, and if you should try, then your evil ways will abruptly come to an end!`;
  };

  heroAnnounce(otherPerson) {
    document.querySelector('#hAnnounce').innerText = `Puny!?  I laugh at your ignorance.  See the power of Asgard in the strengh of my arms which are the size of Volkswagens.  Surely I do not concede this battle.  Vile ${otherPerson.characterName}, you will now feel the unhindered power of Mjolnir.  Mjolnir!  Activate rm -rf!`;
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
    document.querySelector('#vGreeting').innerText = `I am mighty ${this.characterName}.  With a power level of 10 and a health of 15, I stand in defiance of lesser beings who have spent lifetimes trying to unlock my weaknesses in vain.  My power knows no bounds!  You puny thunder god, I hope you are prepared for your inevitable death!  Concede now or I shall take it upon me to bring it thusly.`;
  }

  villainTaunt(otherPerson) {
    document.querySelector('#vTaunt').innerText = `You are gravely mistaken, young ${otherPerson.characterName}.  Now shudder in terror, for when my DOCUMENT OBJECT MODEL refreshes this universe you will disappear and Asgard will be forgotten for all time!`;
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

// Assign buttons to constants
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');

// The actions behind button clicks.  Calls functions, reveals the next button in the story
btn0.addEventListener('click', () => {
  thor.heroGreet(javascript);
  function show(a) {
    const element = document.getElementById('btn1');
    element.classList.toggle(a);
  }
  show('btnVG');
});

btn1.addEventListener('click', () => {
  javascript.villainGreet(thor);
  function show(a) {
    const element = document.getElementById('btn2');
    element.classList.toggle(a);
  }
  show('btnHAn')
});

btn2.addEventListener('click', () => {
  thor.heroAnnounce(javascript);
  function show(a) {
    const element = document.getElementById('btn3');
    element.classList.toggle(a);
  }
  show('btnVT')
});

btn3.addEventListener('click', () => {
  javascript.villainTaunt(thor);
  function show(a) {
    const element = document.getElementById('btn4');
    element.classList.toggle(a);
  }
  show('btnHAt')
});

btn4.addEventListener('click', () => {
  thor.heroAttack(javascript);
  function show(a) {
    const element = document.getElementById('btn5');
    element.classList.toggle(a);
  }
  show('btnVAt')
});

btn5.addEventListener('click', () => {
  javascript.villainAttack(thor);
  function show(a) {
    const element = document.getElementById('btn6');
    element.classList.toggle(a);
  }
  show('btnHSA')
});

btn6.addEventListener('click', () => {
  thor.heroAttack2(javascript);
});