-- DROP DATABASE
DROP DATABASE IF EXISTS barnesAndNode_db;

-- CREATE DATABASE
CREATE DATABASE barnesAndNode_db;

USE barnesAndNode_db;


CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    book_name VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    isbn_num INT NOT NULL,
    stock_number INT NOT NULL,
    reserved_status BOOLEAN,
    description VARCHAR(150),
    filename VARCHAR(80) 
);

ALTER TABLE books ADD FULLTEXT (book_name) ;
ALTER TABLE books ADD FULLTEXT (description);

CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    email VARCHAR(100) NOT NULL,
    email_password VARCHAR(100) NOT NULL
);

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    email_password VARCHAR(100) NOT NULL
);

CREATE TABLE reviews (
    book_id INT NOT NULL,
    user_id VARCHAR(100) NOT NULL
);