// Creating Variables

const christmasPart1 = 'Merry Christmas to all, ';
const christmasPart2 = 'and to all a good night';

// Concatenation and to UpperCase Method
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

console.log(product);





// References vs values - 
// An object creates a reference, so the computer can go back and access the data
// A value does not create a reference so, it is what it is