const student = () => {
  const someValue = 'test';

  const data = {
    age: 0
  };

  const setAge = (value) => {
    data.age = value;
  }

  const getAge = () => {
    return data.age;
  }

  return { setAge, getAge };
}

// console.log(createStudent) // { setAge: function, getAge: function }
const createStudent = student();

createStudent.setAge(24)

const createStudent1 = student();

createStudent1.setAge(25)

console.log(createStudent1.getAge()) // 25
console.log(createStudent.getAge()) // 24


// Scope, memory, closure, and execution context


const counter = () => {
  let count = 1;

  const incrementCount = () => {
    count = count + 1;
  }

  incrementCount();

  return count;
}

const someCount = counter(); // 2
const someOtherCount = counter(); // 2