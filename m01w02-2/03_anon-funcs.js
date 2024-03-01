// anonymous => without name

// const age = 42;
// console.log(42);

// const mult = age * 2; // 84

// console.log('hello');

// const output = + 'world';

const runMyFunc = function(callback) {
  callback('bob'); // sayHello('bob');
};

const sayHello = function(name) {
  console.log(`hello ${name}`);
};

runMyFunc(sayHello);

runMyFunc(function(name) {
  console.log(`hello ${name}`);
})

runMyFunc(name => console.log(`hello ${name}`))



