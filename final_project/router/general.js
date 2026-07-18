const express = require('express');
const books = require('./booksdb.js');
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;

const general = express.Router();

general.post("/register", (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: "Username and password required"
        });
    }

    if (!isValid(username)) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    users.push({
        username,
        password
    });

    return res.status(200).json({
        message: "User registered successfully"
    });

});

general.get('/', (req, res) => {
  res.json(books);
});

general.get('/isbn/:isbn', (req, res) => {
  const book = books[req.params.isbn];

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  return res.json(book);
});

general.get('/author/:author', (req, res) => {
  const author = req.params.author.toLowerCase();
  const matchingBooks = Object.values(books).filter(
    (book) => book.author.toLowerCase() === author
  );

  return res.json(matchingBooks);
});

general.get('/title/:title', (req, res) => {
  const title = req.params.title.toLowerCase();
  const matchingBooks = Object.values(books).filter(
    (book) => book.title.toLowerCase() === title
  );

  return res.json(matchingBooks);
});


general.get('/review/:isbn', (req, res) => {

    const isbn = req.params.isbn;

    if (books[isbn]) {
        return res.status(200).json(books[isbn].reviews);
    }

    return res.status(404).json({
        message: "Book not found"
    });

});
module.exports.general = general;

