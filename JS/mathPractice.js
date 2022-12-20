// Jill's Buttermilk Biscuit Recipe for 8 biscuits
// 2 ½ cups all-purpose flour
// 2 Tablespoons aluminum free Baking Powder, not teaspoons.
// 1 teaspoon salt
// 2 teaspoons honey
// 1/2 cup very cold butter, equal to 1 stick.
// 1 cup + 3 Tablespoons cold Buttermilk


// Jill only has a tbsp to measure her ingredients
// So all of the ingredients for her recipe will have to be converted to tbsp

// 1 cup = 16tbsp
const cupsToTablespoons = ( cups, tablespoons = 16 ) => {
  return cups * tablespoons;
}

let flourTablespoons = cupsToTablespoons(2.5);
let butterTablespoons = cupsToTablespoons(0.5);
let buttermilkTablespoons = cupsToTablespoons(1) + 3;


// 1 tsp = 1/3 tbsp
const teaspoonToTablespoon = ( teaspoons, tablespoons = 1/3 ) => {
  return teaspoons * tablespoons
}

let saltTablespoons = teaspoonToTablespoon(1);
let honeyTablespoons = teaspoonToTablespoon(2);


// Jill wants to make 200 biscuits for her restaurant. 
// She will need 25 times the original ingredients

const servingMultiplier = ( serving, multiplier = 25 ) => {
  return serving * multiplier
}

flourTablespoons = servingMultiplier( flourTablespoons );
bakingPowderTablespoons = servingMultiplier(2);
saltTablespoons = servingMultiplier( saltTablespoons );
honeyTablespoons = servingMultiplier( honeyTablespoons );
butterTablespoons = servingMultiplier( butterTablespoons );
buttermilkTablespoons = servingMultiplier( buttermilkTablespoons );


// Jill is shopping at Walmart
// All of Walmart's groceries are listed as grams
// Jill will need to convert the ingredients to grams

// 1tbsp = 14.3grams
// TODO: fix parameters
const tablespoonsToGrams = ( tablespoons, grams = 14.3 ) => {
  return tablespoons * grams
}

const flourGrams = tablespoonsToGrams( flourTablespoons );
const bakingPowderGrams = tablespoonsToGrams( bakingPowderTablespoons );
const saltGrams = tablespoonsToGrams( saltTablespoons );
const honeyGrams = tablespoonsToGrams( honeyTablespoons );
const butterGrams = tablespoonsToGrams( butterTablespoons );
const buttermilkGrams = tablespoonsToGrams( buttermilkTablespoons );



// Jill needs to figure out how many packages of each ingredient she will need

// Walmart Groceries and Prices
// 2300g flour per package = $3
// 230g baking powder per package = $2
// 740g salt per package= $0.50
// 340g honey per package = $4
// 460g butter per package = $5
// 970g buttermilk per package = $1.50

// Grams needed / Grams per package = Packages Needed
const packagesNeeded = ( gramsNeeded, gramsPerPackage ) => {
  return gramsNeeded / gramsPerPackage 
}

let flourPackages = packagesNeeded( flourGrams, 2300 );
let bakingPowderPackages = packagesNeeded( bakingPowderGrams, 230 );
let saltPackages = packagesNeeded( saltGrams, 740 );
let honeyPackages = packagesNeeded( honeyGrams, 340 );
let butterPackages = packagesNeeded( butterGrams, 460 );
let buttermilkPackages = packagesNeeded( buttermilkGrams, 970 );

// If Jill needs a little more than what's in one package of ingredients, 
// she will have to round up and get another full package

flourPackages = Math.ceil( flourPackages.toFixed(1) );
bakingPowderPackages = Math.ceil( bakingPowderPackages.toFixed(1) );
saltPackages = Math.ceil( saltPackages.toFixed(1) );
honeyPackages = Math.ceil( honeyPackages.toFixed(1) );
butterPackages = Math.ceil( butterPackages.toFixed(1) );
buttermilkPackages = Math.ceil( buttermilkPackages.toFixed(1) );


// Jill needs to figure out the cost for each ingredient

// Number of packages for ingredient * Price for package = Cost for Ingredient
const unitPriceMultipler = ( packageNumber, packagePrice ) => {
  return packageNumber * packagePrice
}

const flourCost = unitPriceMultipler( flourPackages, 3);
const bakingPowderCost = unitPriceMultipler(bakingPowderPackages, 2 );
const saltCost = unitPriceMultipler( saltPackages, .5 );
const honeyCost = unitPriceMultipler( honeyPackages, 4 );
const butterCost = unitPriceMultipler( butterPackages, 5 );
const buttermilkCost = unitPriceMultipler( buttermilkPackages, 1.5 );

// Jill needs to figure out the total
const totalCost = 
  flourCost + 
  bakingPowderCost + 
  saltCost + 
  honeyCost + 
  butterCost + 
  buttermilkCost
;

// Jill will be paying with a hundred dollar bill. 
// She needs to know how much change she will get back.

const change = 100 - totalCost;


// Jill will need a new list for her recipe as well as a shopping list

const List = ( flour, bakingPowder, salt, honey, butter, buttermilk ) => {
  return { flour, bakingPowder, salt, honey, butter, buttermilk }
}

const recipe = List(
  flourTablespoons + ' tablespoons', 
  bakingPowderTablespoons + ' tablespoons', 
  saltTablespoons.toFixed(1) + ' tablespoons', 
  honeyTablespoons.toFixed(1) + ' tablespoons', 
  butterTablespoons + ' tablespoons', 
  buttermilkTablespoons + ' tablespoons' 
)

const shoppingList = List( 
  flourPackages + ' packages', 
  bakingPowderPackages + ' packages', 
  saltPackages + ' package', 
  honeyPackages + ' package', 
  butterPackages + ' packages', 
  butterPackages + ' packages' 
);


console.log(shoppingList);