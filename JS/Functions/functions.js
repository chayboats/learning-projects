// Functions
// A function is a code snippet that can be called by other code, by itself, 
// or by a variable that refers to that function
// A function is considered an object
// Functions allow you to group a series of statements together to perdorm a task
// Syntax: function functionName(paramters, if, any) {
// return 'something'  ;
//}
// You do not always have to return something
// Function names are usually verbs or phrases that begin with a verb
// The are inside of the curly braces is known as the code block or the function body
// There is typically no semicolon after the final curly brace
// A function can set parameters and accept arguments
// Paramters are placed inside of the parentheses when a function is being declared/defined.


function chairMultiplier(numberOfTables) {
  const chairsPerTable = 5;
  return chairsPerTable * numberOfTables;
}

// Arguments are placed inside of the parentheses when a function is being invoked/called. 
const rainbowRoomSetUp = chairMultiplier + ' chairs';


// If you do not add the parentheses when you try to invoke the function,
// It will just tell you the definition of the function.

console.log(rainbowRoomSetUp)