const earlyHumanYears = 2;
const oneEarlyCatYear = 25;
const totalEarlyCatYears = oneEarlyCatYear * earlyHumanYears;

const myHumanAge = 25;
const laterHumanYears = myHumanAge - earlyHumanYears;

const oneLaterCatYear = 4;
const totalLaterCatYears = oneLaterCatYear * laterHumanYears;
const myAgeInCatYears = totalEarlyCatYears + totalLaterCatYears;

const myName = 'Chaley';
console.log('Hi! My name is ' + myName + '. I am ' + myHumanAge + ' years old in human years, which is ' + myAgeInCatYears + ' years old in cat years.');
