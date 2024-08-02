interface LoginUser {
  username: string;
  password: string;
}

const login = (user: LoginUser): boolean => {
  return true;
};

const jstamosObj = {
  username: 'jstamos',
  password: '1234',
  extraStuff: null,
};

login(jstamosObj);
