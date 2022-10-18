// Pool is a pool of managed connections
// We're asking pg to manage our connections for us
const {Pool} = require('pg')

const db = new Pool({
    connectionString: process.env.DB_URL
})

module.exports = db;
