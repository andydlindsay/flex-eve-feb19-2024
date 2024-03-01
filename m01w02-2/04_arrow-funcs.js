// arrow functions added as part of ES6 (2015)
// 1. no function keyword needed
// 2. if only one argument, you can remove the parens
// 3. if there is only one line of code, you can remove the curly braces
// 4. if there is only one line of code, that line is implicitly returned
// 5. `this` is not created by arrow functions

const sayHello1 = function(name) {
  return `hello ${name}`;
};

const sayHello2 = name => `hello ${name}`;

const result = sayHello2('dean');

console.log(result);
