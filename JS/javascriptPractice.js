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

// Create function to make objects
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

//Function Declaration

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
