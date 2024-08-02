// name, return value, arguments
const sayHello = (user: string, age?: number): string => {
  return `hello there ${user}`;
};

sayHello('dean');
sayHello('dean', 42);

const returningPromise = (num: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve('hello');
  });
};

returningPromise(100)
  .then((x) => {})

const higherOrderFunc = (age: number, cb: (num: number) => boolean) => {




};

// const myCallback = (num) => {
//   if (num > 10) {
//     return true;
//   }

//   return false;
// };

// higherOrderFunc(42, myCallback)
