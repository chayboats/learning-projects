// My actual human age is stored in 'myHumanAge'
const myHumanAge = 25;

// A value of 2 is set to 'earlyHumanYears'
const earlyHumanYears = 2;

// 'earlyHumanYears' is multipled by 25 and converted into 'earlyCatYears'
const earlyCatYears = earlyHumanYears * 25;

// 'myAge' - 'earlyHumanYears' leaves the 'laterHumanYears'
const laterHumanYears = myHumanAge - earlyHumanYears;

// 'laterHumanYears' is multiplied by 4 and converted into 'laterCatYears'
const laterCatYears = laterHumanYears * 4;

// 'earlyCatYears' and 'laterCatYears' are added together to get 'myAgeInCatYears'
const myAgeInCatYears = earlyCatYears + laterCatYears;

// My name is stored in 'myName'
const myName = 'Chaley';

// The 'myCatAgeMessage' will read 'Hi! My name is NAME. I am HUMAN AGE years old in human years, which is CAT AGE years old in cat years.'
const myCatAgeMessage = 'Hi! My name is ' + myName + '. I am ' + myHumanAge + ' years old in human years, which is ' + myAgeInCatYears + ' years old in cat years.';

console.log(myCatAgeMessage);
