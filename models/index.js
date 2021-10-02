// import models
const Books = require('./Books');
const User = require('./User');
const Admin = require('./Admin');
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
    Admin,
    Reviews,
};