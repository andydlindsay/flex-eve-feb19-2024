// promiseOne: 1000ms
// promiseTwo: 1000ms
// promiseThree: 2000ms

const generatePromise = require('./generators/generate-promise');

const promiseOne = generatePromise('one', false, 4000);
const promiseTwo = generatePromise('two');
const promiseThree = generatePromise('three');

const promises = [promiseOne, promiseThree, promiseTwo];

// Promise.race(promises)
//   .then()
//   .catch()

Promise.all(promises)
  .then((arrOfReturnVals) => {
    console.log(arrOfReturnVals);
  })
  .catch(() => {});

// generatePromise('one')
//   .then((data) => {
//     console.log('promise one resolved', data);

//     return generatePromise('two');
//   })
//   .then((data) => {
//     console.log('promise two resolved', data);

//     return generatePromise('three');
//   })
//   .then((data) => {
//     console.log('promise three resolved', data);
//   });
