// Creating Variables

const christmasPart1 = 'Merry Christmas to all, ';
const christmasPart2 = 'and to all a good night';

// Concatenation and toUpperCase Method
const christmasMessage = christmasPart1 + christmasPart2;
const shoutingChristmasMessage = christmasMessage.toUpperCase() + '!';

// Creating Objects

// Object Literal Notation
const myHouse = {
  bedrooms: 3,
  garage: true,
  kitchen: 'small'
};

// Dot Notation
const myWardrobe = {}
myWardrobe.blouses = 5;
myWardrobe.colorful = false;
myWardrobe.style = 'Boho Chic';


// Bracket Notation
const chaleyBoatmon = {}
chaleyBoatmon[ 'children' ] = 0;
chaleyBoatmon[ 'marital status' ] = 'single';
chaleyBoatmon[' home owner '] = false;

// Create function to make an object

function createPizza(size, crust, sauce, numberOfToppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.numberOfToppings = numberOfToppings;
}

const peterPizza = new createPizza('medium', 'thin', 'originalMarinara', 3);
const paxtonPizza = new createPizza('large', 'hand-tossed', 'spicy marinara', 2);
const penelopePizza = new createPizza('small', 'handmade', 'alfredo', 1);

// console.log(peterPizza);

// Create arrow function to make objects (Not standard and I need to read more about |arrow functions|)
const studentProfile = ( firstName, lastName, race, age, publicSchool ) => {
  return { firstName, lastName, race, age, publicSchool }
};

const student1 = studentProfile( 'Maria', 'Lopez', 'hispanic', 7, true );
const student2 = studentProfile( 'Raymond', 'Brown', 'white', 8, true );
const student3 = studentProfile( 'William', 'Hayes', 'black', 7, false );

// Create Array
let classRoster = [student1, student2, student3];

// Accessing Information, pop, push, shift, unshift
const addAges = classRoster[0].age + classRoster[1].age + classRoster[2].age;

let agesDividedByStudents = addAges / classRoster.length;

agesDividedByStudents = Math.round(agesDividedByStudents);

const newstudent3 = classRoster.pop();

const multiplicand = classRoster.push(studentProfile('Amelia', 'Wu', 'asian', 8, false));

const newStudent1 = classRoster.shift();

const multiplier = classRoster.unshift(studentProfile('Amy', 'Colonel', 'white', 7, false));

const product = multiplicand * multiplier;


// Concat, reverse, sort, and slice methods

const colors1 = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Create an array with more colors. Then, add both arrays together.

const colors2 = ['pink', 'brown', 'black', 'white'];

let allColors = colors1.concat(colors2);

// Create another array and add all 3 arrays together in 2 different ways

const colors3 = ['magenta', 'periwinkle', 'chartruse'];

allColors = allColors.concat(colors3);
// console.log(colors1.concat(colors2, colors3));

// Create a variable equal to allColors in reverse

const reverseColors = allColors.reverse();

// Create a variable equal to allColors in alphabetical order

const alphaColors = allColors.sort();

// Create a weather array

const weather = ['rainy', 'cold', 'chilly', 'snowy', 'cloudy', 'hot', 'warm', 'humid'];


// Create a variable that catches all of the winter values
// Create a variable that catches all of the summer values

const winter = weather.slice(0, 5);
const summer = weather.slice(-3, 8); 
// Since we don't want to cut anything off, you don't have to enter a second argument

// const summer = weather.slice(5);

// Do the same thing, but with negative numbers

// const winter = weather.slice(-8, -3);
// const summer = weather.slice(-3);

// Functions

// Create a function that greets the neighbor

let neighborMorningGreeting = () => {
  return 'Good morning, neighbor!'
};

// When you console log the function, you must add parentheses
// console.log(greetNeighbor())

// Create a function that tells neighbor good evening

let neighborEveningGreeting = () => {
  return 'Good evening, neighbor. Thanks for everything!';
}

// console.log(neighborEveningGreeting())

// Rewrite the functions including a paramater and argument for name in both
// Replace everythign in the section function with a parameter argument naming task

neighborMorningGreeting = (firstName) => {
  return 'Good morning' + firstName + '!'
};

neighborEveningGreeting = (firstName, taskCompleted) => {
  return 'Good evening, ' + firstName + '. Thanks for ' + taskCompleted + '!'
};

