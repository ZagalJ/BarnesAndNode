const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: '',
        database: 'barnesandnode_db'
    },
    console.log(`Connected to the book database.`)
);

module.exports = db;