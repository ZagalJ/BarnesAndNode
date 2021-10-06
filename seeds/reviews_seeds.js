const { Reviews } = require('../models');

const reviewsData = [
  // {
  //   book_id: '1234'

  // },
  // {
  //   book_id: '32424'
  // },
  // {
  //   book_id: '45345'
  // },
  // {
  //   book_id: '43534'
  // },
];

const seedReviews = () => Reviews.bulkCreate(reviewsData);

module.exports = seedReviews;
