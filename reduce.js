// let num = [1, 5, 10, 15, 20];


//first way
// function sum(x, y) {
//     return x + y;
// }

// let result = num.reduce(sum, 0);



//2nd way
// let result = num.reduce(function sum(x, y) {
//     return x + y;
// }, 0);


//3rd way
// let result = num.reduce(function(x, y) {
//     return x + y;
// }, 0);


//4th way
// let result = num.reduce((x, y) => {
//     return x + y;
// }, 0);



//5th way
// let result = num.reduce((sum, x) => sum + x, 0);



// console.log(num);
// console.log(result);


//Example (counting occurrences):
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count); 

//output: { apple: 3, banana: 2, orange: 1 }