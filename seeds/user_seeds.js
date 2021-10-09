const { User } = require('../models');

const userData = [
  {
    first_name: 'Elvis',
    last_name: 'Presley',
    email: 'elvis@e.com',
    password: '11111',
  },
  {
    first_name: 'Abraham',
    last_name: 'Lincoln',
    email: 'abe@a.com',
    password: '22222',
  },
  {
    first_name: 'Betty',
    last_name: 'White',
    email: 'betty@b.com',
    password: '33333',
  },
  {
    first_name: 'Sofia',
    last_name: 'Vergara',
    email: 'sofia@s.com',
    password: '44444',
  },
  {
    first_name: 'Bob',
    last_name: 'Ross',
    email: 'bob@b.com',
    password: '55555',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
