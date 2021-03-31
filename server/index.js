const express = require('express');
const cors = require('cors');
require('dotenv').config({ path:'server/.env'});


const  server = express();

const { SERVER_PORT } = process.env;

//Midlewares
server.use(cors());
server.use(express.json());


server.get('/', (req, res) => {
    res.send('Server is running');
})


server.listen(SERVER_PORT, () => {
    console.log(`Users server is running on http://localhost:${SERVER_PORT}`);
});