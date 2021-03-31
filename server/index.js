const express = require('express');

const  server = express();




server.get('/', (req, res) => {
    res.send('Server is running');
})


server.listen(5000, () => {
    console.log(`Users server is running on http://localhost:5000`);
});