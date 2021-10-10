const { Reviews } = require('../models');

const reviewsData = [
  {
    user_id: 2,
  },
  
  {
    user_id: 3,
  },
  
  {
    user_id: 1,
  },
  
  {
    user_id: 4,
  },
  
];

const seedReviews = () => Reviews.bulkCreate(reviewsData);

module.exports = seedReviews;
