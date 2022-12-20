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
const cupsToTablespoons = (a) => {
  return a * 16;
}

let flourTablespoons = cupsToTablespoons(2.5);
let butterTablespoons = cupsToTablespoons(0.5);
let buttermilkTablespoons = cupsToTablespoons(1) + 3;


// 1 tsp = 1/3 tbsp
const teaspoonToTablespoon = (a) => {
  return a * (1/3)
}

let saltTablespoons = teaspoonToTablespoon(1);
let honeyTablespoons = teaspoonToTablespoon(2);


// Jill wants to make 200 biscuits for her restaurant. 
// She will need 25 times the original ingredients
const servingMultiplier = (a) => {
  return a * 25
}

flourTablespoons = servingMultiplier(flourTablespoons).toFixed(1);
bakingPowderTablespoons = servingMultiplier(2).toFixed(1);
saltTablespoons = servingMultiplier(saltTablespoons).toFixed(1);
honeyTablespoons = servingMultiplier(honeyTablespoons).toFixed(1);
butterTablespoons = servingMultiplier(butterTablespoons.toFixed(1));
buttermilkTablespoons = servingMultiplier(buttermilkTablespoons).toFixed(1);


// Jill is shopping at Walmart
// All of Walmart's groceries are listed as grams
// Jill will need to convert the ingredients to grams

// 1tbsp = 14.3grams
const tablespoonsToGrams = (a) => {
  return a * 14.3
}

const flourGrams = tablespoonsToGrams(flourTablespoons);
const bakingPowderGrams = tablespoonsToGrams(bakingPowderTablespoons);
const saltGrams = tablespoonsToGrams(saltTablespoons);
const honeyGrams = tablespoonsToGrams(honeyTablespoons);
const butterGrams = tablespoonsToGrams(butterTablespoons);
const buttermilkGrams = tablespoonsToGrams(buttermilkTablespoons);



// Jill needs to figure out how many containers of each ingredient she will need

// Walmart Groceries and Prices
// 2300g flour per container = $3
// 230g baking powder per container = $2
// 740g salt per container= $0.50
// 340g honey per container = $4
// 460g butter per container = $5
// 970g buttermilk per container = $1.50

// Grams needed / Grams per container = Containers Needed
const containersNeeded = ( a, b ) => {
  return a / b 
}

const flourContainers = Math.ceil(containersNeeded( flourGrams, 2300 ).toFixed(1));
const bakingPowderContainers = Math.ceil(containersNeeded( bakingPowderGrams, 230 ).toFixed(1));
const saltContainers = Math.ceil(containersNeeded( saltGrams, 740 ).toFixed(1));
const honeyContainers = Math.ceil(containersNeeded( honeyGrams, 340 ).toFixed(1));
const butterContainers = Math.ceil(containersNeeded( butterGrams, 460 ).toFixed(1));
const buttermilkContainers = Math.ceil(containersNeeded( buttermilkGrams, 970 ).toFixed(1));

// Jill needs to figure out the cost for each ingredient

// Number of containers for ingredient * Price for Container = Cost for Ingredient
const unitPriceMultipler = ( a, b ) => {
  return a * b
}

const flourCost = unitPriceMultipler( flourContainers, 3);
const bakingPowderCost = unitPriceMultipler(bakingPowderContainers, 2 );
const saltCost = unitPriceMultipler( saltContainers, .5 );
const honeyCost = unitPriceMultipler( honeyContainers, 4 );
const butterCost = unitPriceMultipler( butterContainers, 5 );
const buttermilkCost = unitPriceMultipler( buttermilkContainers, 1.5 );

// Jill needs to figure out the total
const totalCost = flourCost + bakingPowderCost + saltCost + honeyCost + butterCost + buttermilkCost

// Jill will be paying with a hundred dollar bill. 
// She needs to know how much change she will get back.

const change = 100 - totalCost;


// Jill will need a new list for her recipe as well as a shopping list
function List(flour, bakingPowder, salt, honey, butter, buttermilk)  {
  this.flour = flour;
  this.bakingPowder = bakingPowder;
  this.salt = salt;
  this.honey = honey;
  this.butter = butter;
  this.buttermilk = buttermilk;
}
const recipe = new List( flourTablespoons + ' tablesooons', bakingPowderTablespoons + ' tablespoons', saltTablespoons + ' tablespoons', honeyTablespoons + ' tablespoons', butterTablespoons + ' tablespoons', buttermilkTablespoons + ' tablespoons' )
const shoppingList = new List ( flourContainers + ' containers', bakingPowderContainers + ' containers', saltContainers + ' containers', honeyContainers + ' containers', butterContainers + ' containers', butterContainers + ' containers' );


