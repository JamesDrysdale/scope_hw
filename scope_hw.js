// EPISODE 1

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
}
  
const verdict = declareMurderer();
console.log(verdict);

// "Miss Scarlett" will be returned because the two functions below is can access from their parents. 
// So declareMurderer can access the value of the murderer key
// verdict can access the return value of declareMurderer

// EPISODE 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

// changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// I believe 'Professor Plum' will be returned because you cannot reassign the value of a constant
// Therefore the changeMurder function will produce an error

// EPISODE 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//I believe the first verdict will return 'Mrs Peacock' because the murderer is declared using let, which can be reassigned
// The function declareMurderer reassigns the murderer and stores it as a const but does not change the murderer variable
// Thus secondVerdict will return 'Professorr Plum'

// EPISODE 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// The suspects are declared with let, which can be changed. In delcare all suspects suspect 3 is reassigned and become Col Mustard
// Since let is block scoped to declareAllSuspects function it does not alter the original variable
// console.log suspects therefore returns Scarlett, Plum and Mustard
//Finally suspect 3 is Peacock

// EPISODE 5
// const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);

// The verdict will return 'Revolver' because the value of keys can be changed and that is what the functions do

// EPISODE 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The verdict will be Mrs White. Murderer is a let variable, which can be reassigned different values
// When changeMurderer is called, it also defines and calls plotTwist, so the murderer is changed twice.

//EPISODE 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//// Mr Green will be returned as the verdict. 
//// I believe it to be because the function calls for unexpectedOutcome and plotTwist are in the wrong place

// EPISODE 8

const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);


// The verdict will show that Col Mustand, used a Candle Stick in the dining room. Or at least show the candle stick as the weapon
// Change Scenarion changes the room to Dining room. When Dining Room is passed into plotTwist the condition in plotTwist function becomes true
// That changes the murderer to Mustard
// That makes unexpectedOutcome evaluate to true and thus the weapon is reassigned to Candle Stick

// Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// The verdict will return Professor Plum because although the murderer does equal Plum in the if statement
// let murderer declares a new block scoped variable and does not change the value assigned to the variable above, outside if statement


