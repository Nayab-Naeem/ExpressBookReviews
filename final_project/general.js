const axios = require("axios");

const BASE_URL = "http://localhost:5000";

async function getAllBooks() {
    const response = await axios.get(`${BASE_URL}/`);
    console.log(response.data);
}

async function getBookByISBN(isbn) {
    const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
    console.log(response.data);
}

async function getBookByAuthor(author) {
    const response = await axios.get(`${BASE_URL}/author/${author}`);
    console.log(response.data);
}

async function getBookByTitle(title) {
    const response = await axios.get(`${BASE_URL}/title/${title}`);
    console.log(response.data);
}

getAllBooks();
getBookByISBN(1);
getBookByAuthor("Chinua Achebe");
getBookByTitle("Things Fall Apart");