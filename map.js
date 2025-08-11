
// In JavaScript, map() is an array method
// that creates a new array by applying a provided callback
// function to each element of the original array,
// without modifying the original array.



let square = [1, 4, 9, 16, 25];

//first way or lengthy way

// function Root(x) {
//     return Math.sqrt(x);
// }

// let squareRoot =  square.map(Root);



//Second way

// let squareRoot =  square.map(function Root(x) {
//     return Math.sqrt(x);
// });


//Third way

// let squareRoot =  square.map(function(x) {
//     return Math.sqrt(x);
// });



//fourth way

// let squareRoot =  square.map((x) => {
//     return Math.sqrt(x);
// });




//5th way

// let squareRoot =  square.map((x) => Math.sqrt(x));




//6th way
let squareRoot =  square.map(x => Math.sqrt(x));

console.log(square);
console.log(squareRoot);



