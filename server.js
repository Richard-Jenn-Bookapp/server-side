
require ('dotenv').config();
const express = require('express');
const app = express();
const pg = require('pg');
const cors = require('cors');

const PORT = process.env.PORT;
const client = new pg.Client( process.env.DATABASE_URL);

// const conString = 'postgres://@localhost:5432/books';

client.connect();

app.use(cors());

app.use((req, res, next) => {
    console.log('received a request!');
    next();
});


app.get('/api/v1/books', (req, res) => {
    client.query(`SELECT * FROM books;`)
        .then(data => res.send(data.rows));
});

app.get('/api/v1/books/:book', (req, res) => {
    client.query(`SELECT * FROM books WHERE book = $1;`, [req.params.book])
        .then(data => res.send(data.rows));
});

app.listen(PORT, () => { 
    console.log(`Listening for API requests to port ${PORT}`);
});


