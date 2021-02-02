const numbers = [2, 3 ,5, 6, 7, 8];

// const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element; 

//     output.push(result);
// }
// console.log(output);

//using map 
function square(element){
    return element * element;

}
// //using array function
// const square = element => element * element;
// const square = x => x * x;

const result = numbers.map(x => x * x);

// numbers.map(function (element, index, array){
//     console.log(element, index, array);
// });

// const result = numbers.map(function (element){
//     // console.log(element);
//     return element * element;
// })

console.log(result);

const bigger = numbers.filter(x=> x< 5);
console.log(bigger);

// find only shows first value that fulfil condition. It is an special type of filter
const isThere = numbers.find(x => x > 4);
console.log(isThere);

