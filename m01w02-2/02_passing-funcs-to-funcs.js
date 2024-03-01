// higher order function (HOF) => function that accepts another function as an argument OR a function that returns a function
const runMyFunc = function(callback) {
  console.log(callback.toString());
  callback('bob'); // sayHello('bob');
};

const sayHello = function(name) {
  console.log(`hello ${name}`);
};

// callback => a function that gets passed to another function as an argument
runMyFunc(sayHello);

const addTwo = function(num) {
  console.log(num + 2);
}

runMyFunc(addTwo);
