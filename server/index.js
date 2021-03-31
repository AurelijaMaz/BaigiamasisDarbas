const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path:'server/.env'});
const usersRouter = require('./routes/users');

const  server = express();

const { SERVER_PORT,
    MG_COMPASS_USER,
    MG_COMPASS_PASS,
    MG_COMPASS_CLUSTER_URL,
    MG_COMPASS_CLUSTER_DB } = process.env;

//Midlewares
server.use(cors());
server.use(express.json());


//Add routes

server.use('/users', usersRouter);


server.get('/', (req, res) => {
    res.send('Server is running');
})





const db = mongoose.connection;
mongoose.connect(`mongodb+srv://${MG_COMPASS_USER}:${MG_COMPASS_PASS}@${MG_COMPASS_CLUSTER_URL}/${MG_COMPASS_CLUSTER_DB}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true} )

db.on('connected', function () {
    console.log('Connected to Database successfuly')
    server.listen(SERVER_PORT, () => {
        console.log(`Users server is running on http://localhost:${SERVER_PORT}`);
    });

})

db.on('error', (error) => console.error('FAILED TO CONNECT TO DB:\n ' + error))