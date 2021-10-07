// import models
const Books = require('./Books');
const User = require('./User');
const Admins = require('./Admins');
const Reviews = require('./Reviews');

// Reviews belongTo User
Reviews.belongsTo(User, {
    foreignKey: 'user_id',
});

// Reviews belongTo Books
Reviews.belongsTo(Books, {
    foreignKey: 'book_id',
});

module.exports = {
    Books,
    User,
    Admins,
    Reviews,
};