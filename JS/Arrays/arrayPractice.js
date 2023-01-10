// Baseball Teams

// Creating an array
let baseballTeams = [ 'Dodgers', 'Giants', 'Mets', 'Yankees', 'Astros' ];

// Changing Elements inside an array
baseballTeams[5] = 'Bulldogs';
baseballTeams[1] = 'Wildcats';

// Assigning variables an element from the array
let myFavoriteTeam = baseballTeams[0];

// Using the length property. 
// We know it's a property because it doesn't have ()
// console.log(baseballTeams.length)

// Test Scores

let testScores = [72, 85, 91, 77];

// Array Methods - Pop, Push, Shift, Unshift

let classSizes = [ 22, 18, 20, 19 ];
let lastClassSize = classSizes.pop();
classSizes.push( 16, 23 );
let firstClassSize = classSizes.shift();
classSizes.unshift(25);



// console.log(classSizes);
// console.log(classSizes.length)
// console.log(classSizes[3]);
// console.log(lastClassSize);
// console.log(firstClassSize);
// console.log(classSizes.pop());
// console.log(classSizes.shift());
  // These values will return 4 and 5 because they are responing to the pop and shift in the console log as well
// console.log(classSizes.push(17));
// console.log(classSizes.unshift(24));

let shoppingList = [ 'apples', 'pizza', 'chicken', 'mushrooms', 'oranges', 'beef' ];

// Add crackers to front grapes to end
shoppingList.push('grapes');
shoppingList.unshift('crackers');

// Add siracha and popcorn to the end and lemonade and orange juice to the beginning

shoppingList.push('siracha', 'popcorn');
shoppingList.unshift('lemonade', 'orange juice');


// Remove the first and last item from the array

// Last
shoppingList.pop();

// First
shoppingList.shift();


// Give Sarah the first item
let firstItemSarah = shoppingList.shift()

//Give Phil the last item
let lastItemPhil = shoppingList.pop()

// console.log(firstItemSarah, lastItemPhil)