// myFunc1();

// hoisting

// function declaration
// function myFunc1() {};

// function expression
// const myFunc2 = function() {
//   console.log("inside myFunc2");
// };
// const username = 'alice';

// console.log(username);

// myFunc2();

// console.log(myFunc2());
// console.log(myFunc2);

// const stringVersionOfConsoleLog = console.log.toString();
// console.log(stringVersionOfConsoleLog);

// functions are first-class

const myFunc2 = function() {
  console.log("inside myFunc2");
};

const funcs = [];

funcs.push(myFunc2);
funcs.push(console.log);

console.log(funcs);

funcs[0]();

// const copy = funcs[0];
// copy();

// const copy = myFunc2;

// console.log(copy.toString());

// myFunc2.addSecretKey = 'hello world';

// console.log(myFunc2);

// console.log(myFunc2.addSecretKey);
