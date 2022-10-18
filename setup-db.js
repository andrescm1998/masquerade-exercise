// Send the SQL code to the database that we've connected to
const fs = require('fs');
require('dotenv').config();

//Load in the SQL code/ Read the SQL code

const sql = fs.readFileSync('setup.sql').toString();

// Import our database

const db = require('./db')

//Run the query - sending the SQL code to the database
db.query(sql)
    .then(data => console.log('Set up complete'))
    .catch(error => console.log(error))
