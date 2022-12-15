function Model(height, eyeColor, hairColor){
  this.height = height;
  this.eyeColor = eyeColor;
  this.hairColor = hairColor;
}

const jenna = new Model(10, 'blue', 'red');

// -----------------------------------------------------

const createModel = (height, eyeColor, hairColor) => {
  return { height, eyeColor, hairColor }
}

const donray = createModel(6.2, 'brown', 'black');

console.log(jenna)
console.log(donray)