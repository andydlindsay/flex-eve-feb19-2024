// 1. Write a program that takes in an unlimited number of command line arguments and prints out the sum of them. 
// take in command line arguments
// sum them
// print them out

// 2. If any argument is not a whole number, skip it. Do not support negative numbers.

const args = process.argv;
// console.log(args);

// args.shift();
// args.shift();

// args.splice(0, 2);

const sliced = args.slice(2);

// console.log(sliced); // ["2", "4", "6"]

const numbers = sliced;

// const numbers = ["2", "4", "6", "4", "10", "2.5", "-100"];

// create a function
const addNumbers = function(numbers) {
  // create a variable to hold our running count
  let runningTotal = 0;

  // loop through the provided array
  for (const value of numbers) {
    const converted = Number(value); // "2"

    // is the number a whole number (integer)
    const result = Number.isInteger(converted);

    if (result === true && converted > 0) {
      runningTotal = runningTotal + converted; // 2
    }
  }

  console.log(runningTotal);
};



addNumbers(numbers);

// loop through the provided array
// for (let i = 0; i < numbers.length; i++) {
//   const value = numbers[i];
//   console.log(value);
// }

// for..in
// for (const index in numbers) {
//   const value = numbers[index];
//   console.log(value);
// }

// for..of
// for (const value of numbers) {
//   console.log(value);
// }
