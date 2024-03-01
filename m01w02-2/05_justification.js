// single responsiblity principle (SRP) => our code should be responsible for only one thing

const loopOverArray = function(arr, callback) {
  for (const value of arr) {
    // console.log(`hello ${value}`);
    callback(value); // doOnEachLoop('alice')
  }
};

const doOnEachLoop = function(name) {
  console.log(`it is good to meet you, ${name}`);
};

const names = ['alice', 'bob', 'carol'];

names.forEach(doOnEachLoop);

loopOverArray(names, doOnEachLoop);

// loopOverArray(names, name => console.log(`it is good to meet you, ${name}`));

// const numbers = [1,2,3];
// numbers.forEach(function(num){ })

// const doOnEachLoopNum = function(num) {
//   console.log(num * 3);
// };

// loopOverArray(numbers, doOnEachLoopNum);
