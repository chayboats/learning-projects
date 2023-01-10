// An array is a list-like object that can store multiple values
// Syntax: [value, value, value, etc...]

//Indexes
// Each value in an array is assigned a number called an index.
// Because this information is being processed by a computer, the first number is not 1
// This is how a human would count
// Computers count with the first number being 0
// In the following example 16 has an index of 0
// 45 has an index of 1
// 18 has an index of 2
// 29 has an index of 3
// 32 has an index of 4

const playerHomeRuns = [16, 45, 18, 29, 32];

// Accessing info in an array
// Syntax: variablename[indexNumber]
// I can update this array with push, pop, shift, and unshift even though its
// a constant, 
// I can do this if I am saving the method in a separate variabel or function,
// but I cannot do that if I am trying to reassign it as a constant


// Challenge: Create a constant with the name roysHomeRuns
// and set it to the value of 29 from playerHomeRuns[]

const roysHomeRuns = playerHomeRuns[3];

// Array Methods

// Arrays come with methods
// A method is a function that is a property of an object.
// Syntax arrayName.method()

// Pop
// Pop is a method that removes the last value of an array
// It returns that value
// Because that value gets deleted from an array, 
// It is best practice to save it to a constant or variable
// So as to not lose the data

const jonathansHomeRuns = playerHomeRuns.pop();

// Push
// Push is a method that accepts arguments to add values to the end of an array
// You can put a comma to add multiple values
// It returns the new length of the array

const handMessage = 'A person has ' + playerHomeRuns.push(40) + ' fingers on one hand.';

// If you console.log playerHomeRuns, 
// you will see that 40 has been added to the end of the array


// Shift
// Shift is a method that removes the first value of an array
// It returns that value
// Because that value gets deleted from the array,
// It is best practice to save it to a constant or variable
// So as to not lose the data

const michaelsHomeRuns = playerHomeRuns.shift();


// Unshift
// Unshift is a method that accepts arguments to add values to the beginning of an array
// You can put a comma to add multiple values
// It returns the new length of the array

const footMessage = 'A cat has ' + playerHomeRuns.unshift(22, 18, 33, 26, 23) + ' lives.'

// If you console.log playerHomeRuns, 
// You will see those values at the start of the array

// Concat
// Concat is a method that accepts arrayNames as arguments to add the values 
// Of all the arrays together
// Syntax arrayName.concat(arrayName, arrayName, etc...)

let msBoatmonsClass = ['Kimberly', 'Steve', 'Mark'];
let msGisclairsClass = ['Heidi', 'Mary Beth', 'Willis'];
let msTaylorsClass = ['Layla', 'Mary', 'Bill'];

let allSecondGraders = msBoatmonsClass.concat(msGisclairsClass, msTaylorsClass);

// Reverse
// Reverse is a method that reverses the order of the values in an array

msGisclairsClass = msGisclairsClass.reverse();

// Sort
// Sort is a method that sorts the values of an array
// The default sorts the string values alphabetically

let alphabeticalSecondGraders = allSecondGraders.sort();

// Slice
// Slice is a method that accepts up to 2 arguments to slice an array
// The arguments entered should be an index of the array
// The first argument tells where the array will start
// The second argument tells which value to cut, 
// and everything after will also be deleted

// console.log(allSecondGraders.slice(2, 7));


// If the values are negative, you will start counting from the end of the array
// When counting backwards, you start counting at 1, not 0
// Because the first number tells where the array will start, 
// When using negative numbers, you should start with the lowest number (-6 is lower than -2)

// console.log(allSecondGraders.slice(-6, -2))

// The prior console.log should yield ['Layla', 'Mark',  'Mary', 'Mary Beth']

// The slice method can also accept just one argument
// If you enter just one argument, it will tell the array where to start

console.log(allSecondGraders.slice (-8))
// The prior console log should start at Heidi, and list all of the other students after
