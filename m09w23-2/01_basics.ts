let username: string | number = 'alice';

username = 'bob';
username = 42;
// username = false;

const nums: ((string | number)[] | number | boolean)[] = [];

nums.push(42)
nums.push(['hello world'])
nums.push(true)

const returnVal = nums.pop();