// console.log(neighborEveningGreeting('Mitchel', 'helping me move all of that furniture'));

//Function Declaration, Function Expressions, and IIFEs

// Create a function declaration

function morningGreeting(person) {
  return 'Good morning ' + person + '!'; 
}

// Create an anonymous function expression
const multiply = function(a, b) {
  return a * b;
}

// Create a named function expression
const add = function addition(a, b) {
  return a + b;
}

// Create an iife: immediately invoked function expression

const babysitter = (function(babysitter, familyName, when) {
  return babysitter + ' can babysit for the ' + familyName + 's ' + when + '.'; 
}('Nya', 'Johnson', 'tonight'))

// console.log(morningGreeting);
// console.log(morningGreeting('Jill'));
// console.log(multiply);
// console.log(multiply(3, 5));
// console.log(add);
// console.log(add(3, 5));
// console.log(babysitter);


// Function Scopes - global and local

// Global
const test1 = 'public';
// console.log(test1)

// Local
function holdScope() {
  const test2 = 'private';
  return test2;
}
// console.log(test2) will show as undefined
// console.log(holdScope())

// Access a global scope within a local scope

const scope = 'public'

function scopeArray() {
  const scope = 'private';
  return [scope, newScope];
}
// console.log(scopeArray())


// If you do not declare your variable with a keyword, 
// it is automatically a global variable 
// EVEN if you put it inside of a function

// function roadTrip() {
  // const gallons = 12;
  // const mpg = 34;
  // return gallons * mpg
// }

// console.log(roadTrip()) This returns 408

// Move local variables to global scope



// const gallons = 12;
// const mpg = 34;

// function roadTrip() {
  // const gallons = 10;
  // const mpg = 5;
  // return gallons * mpg;
// }

// console.log(roadTrip())
// This returns 50

// We do not have to create any parameters or accept any arguments because gallons and mpg already exist,
// The interpreter will first look at the local scope, whatever it has inside itself already
// If the information is not there, it just has to go outwards to the global scope to get it

const gallons = 12;
const mpg = 34;

function roadTrip() {
  return gallons * mpg;
}

// console.log(roadTrip())
// This returns 408

// If you assign a value to a variable without using a keyword, it will automatically be placed in the global scope
// Though you can do this, it is not best practice
// To show an error any time you do this, you use the use Strict Mode in an iffe
// This will show an error that food is not defined
// You will most likely never need to do this
// (function useStrict() {
// 'use strict';
//  food = 'pizza'
// }())

// Nested functions 
// Create a function within a function

const person = 'Jill';

function hello() {
  const greeting = 'Hello ';
  function fullGreeting() {
    return greeting + person + '!';
  }
  return fullGreeting() + ' Bonjour!';
}


// console.log(hello())

// If, If/Else, Else/If
// You can have the word return multiple times in this function 
// because the return will only be hit once

const testScores = [99, 85, 63, 70, 55];

function teacherMessage(grade) {
  if(grade>89) {
    return 'Congratulations, you got an A';
  } else if(grade>79) {
    return 'Great job, you got a B.';
  } else if(grade>69) {
    return 'Not bad, you got a C.';
  } else if(grade>59) {
    return 'You passed, you got a D.';
  } else {
    return 'You failed, study more next time.';
  }
}

// Switch Statements

let saleCategory = 'Tabletop Decor';
saleCategory = saleCategory.toLowerCase()
function weeklySaleAd(saleCategory) {
  switch(saleCategory) {
    case 'wall decor':
    case 'paper studio': 
      return 'Wall decor and paper studio are 50% off this week!';
      break;
    case 'yarn':
    case 'crafts':
    case 'furniture':
      return 'Yarn, crafts and furniture are 30% off this week!';
      break;
    case 'christmas':
    case 'tabletop decor':
      return 'Christmas and tabletop decor are 50% off this week!';
      break;
    default:
      return 'Check your weekly ad next week for great sales!';
  }
}
// console.log(weeklySaleAd(saleCategory))

// console.log(teacherMessage(testScores[4]))

// Conditional Statements 
// Make all conditional statements true

// console.log(5 < 7)
// console.log(7 == ('7'))
// console.log(7 != 'seven')
// console.log(false == 0)

// Use && 1 true and 3 falses || 3 true and 1 false

// console.log((2<3) && (4=='4'));
// console.log((2<3) && (4==='4'));
// console.log((2<3) && (4<4));
// console.log((2>3) && (4!='4'));

