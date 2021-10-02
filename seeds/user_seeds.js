const { User } = require('../models');

const userData = [
  {
    first_name: '',
  },
  {
    last_name: '',
  },
  {
    email: '',
  },
  {
    password: '',
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;


//Need to find out how to add multiple data sets