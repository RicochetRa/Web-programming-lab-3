const express = require('express');
//var mysql = require('mysql');

//creating app
const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html', {root:__dirname});
});


//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Cart app listening at http://localhost:${port}`);
});

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

//route for contacts
app.get('/contacts', (req, res) => {
    res.render('contacts');
});

//for register
app.get('/clients', (req, res) => {
    res.render('register');
});

//for login
app.get('/login', (req, res) => {
    res.render('login');
});

const router = require('./routes/apis');
app.use(router);


