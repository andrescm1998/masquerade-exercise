const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log('Welcome to the Masquerade API')
});



module.exports = app;