// console.log((2<3) || (5<3));
// console.log((1 == true) || (0 === false));
// console.log((true == 'true') || (true > false));
// console.log((false === 'false') || (true === 'true'));

// Use 1 if, 2 else ifs, and 1 else

const partyTime = 12;

function partyInvitation(partyTime) {
  if(partyTime === 9) {
    return 'Jasmine\'s birthday breakfast will be at 9am!';
  } else if(partyTime === 11 || partyTime === 12) {
    return 'Jasmine\'s birthday brunch will be at ' + partyTime + '!'
  } else if(partyTime === 5) {
    return 'Jasmine\'s birthday bash will be at 5pm!'
  } else {
    return 'Jasmine\'s birthday bash is still TBD.'
  }
};

// console.log(partyInvitation(partyTime))

// Switch Statements
// You must console.log here. You cannot return, because the break after would be unreadable
let gradeRemark = 'B';

// switch(gradeRemark) {
  // case 'A':
   //  console.log('Great job!');
   //  break;
  // case 'B':
   //  console.log('Good job!');    
   //  break;
 //  case 'C':
   //  console.log('Good try.'); 
 //  default:
   //  console.log('You\'re grounded.');
// }


// console.log()

// switch statement Pass an expression reguarding a dice roll
// 6 is best, 1 is worst
// Create block for any match
// End with a default

let diceRoll = Math.floor(Math.random() * 7)

// switch(diceRoll) {
  // case 1:
   //  console.log('1 point');
   //  break;
  // case 2: 
  //  console.log('2 points');
  //   break;
  // case 3:
   //  console.log('3 points');
    // break;
  // case 4: 
    // console.log('4 points');
    // break;
  // case 5:
    // console.log('5 points');
    // break;
 //  case 6:
    // console.log('6 points');
    // break;
  // default:
    // console.log('NO POINTS')
// };

// console.log('Your roll: ' + diceRoll)

// let score = 1;

// while(score < 5) {
  // console.log(score);
 //  score++;
// };

// let points = 10;
// do {
  // console.log(++points);
// } while(points < 5);


// for(let i = 0; i<10; i++){
 // console.log('My favorite number is ' + i + '!')
//}


// let disneyPrincesses = ['Mulan', 'Tiana', 'Ariel', 'Jasmine', 'Moana'];
// let disneyPrincessCount = disneyPrincesses.length
// for(let i = disneyPrincessCount - 1 ; i >= 0 ; --i) {
//   console.log('You are princess '+ disneyPrincesses[i] + '!');
// }

// Create a while loop that runs 5 times



// while(score < 5){
//   if(score === 0) {
//     console.log('The counter has run ' + (score + 1) + ' time.');
//     score++;
//   } else {
//     console.log('The counter has run '+ (score + 1) + ' times.');
//     score++;
//   };
// }

// Create a do/while loop
// let score = 0;

// do {
//   console.log('You scored ' + score + ' points.')
//   score++;
//   } while(score >=1  && score < 5);

// Create an array and fill it with 5 numbers
// Loop through the array with a for loop
// Run each element of the array through 1 if, 2 else/ifs, and 1 else statements


const grades = [90, 84, 78, 99, 65];

for(let a = 0; a < grades.length; a++){
  
  const personalGrade = grades[a];
  let endMessage;
  
  if(personalGrade >= 93) {
    endMessage = '%. You made an A.';
  } else if(personalGrade >= 85 && personalGrade <= 92 ){
    endMessage = '%. You made a B.';
  } else if(personalGrade >= 74 && personalGrade <= 84){
    endMessage = '%. You made a C.';
  } else if(personalGrade <= 73) {
    endMessage = '%. You failed.';
  } else {
    console.log('There was an error calculating your grade.');
  }

  console.log('Your score was ' + personalGrade + endMessage)
}

// Notes

// References vs values - 
// An object creates a reference, so the computer can go back and access the data
// A value does not create a reference so, it is what it is

// Array Review

// Arrays are list-like objects used to store multiple values in a single variable
// Array values are called elements. 
// Array elements are stored in square brackets and separated by commas
// Each element is assigned an index starting at 0
// Arrays are usually used when a set of data is similar such as test scores or names

// When a method is attached to an object, it is called a method; when it is not, it's called a function

// The Slice method returns a portion of an array while leaving the original array untouched
