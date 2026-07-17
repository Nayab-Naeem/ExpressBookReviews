const express = require('express');
const books = require('./booksdb.js');

const general = express.Router();

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

module.exports.general = general;

