const { Reviews } = require('../models');

const reviewsData = [
  {
    book_id: '1234',
    user_id: '',
  },
  {
    book_id: '',
    user_id: '',
  },
  {
    book_id: '',
    user_id: '',
  },
  {
    book_id: '',
    user_id: '',
  },
];

const seedReviews = () => Reviews.bulkCreate(reviewsData);

module.exports = seedReviews;
