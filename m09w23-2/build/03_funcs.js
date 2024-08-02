"use strict";
// name, return value, arguments
const sayHello = (user, age) => {
    return `hello there ${user}`;
};
sayHello('dean');
sayHello('dean', 42);
const returningPromise = (num) => {
    return new Promise((resolve, reject) => {
        resolve('hello');
    });
};
returningPromise(100)
    .then((x) => { });
const higherOrderFunc = (age, cb) => {
};
// const myCallback = (num) => {
//   if (num > 10) {
//     return true;
//   }
//   return false;
// };
// higherOrderFunc(42, myCallback)
