const { Books } = require('../models');

const booksData = [
  {
    id: '1234',
    book_name: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    category: 'Children\'s Books',
    isbn_num: '9780590353403',
    stock_number:'5',
    reserved_status: false,
  },
  {
    id: '7894',
    book_name: 'War and Peace',
    author: 'Leo Tolstoy',
    category: 'Fiction',
    isbn_num: '9780393966473',
    stock_number:'2',
    reserved_status: fasle,
  },
  {
    id: '6852',
    book_name: 'A Brief History of Time',
    author: 'Stephen Hawking',
    category: 'Non-fiction',
    isbn_num: '9780593060506',
    stock_number:'4',
    reserved_status: false,
  },
  {
    id: '6822',
    book_name: 'Gone Girl',
    author: 'Gillian Flynn',
    category: 'Thriller',
    isbn_num: '9780307588371',
    stock_number:'1',
    reserved_status: false,
  },
  
  
];

const seedBooks = () => Books.bulkCreate(booksData);

module.exports = seedBooks;
