// Making Houses

// literal notation
var johnsonsHouse = {
  bedrooms: 4,
  bathrooms: 2.5,
  garage: false,
  livingRoom: 'large'
}

// dot notation
var robinsonsHouse = {}
 robinsonsHouse.bedrooms = 4;
 robinsonsHouse.bathrooms = 3;
 robinsonsHouse.garage = true;
 robinsonsHouse.livingRoom = 'large;'

// bracket notation
var bradysHouse = {}
 bradysHouse['bedrooms'] = 2;
 bradysHouse['bathrooms'] = 1.5;
 bradysHouse['garage'] = true;
 bradysHouse['livingRoom'] = 'medium';

// object constructor function
function House(bedrooms, bathrooms, garage, livingRoom){
 this.bedrooms = bedrooms;
 this.bathrooms = bathrooms;
 this.garage = garage;
 this.livingRoom = livingRoom;
}

var morticiasHouse = new House(8, 5, true, 'large');
var edgarsHouse = new House(2, 1.5, false, 'small');
var wadesHouse = new House(3, 1.5, true, 'medium');

console.log(johnsonsHouse);
console.log(robinsonsHouse);
console.log(bradysHouse);
console.log(morticiasHouse);
console.log(edgarsHouse);
console.log(wadesHouse);
