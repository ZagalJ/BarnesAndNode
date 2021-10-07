const { Admins } = require('../models');

const adminsData = [
  {
    id: '123',
    email: 'a@a.com',
    email_password: '123',
  },
  {
    id: '456',
    email: 'b@b.com',
    email_password: '456',
  },
  {
    id: '789',
    email: 'c@c.com',
    email_password: '789',
  },
  {
    id: '012',
    email: 'd@d.com',
    email_password: '012',
  },
  
];

const seedAdmins = () => Admins.bulkCreate(adminsData);

module.exports = seedAdmins;
