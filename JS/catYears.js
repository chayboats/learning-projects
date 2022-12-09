// My actual human age is stored in 'myAge'
let myAge = 25;

// A value of 2 is set to 'earlyYears' to represent the first 2 human years
let earlyYears = 2;

// 'earlyYears' is multipled by 25 to convert human years into early cat years
// This value is reassigned to 'earlyYears'
earlyYears *= 25;

// 'myAge' - 2 years leaves the remaining years which will be stored in 'laterYears'
let laterYears = myAge - 2;


// 'laterYears' is multiplied by 4 to convert the human years into later cat years
// This value is reassigned to 'laterYears'
laterYears *= 4;

// 'earlyYears' and 'laterYears' are added together to get 'myAgeInCatYears'
const myAgeInCatYears = earlyYears + laterYears;

// My name is stored in 'myName'
const myName = 'Chaley';

// The 'myCatAgeMessage' will read 'Hi! My name is NAME. I am HUMAN AGE years old in human years, which is CAT AGE years old in cat years.'
const myCatAgeMessage = 'Hi! My name is ' + myName + '. I am ' + myAge + ' years old in human years, which is ' + myAgeInCatYears + ' years old in cat years.';

console.log(myCatAgeMessage);
