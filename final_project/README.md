# 📚 Express Book Reviews

A RESTful Book Review API built using **Node.js**, **Express.js**, **JWT Authentication**, and **Express Session** as part of the IBM Node.js & Express.js Final Project.

This application allows users to browse books, register, log in, and manage their own book reviews securely.

---

## 🚀 Features

### General Users
- 📖 View all available books
- 🔍 Search books by ISBN
- 👤 Search books by Author
- 📚 Search books by Title
- ⭐ View book reviews

### Registered Users
- 🔐 User Registration
- 🔑 User Login using JWT Authentication
- ✍️ Add a Book Review
- 📝 Update Your Own Review
- 🗑️ Delete Your Own Review

### Additional Features
- RESTful API Design
- Express Session Authentication
- JWT Token Authorization
- Async/Await with Axios
- JSON-based Book Database

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Express Session
- JSON Web Token (JWT)
- Axios
- JavaScript

---

## 📁 Project Structure

```
final_project/
│
├── router/
│   ├── auth_users.js
│   ├── general.js
│   └── booksdb.js
│
├── submission/
│   ├── getallbooks.txt
│   ├── getbooksbyISBN.txt
│   ├── getbooksbyauthor.txt
│   ├── getbooksbytitle.txt
│   ├── getbookreview.txt
│   ├── register.txt
│   ├── login.txt
│   ├── reviewadded.txt
│   ├── deletereview.txt
│   └── githubrepo.txt
│
├── general.js
├── index.js
└── package.json
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Nayab-Naeem/ExpressBookReviews.git
```

Navigate into the project

```bash
cd ExpressBookReviews/final_project
```


The server runs on:

```
http://localhost:5000
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Get all books |
| GET | `/isbn/:isbn` | Search by ISBN |
| GET | `/author/:author` | Search by Author |
| GET | `/title/:title` | Search by Title |
| GET | `/review/:isbn` | Get Reviews |
| POST | `/customer/register` | Register User |
| POST | `/customer/login` | Login |
| PUT | `/customer/auth/review/:isbn?review=...` | Add/Update Review |
| DELETE | `/customer/auth/review/:isbn` | Delete Review |

---

## 🔐 Authentication

This project uses:

- Express Session
- JSON Web Tokens (JWT)

Only authenticated users can add, update, or delete book reviews.

---

## 📖 Course

IBM Developer Skills Network

**Developing Back-End Apps with Node.js and Express**

Final Project

---

## 👩‍💻 Author

**Nayab Naeem**

- GitHub: https://github.com/Nayab-Naeem
- LinkedIn: https://www.linkedin.com/in/nayabnaeemcs

