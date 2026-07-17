const axios = require("axios");

// Task 10.1 - Get all books (Async/Await)
async function getAllBooks() {
    try {
        const response = await axios.get("http://localhost:5000/");
        console.log("All Books:");
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

// Task 10.2 - Get book by ISBN (Promise)
function getBookByISBN(isbn) {
    axios
        .get(`http://localhost:5000/isbn/${isbn}`)
        .then(response => {
            console.log("Book by ISBN:");
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        });
}

// Task 10.3 - Get books by Author (Promise)
function getBooksByAuthor(author) {
    axios
        .get(`http://localhost:5000/author/${author}`)
        .then(response => {
            console.log("Books by Author:");
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        });
}

// Task 10.4 - Get books by Title (Promise)
function getBooksByTitle(title) {
    axios
        .get(`http://localhost:5000/title/${title}`)
        .then(response => {
            console.log("Books by Title:");
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        });
}

// Example calls
getAllBooks();
getBookByISBN("1");
getBooksByAuthor("Chinua Achebe");
getBooksByTitle("Things Fall Apart");