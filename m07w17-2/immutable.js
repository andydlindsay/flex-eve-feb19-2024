// const arr = [1,2,3];
// const another = [4,5,6];

// // const copy = JSON.parse(JSON.stringify(arr));
// // const copy = arr.map((e) => e);
// // const copy = arr.filter(() => true);

// const copy = [ ...arr, 4  ];

// // copy.push(4);

// console.log(arr);
// console.log(copy);

const myObj = {
  username: 'alice',
  age: 42,
  faveFoods: ['meatloaf']
};

const copy = {
  ...myObj,
  username: 'bob',
  faveFoods: [ ...myObj.faveFoods, 'pancakes' ]
};

// copy.faveFoods.push('pancakes');

// copy.username = 'bob';

console.log(myObj);
console.log(copy);
