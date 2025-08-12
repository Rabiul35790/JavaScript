let number = [80, 75, 60, 90, 82];



// Returns the first element in the array that matches a given condition.

// If no element matches, returns undefined.

// Does not change the original array.

let value = number.find((x) => x > 80);

console.log(value);



// Returns the index of the first element that matches the condition.

// If no element matches, returns -1.

// Does not change the original array.

let value2 = number.findIndex((x) => x > 80);

console.log(value2);

