// promise
// js object that represents a future value
// 3 states:
//   * pending
//   * fulfilled/success
//   * rejected/failure

const generatePromise = require('./generators/generate-promise');

const promise = generatePromise('one');

console.log(promise);

// const promiseTwo = promise.then();
// const promiseThree = promiseTwo.then();

promise
  .then((data) => {
    console.log('the promise resolved successful', data);
  })
  .catch((err) => {
    console.log('the promise failed', err);
  });

// promise.then(); // happy path
// promise.catch(); // unhappy path

// throw new Error();
