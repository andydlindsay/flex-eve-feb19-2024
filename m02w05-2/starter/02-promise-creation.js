// new Promise(); // class blueprint stamp

const myPromise = new Promise((resolve, reject) => {
  // do something that takes time
  resolve('value'); // happy path; gets passed to the .then
  reject('an error'); // unhappy path
});

myPromise
  .then((data) => {
    console.log(data); // 'value'
  })
  .catch((err) => {
    console.log(err); // 'an error'
  });
