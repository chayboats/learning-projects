// An object is a value type with key value pairs.
// Anything that isn't a primitive type is an object
// An object is declared with an open and closed curly brace {}

// Object Literal Notation

const pizza1 = {
  name: 'Donna',
  toppings: 5,
  sauce: 'marinara',
  size: 'medium',
  carryOut: false,
};

// Dot Notation
// Dot notation is usually used to access/alter a key value pair 
// in an object, that has already been assigned

pizza1.toppings = 4;

// When we console log pizza1{}, the toppings value will now be 4

// Dot notation can also be used to declare an object

const pizza2 = {}
pizza2.name = 'Phil';
pizza2.toppings = 3;
pizza2.sauce = 'marinara';
pizza2.size = 'large';
carryOut = true;

// Bracket Notation
// Bracket Notation is often used if a property name is an invalid variable name
// Such as one with a space or a keyword

const pizza3 = {}
pizza3['first name'] = 'Lily';
pizza3['number of toppings'] = 1;
pizza3['type of sauce'] = 'alfredo';
pizza3['size of pizza'] = 'small';
pizza3['carry out'] = true;

// Object Constructor Functions
// An object constructor function is a function that can construct objects
// If I wanted to make many pizza orders with all the same details, 
// I would use an object constructor function
// It is best practice to name constructor functions with capital letters

function Pizzas(name, toppings, sauce, size, carryOut) {
  this.name = name;
  this.toppings = toppings;
  this.sauce = sauce;
  this.size = size; 
  this.carryOut = carryOut;
};

const pizza4 = new Pizzas('Jermaine', 2, 'spicy marinara', 'large', false );
const pizza5 = new Pizzas('Dillon', 2, 'pesto alfredo', 'small', true );
const pizza6 = new Pizzas('Maxine', 3, 'marinara', 'large', true );

// Arrow function to create objects
// Arrow functions cannot utilize the this or new keywords
// This function is also a factory function because it is not a class or a constuctor
// yet it still returns an object


const pizzaOrder = ( firstName, toppings, sauce, size, carryOut ) => {
  return { firstName, toppings, sauce, size, carryOut };
}

const pizza7 = pizzaOrder( 'Bren', 3, 'alfredo', 'medium', false );
const pizza8 = pizzaOrder( 'Michael', 4, 'spicy marinara', 'large', true );

console.log(pizza7);