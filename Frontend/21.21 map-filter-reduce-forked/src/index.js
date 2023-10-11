// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.
// const foreach = numbers.forEach((x) => numbers.push(x * 2)); //use forEach
// console.log(foreach);

// const map = numbers.map((x) => x * 2); //or use map
// console.log(map);

// //Filter - Create a new array by keeping the items that return true.
// const filter = numbers.filter((num) => num > 10); //easier
// console.log(filter);

// const filterforEach = numbers.forEach((x) => {if(x>10) numbers.push(x * 2)}); //use forEach
// console.log(filterforEach);

// //Reduce - Accumulate a value by doing something to each item in an array.
// var num = numbers.reduce((accumulator, currentNumber)=>{
//   console.log("accumulator: "+accumulator);
//   console.log("currentNumber: "+currentNumber);
//   return accumulator+currentNumber;
// }); //wrote whole thing for future refence (easier than forEach function)
// console.log(num);

// //Find - find the first item that matches from an array.
// const find = numbers.find((num)=>num>10)
// console.log(find);

// //FindIndex - find the index of the first item that matches.
// const findIndex = numbers.findIndex((num)=>num>10)
// console.log(findIndex);

import emojipedia from "./emojipedia";

// const array = emojipedia.map((data) => data.meaning.substring(0, 100)); //write an arroew function like this
const array = emojipedia.map((data) => {
  return data.meaning.substring(0, 100);
}); // or like this
console.log(array);
