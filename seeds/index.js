const seedUser = require('./user_seeds');
const seedReviews = require('./reviews_seeds');
const seedBooks = require('./books_seeds');
const seedAdmin = require('./admins_seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedReviews();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedBooks();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedAdmins();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
