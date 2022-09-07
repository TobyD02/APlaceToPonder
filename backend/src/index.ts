/*
    TODO:
        - Add regex validation to user creation (need to install regex module)
        - Create post request for account creation and implement input validation
        on front end based onbackend response
*/


const path = require('path')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const { User } = require('./models.ts')
const { Pool, Client } = require('pg')

// Connect to database
const client = new Client({
    user: 'docker',
    host: 'db',
    database: 'docker',
    port: process.env.DB_PORT,
    password: 'docker'
})

client.connect()


// Example query
let values = ['00000000000000000000000001', 'tobydixon1234']
let query = 'INSERT INTO users(id, username) VALUES($1, $2) RETURNING *'

client.query(query, values, (err: any, res: any) => {
    console.log(err, res)
    client.end()
})

// app.use(express.static(path.join(__dirname, '../frontend/build')))

app.get('/', (req: any, res: any) => {
    res.status(200).send("Hello World!")
})

app.get('/login', (req: any, res: any) => {
    res.status(200).send("Hello Login")
})


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})