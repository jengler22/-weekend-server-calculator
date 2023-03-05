const { response } = require("express");

let addedValues;
//historyOfResults;

function useButton(event) {
   addedValues = event.target.value;
}

function equals(event) {
    let firstInput = document.querySelector('#firstInput'.value);
    let secondInput = document.querySelector('#secondInput'.value);
    let operate = addedValues;
      console.log(firstInput,secondInput);

   let numbers = {
    first: firstInput,
    second: secondInput,
    operate: addedValues,
    // history: historyOfResults
   };
   console.log(numbers);

   // POST request
axios.post('/numbers', numbers).then((response)=> {
    console.log(response);
    getResults();
    displayResults();
}).catch((error)=> {
    console.log(error);
    alert('something is wrong');

})
};

function getResults () {
    axios.get('/numbers').then((response)=> {
        console.log('getResults is running');
        let serverResults =response.data;
        let outputDiv = document.querySelector('#historyResultsDiv');
        outputDiv.innerHTML = '';
        for(let calculation of serverResults) {
            outputDiv.innerHTML += `
            <h2>${calculation}</h2>`;
        }
    })
}

function displayResults() {
axios.get('history').then((response) => {
console.log('displayResults is running');
let displayResultsFromServer = response.data;
let outputDiv = document.querySelector('#historyDiv');
outputDiv.innerHTML = `
<h2>${displayResultsFromServer[displayResultsFromServer.lenght-1]}</h2>`;
})
}
