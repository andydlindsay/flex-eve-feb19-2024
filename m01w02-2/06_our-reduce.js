// const numbers = ['3', '5', '8', '2', '11'];

// let runningTotal = 0;

// for (const number of numbers) {
//   runningTotal += number;
// }

// console.log(runningTotal);

// const sum = numbers.reduce(function(runningTotal, number, index) {
//   if (index !== numbers.length - 1) {
//     const converted = `${number}, `
//     return runningTotal + converted;
//   } else {
//     return runningTotal + number + '!';
//   }
// }, '');

// console.log(sum);


const ourReduce = function(arr, callback, initialValue) {
  // create a variable to hold the updated value
  let output = initialValue; // 0

  // loop through the provided array
  for (const element of arr) {
    // call the provided callback for each element AND capture the return value
    const returnVal = callback(output, element);

    // set the update variable to the return value
    output = returnVal;
  }

  // return updated variable
  return output;
};

const numbers = [3, 5, 8, 2, 11];

const doOnEachLoop = function(runningTotal, currentElement) {
  return runningTotal + currentElement;
};

const result = ourReduce(numbers, doOnEachLoop, 0);

console.log(result);

const reduceResult = numbers.reduce(doOnEachLoop, 0);

console.log(reduceResult);
