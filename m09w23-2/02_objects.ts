interface Pet {
  name: string;
  breed: string;
}

interface User {
  id?: number;
  username: string;
  age: number;
}

const myObj: User = {
  id: 2,
  username: 'bob',
  age: 42,
};

const myObj2: User = {} as User;
myObj2.id = 5;

const users: User[] = [];
users.push(myObj);
