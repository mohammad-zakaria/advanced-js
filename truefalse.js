// Falsy

// If anything is undefined JavaScript consider it as false.
// If a variable's value is 0 or 'empty string it is also considered as false.
// Null is also considered as false
// NaN is also false.
// false

// Truthy
// '0', ' ' 
// [] , 'false'

let age = NaN;
console.log(age);
// const age = 0;
const name = [];
if(name){
    console.log("Condition is true")
}
else{
    console.log("Condition is false");
}