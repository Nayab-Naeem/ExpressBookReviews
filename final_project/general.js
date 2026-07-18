const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// Task 10.1
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/`);
        console.log("All Books:");
        console.log(response.data);
    } catch (err) {
        console.log(err.message);
    }
}

// Task 10.2
function getBookByISBN(isbn) {
    axios
        .get(`${BASE_URL}/isbn/${isbn}`)
        .then(response => {
            console.log("Book by ISBN:");
            console.log(response.data);
        })
        .catch(err => console.log(err.message));
}

// Task 10.3
function getBookByAuthor(author) {
    axios
        .get(`${BASE_URL}/author/${author}`)
        .then(response => {
            console.log("Books by Author:");
            console.log(response.data);
        })
        .catch(err => console.log(err.message));
}

// Task 10.4
function getBookByTitle(title) {
    axios
        .get(`${BASE_URL}/title/${title}`)
        .then(response => {
            console.log("Books by Title:");
            console.log(response.data);
        })
        .catch(err => console.log(err.message));
}

// Call functions

getAllBooks();
getBookByISBN(1);
getBookByAuthor("Chinua Achebe");
getBookByTitle("Things Fall Apart");