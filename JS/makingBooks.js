// Making Books

// Object Literal Notation

let book1 = {
  pages: 185,
  genre: 'fantasy',
  audience: 'adult',
  classic: false,
  year: 1930
}

// Object Constructor Function

function Book( pages, genre, audience, classic, year ) {
  this.pages = pages;
  this.genre = genre;
  this.audience = audience;
  this.classic = classic;
  this.year = year;
};

let book2 = new Book( 240, 'biography', 'young adult', false, 2010 );
let book3 = new Book( 180, 'nonfiction', 'adolescent', false, 2020 );
let book4 = new Book( 247, 'folktale', 'young adult', true, 1955 );
let book5 = new Book( 388, 'science fiction', 'young adult', false, 2005 );

console.log(book1)
console.log(book2)
console.log(book3)
console.log(book4)
console.log(book5)