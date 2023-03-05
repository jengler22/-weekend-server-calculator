const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
app.use(express.json());

// Global variables to store results.
// created 2 arrays for results and history?
let results = [];
let resultsHistory = [];

// GET request for results
app.get('/numbers', (req, res) => {
    res.send(results);
})
// GET request for History
app.get('/history', (req, res)=> {
    res.send(resultsHistory);
})













app.use(express.static('server/public'));

// Listen for requests for files
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});