const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
app.use(express.json());

// Global variables to store results.
let results = [];

// GET request
app.get('/numbers', (req, res) => {
    res.send(results);
})











app.use(express.static('server/public'));

// Listen for requests for files
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});