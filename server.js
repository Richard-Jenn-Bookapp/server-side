
require ('dotenv').config();
const express = require('express');
const app = express();
const pg = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
const superagent = require('superagent');



const PORT = process.env.PORT;
// const G_API_KEY = process.env.G_API_KEY;
// console.log(G_API_KEY);
const client = new pg.Client( process.env.DATABASE_URL);


// const conString = 'postgres://@localhost:5432/books';

client.connect();

app.use(cors());

app.use((req, res, next) => {
    console.log('received a request!');
    next();
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// const conString = ('postgres://postgres:jenny@localhost:5432/books';
app.use((req, res, next) =>{
    console.log('recieved a request');
    next();
});

// app.get('/search', (req, res) => {
// const googleUrl = 'https '
// const searchFor = req.query.search;



// superagent
// .get(`${googleUrl}${searchFor}&key=${G_API_KEY}`);
// .end((err, resp) => {

        



app.get('/api/v1/books', (req, res) => {
    client.query(`SELECT * FROM books;`)
        .then(data => res.send(data.rows))
        .catch(console.error);
});

app.post('/api/v1/books', (req, res) => {
    client.query(`
      INSERT INTO books (id, author, title, isbn, image_url, description)
      VALUES ($1, $2, $3, $4, $5, $6);
      `, [
          
            req.body.id,
            req.body.author,
            req.body.title,
            req.body.isbn,
            req.body.image_url,
            req.body.description,
        ])
        .then(data => res.send(data.rows))
        .catch(console.error);
});

app.get('api/v1/books/:id', (req, res) => {
    client.query(`SELECT * FROM books WHERE id = $1`, [req.params.id])
        .then(data => res.send(data.rows))
        .catch(console.error);
});

app.put('/api/v1/books/:id', (req, res) => {
    client.query(`
    UPDATE books SET  id=$1, author=$2, title=$3, isbn=$4, image_url=$5, description=$6;
    `, [
            req.body.id,
            req.body.author,
            req.body.title,
            req.body.isbn,
            req.body.image_url,
            req.body.description
        ])
        .then(data => res.status(200).send('Book updated'))

});


app.delete('/api/v1/books/:id', (req, res) => {
    client.query(`
    DELETE FROM books WHERE id = $1;
    `, [req.params.id])
        .then(data => res.send('Data deleted.').status(204))
        .catch(console.error);
});


app.get('/api/v1/books/:id', (req, res) => {
    client.query(`SELECT * FROM books WHERE id = $1;`, [
        req.params.id
    ])
        .then(data => res.send(data.rows))
        .catch(console.error);
});

app.listen(PORT, () => {
    console.log(`Listening for API requests to port ${PORT}`);
});
