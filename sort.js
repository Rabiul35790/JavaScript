let number = [30, 70, 40, 75, 90];
number.sort();
console.log(number);



const fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]


let numbers = [100, 20, 5];

// Ascending
numbers.sort((a, b) => a - b);
console.log(numbers); // [5, 20, 100]

// Descending
numbers.sort((a, b) => b - a);
console.log(numbers); // [100, 20, 5]






let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 }
];

// Sort by age
users.sort((a, b) => a.age - b.age);
console.log(users);
// [{name:"Bob",age:20}, {name:"Alice",age:25}, {name:"Charlie",age:30}]



//sort by name
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users);