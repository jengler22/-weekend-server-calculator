const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
app.use(express.json());

// Global variables to store results.
// created 2 arrays for results and history?
let results = [];
let historyOfResults = [];

// GET request for results
app.get('/numbers', (req, res) => {
    res.send(results);
})
// GET request for History
app.get('/history', (req, res)=> {
    res.send(historyOfResults);
})

// POST request for numbers
app.post('/numbers', (req, res) => {
    let numbersObject = req.body;
    let result;

    if(numbersObject.addedValues === '+') {
        result = Number(numbersObject.first) + Number(numbersObject.second);
    } else if (numbersObject.addedValues === '-') {
        result = Number(numbersObject.first) - Number(numbersObject.second); 
    } else if (numbersObject.addedValues === '*') {
        result = Number(numbersObject.first) * Number(numbersObject.second);
    } else if (numbersObject.addedValues === '/') {
        result = Number(numbersObject.first) / Number(numbersObject.second);
    }
       console.log(result);


      let calcutalion = `${numbersObject.first} ${numbersObject.addedValues} ${numbersObject.second} = ${result}`;
      resultsHistory.push(calcutalion);
      results.push(result);
      console.log(calcutalion);
      res.sendStatus(201);  

})


app.use(express.static('server/public'));

// Listen for requests for files
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});