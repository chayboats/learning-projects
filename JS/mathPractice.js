// Jill's Buttermilk Biscuit Recipe
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

const flour = cupsToTablespoons(2.5);

const butter = cupsToTablespoons(0.5);


// 1 tsp = 1/3 tbsp
const teaspoonToTablespoon = (a) => {
  return a * (1/3)
}

const salt = teaspoonToTablespoon(1);


const buttermilk = cupsToTablespoons(1) + 3;
console.log(buttermilk);

// Walmart Groceries and Prices
// 2300g flour = $3
// 230g baking powder = $2
// 740g salt = $0.50
// 340g honey = $4
// 460g butter = $5
// 970g buttermilk = $1.50