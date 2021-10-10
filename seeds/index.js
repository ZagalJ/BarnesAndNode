const seedUser = require('./user_seeds');
const seedReviews = require('./reviews_seeds');
const seedBooks = require('./books_seeds');
const seedAdmins = require('./admins_seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- Users SEEDED -----\n');

  await seedReviews();
  console.log('\n----- Reviews SEEDED -----\n');

  await seedBooks();
  console.log('\n----- Books SEEDED -----\n');

  await seedAdmins();
  console.log('\n----- Admins SEEDED -----\n');

  process.exit(0);
};

seedAll();
