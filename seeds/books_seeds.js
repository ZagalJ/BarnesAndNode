const { Books } = require('../models');

const booksData = [
  {
    book_name: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    category: 'Children\'s Books',
    isbn_num: 9780590353403,
    stock_number: 5,
    reserved_status: false,
    filename:'harry.jpeg',
    description:"Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry"
  },
  {
    book_name: 'War and Peace',
    author: 'Leo Tolstoy',
    category: 'Fiction',
    isbn_num: 9780393966473,
    stock_number: 2,
    reserved_status: false,
    filename:'war.jpeg',
    description:"The novel chronicles the French invasion of Russia and the impact of the Napoleonic era on Tsarist society through the stories of five Russian aristocratic families."
  },
  {
    book_name: 'A Brief History of Time',
    author: 'Stephen Hawking',
    category: 'Non-fiction',
    isbn_num: 9780593060506,
    stock_number: 4,
    reserved_status: false,
    filename:'history.jpg',
    description:'A Brief History of Time: From the Big Bang to Black Holes is a book on theoretical cosmology by English physicist Stephen Hawking.'
  },
  {
    book_name: 'Gone Girl',
    author: 'Gillian Flynn',
    category: 'Thriller',
    isbn_num: 9780307588371,
    stock_number: 1,
    reserved_status: false,
    filename:'gone.jpg',
    description:"The sense of suspense in the novel comes from whether or not Nick Dunne is involved in the disappearance of his wife Amy"
  },
  {
    book_name: 'Da Vinci Code',
    author: 'Dan Brown',
    category: 'Thriller',
    isbn_num: 9780552149518,
    stock_number: 9,
    reserved_status: false,
    filename:'vinci.jpeg',
    description:"The Da Vinci Code follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei."
  },
  {
    book_name: 'The Fault in Our Stars',
    author: 'John Green',
    category: 'Romance novel',
    isbn_num: 9780142424179,
    stock_number: 6,
    reserved_status: false,
    filename:'stars.jpeg',
    description:'The story is narrated by Hazel Grace Lancaster, a 16-year-old girl with thyroid cancer that has affected her lungs. Hazel is forced by her parents to attend a support group where she subsequently meets and falls in love with 17-year-old Augustus Waters.'
  },
  {
    book_name: 'Guinness World Records',
    author: 'Craig Glenday',
    category: 'Yearbook',
    isbn_num: 9780900424069,
    stock_number: 3,
    reserved_status: true,
    filename:'records.jpeg',
    description:"Guinness World Records is a reference book published annually, listing world records both of human achievements and the extremes of the natural world"
  },
  {
    book_name: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    category: 'Thriller',
    isbn_num: 9780307269751,
    stock_number: 2,
    reserved_status: false,
    filename:'tattoo.jpeg',
    description:"Journalist Mikael Blomkvist is aided in his search for a woman who has been missing for forty years by Lisbeth Salander, a young computer hacker."
  },
  {
    book_name: 'The Hobbit',
    author: "J. R. R. Tolkien",
    category: 'Fiction',
    isbn_num: 9780044403371,
    stock_number: 11,
    reserved_status: false,
    filename:'hobbit.jpeg',
    description:"The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon."
  },
  {
    book_name: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    category: 'Novel',
    isbn_num: 9780140430547,
    stock_number: 7,
    reserved_status: true,
    filename:'cities.jpeg',
    description:"The novel tells the story of the French Doctor Manette, his 18-year-long imprisonment in the Bastille in Paris and his release to live in London with his daughter Lucie, whom he had never met."
  },
  {
    book_name: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Novel',
    isbn_num: 9780694524440,
    stock_number: 5,
    reserved_status: false,
    filename:'alchemist.jpeg',
    description:'The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.'
  },
  {
    book_name: 'Lord of the Rings',
    author: 'J. R. R. Tolkien',
    category: 'Fantasy',
    isbn_num: 9780007141326,
    stock_number: 15,
    reserved_status: false,
    filename:'lord.jpeg',
    description:"The title refers to the story's main antagonist, the Dark Lord Sauron, who in an earlier age created the One Ring to rule the other Rings of Power given to Men, Dwarves, and Elves, in his campaign to conquer all of Middle-earth."
  },

  
];

const seedBooks = () => Books.bulkCreate(booksData);

module.exports = seedBooks;
