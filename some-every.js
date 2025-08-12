let score = [72, 50, 80, 90, 70];



// this checks at least one can satisfy the condition or not and return the boolean value. 
let isgradeAplus = score.some((x) => x > 80);


// this checks all value can satisfy the condition or not and return the boolean value means if all value satisfy the condition then it return true.  
let isgradepass = score.every((x) => x > 50);


console.log(isgradeAplus);
console.log(isgradepass);



