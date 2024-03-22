// the return value from EVERY .then is a Promise

const generatePromise = require('./generators/generate-promise');

// const promiseOne = generatePromise('one');

generatePromise('one')
  .then((data) => {
    console.log('inside the 1st .then', data);
    
    return generatePromise('two', true);
  })
  .then((data) => {
    console.log('inside the 2nd .then', data);
    return 'hello';
  })
  .then((data) => {
    console.log('inside the 3rd .then', data);
  })
  .catch((err) => {
    console.log('inside the second error handler:', err);
  })
