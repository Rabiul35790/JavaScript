
// In JavaScript, filter() is an array method
// that creates a new array containing only the
// elements that pass a given test (the callback 
// function returns true).


let age = [10, 20, 15, 40, 32];



//fitst way

// function checkAge(x) {
//     if(x > 18) {
//         return true;
//     } else {
//         return false;
//     }
// }


// let adult = age.filter(checkAge);



//2nd way
// let adult = age.filter(function checkAge(x) {
//     if(x > 18) {
//         return true;
//     } else {
//         return false;
//     }
// });


//third way
// let adult = age.filter(function(x) {
//     if(x > 18) {
//         return true;
//     } else {
//         return false;
//     }
// });



//4th way
// let adult = age.filter((x) => {
//     if(x > 18) {
//         return true;
//     } else {
//         return false;
//     }
// });


//5th way
// let adult = age.filter(x => {
//     if(x > 18) {
//         return true;
//     } else {
//         return false;
//     }
// });


//6th way with ternary operator
let adult = age.filter(x =>  x < 18? true : false);



console.log(age);
console.log(adult);