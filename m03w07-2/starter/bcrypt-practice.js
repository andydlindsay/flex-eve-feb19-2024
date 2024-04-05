const bcrypt = require('bcryptjs');

// bcrypt.genSalt(10, (err, salt) => {
//   console.log('salt', salt);
// });

// bcrypt.genSalt(10)
//   .then((salt) => {
//     console.log('salt', salt);
//   })
//   .catch((err) => {})

const salt = bcrypt.genSaltSync(10);
console.log('salt', salt);

const plaintextPassword = '1234';

const hash = bcrypt.hashSync(plaintextPassword, salt);
console.log('hash', hash);


// const userHash = '$2a$10$P9ek5RCeILBWf/O/OXZiteAU0pNGiwmIhoKdPWFc1nsFtAx3FpGXS';

// const result = bcrypt.compareSync('1234', userHash);

// console.log('result', result);
