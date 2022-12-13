// Making people

// Literal Notation
const johnDoe = {
  hairColor: 'red', 
  eyeColor: 'brown',
  children: 3,
  married: true
}

// Dot Notation
const janeDoe = {};
  janeDoe.hairColor = 'black';
  janeDoe.eyeColor = 'hazel';
  janeDoe.children = 3;
  janeDoe.married = true;

// Bracket Notation
const jonasDoe = {};
  jonasDoe['hairColor'] = 'brown';
  jonasDoe['eyeColor'] = 'brown';
  jonasDoe['children'] = 0;
  jonasDoe['married'] = false;

// Object Constructor Function
function Person(hairColor, eyeColor, children, married) {
  this.hairColor = hairColor;
  this.eyeColor = eyeColor;
  this.children = children;
  this.married = married;
}

const sherryConrad = new Person('brown', 'brown', 2, true);
const caryConrad = new Person('blonde', 'blue', 2,  true);

// Accessing specific properties with dot notation
console.log(jonasDoe.married);

// Changing values with dot notation
  sherryConrad.hairColor = 'black';

// Changing values with bracket notation
  johnDoe['hairColor'] = 'brown';

// Accessing specific properties with bracket notation
  console.log(sherryConrad['hairColor']);