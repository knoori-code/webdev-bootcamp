var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const doubleArray = numbers.map((number) => {
  return number * 2;
});

//Filter - Create a new array by keeping the items that return true.
const filteredList = numbers.filter((number) => {
  return number > 4;
});

//Reduce - Accumulate a value by doing something to each item in an array.
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100);

//Find - find the first item that matches from an array.
const foundNumber = numbers.find((number) => {
  return number > 40;
});

console.log(foundNumber);
//FindIndex - find the index of the first item that matches.
