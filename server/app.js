const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(express.json());
app.use(cors());

// Set up basic roots

app.get('/', (req, res) => {
    console.log('Welcome to the Masquerade API')
});


app.get('/entities', async (req, res) => {
    const data = await db.query('SELECT * FROM entity;')
    res.send(data.rows)
})


app.post('/entities', async (req, res) => {

    const newEntity = req.body;
    console.log(newEntity)
    // entities take entity_name and entity_type values
    const data = await db.query('INSERT INTO entity (entity_name, entity_type) VALUES ($1, $2)', [Object.values(newEntity)[0], Object.values(newEntity)[1]])

    res.send(data.rows)
});


app.get('/locations', async (req, res) => {
    const data = await db.query('SELECT * FROM locations;')
    res.send(data.rows)
})


app.post('/locations', async (req, res) => {

    const newLocation = req.body;
    // locations take a location_name value 
    const data = await db.query('INSERT INTO locations (locations_name) VALUES ($1)', [Object.values(newLocation)[0]])

    res.send(data.rows)
})


app.get('/incidents', async (req, res) => {
    const data = await db.query('SELECT * FROM incidents;')
    res.send(data.rows)
})


app.post('/incidents', async (req, res) => {
    
    const newIncident = req.body;

    // incidents take entity_id, location_id, incident_time, incident_level, incident_description
    const data = await db.query('INSERT INTO incidents (entity_id, location_id, incident_time, incident_level, incident_description) VALUES ($1, $2, $3, $4 , $5)', [Object.values(newIncident)[0], Object.values(newIncident)[1], Object.values(newIncident)[2], Object.values(newIncident)[3], Object.values(newIncident)[4]])

    res.send(data.rows)
})


app.delete('/remove/entity/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const removeEntity = await db.query('DELETE FROM entity WHERE entity_id = $1', [id])
    res.send('DELETE request executed')
})

app.delete('/remove/location/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const removeLocation = await db.query('DELETE FROM locations WHERE locations_id = $1', [id])
    res.send('DELETE request executed')
})

app.delete('/remove/incident/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const removeIncident = await db.query('DELETE FROM incidents WHERE incident_id = $1', [id])
    res.send('DELETE request executed')
})



module.exports = app;
