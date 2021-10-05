const { User } = require('../models');

const userData = [
  {
    id: '11111',
    first_name: 'Elvis',
    last_name: 'Presley',
    email: 'elvis@e.com',
    email_password: '11111',
  },
  {
    id: '22222',
    first_name: 'Abraham',
    last_name: 'Lincoln',
    email: 'abe@a.com',
    email_password: '22222',
  },
  {
    id: '33333',
    first_name: 'Betty',
    last_name: 'White',
    email: 'betty@b.com',
    email_password: '33333',
  },
  {
    id: '44444',
    first_name: 'Sofia',
    last_name: 'Vergara',
    email: 'sofia@s.com',
    email_password: '44444',
  },
  {
    id: '55555',
    first_name: 'Bob',
    last_name: 'Ross',
    email: 'bob@b.com',
    email_password: '55555',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
