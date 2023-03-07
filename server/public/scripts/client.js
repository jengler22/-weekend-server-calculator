//const express = require('express');

let addedValues;
//historyOfResults;


// clear inputs so chris doesnt remind me for the 3rd assingment in a row.
function clearInputs () {
    let firstInput = document.querySelector('#firstInput');
    let secondInput = document.querySelector('#secondInput');
    firstInput.value = '';
    secondInput.value = '';
       console.log('clearInputs in running');
}

function useButton(event) {
   addedValues = event.target.value;
}

function equals(event) {
    let firstInput = document.querySelector('#firstInput').value;
    let secondInput = document.querySelector('#secondInput').value;
    let operator = addedValues;
      console.log(firstInput, secondInput);

   let numbers = {
    first: firstInput,
    second: secondInput,
    operatorInput: operator
    // history: historyOfResults
   };
   console.log(numbers);

   // POST request
axios.post('/numbers', numbers).then((response)=> {
    console.log(response);
    showEquation();
    showAnswer();
}).catch((error)=> {
    console.log(error);
    alert('something is wrong check point 1');

})
}
// function to show past equations.
showEquation()
function showEquation () {
    axios.get('/history').then((response)=> {
        console.log('showEquation is running');
        let serverResults =response.data;
        let outputDiv = document.querySelector('#historyResultsDiv');
        outputDiv.innerHTML = '';
        for(let calculation of serverResults) {
            outputDiv.innerHTML += `
            <P>${calculation}</P>`;
        }
    })
}

// displays answer to equation
function showAnswer() {
axios.get('/numbers').then((response) => {
console.log('displayResults is running', response.data);
let displayResultsFromServer = response.data;
let outputDiv = document.querySelector('#historyDiv');
outputDiv.innerHTML = `
<h3> the answer is': ${displayResultsFromServer[displayResultsFromServer.length-1]}<h3>`;
})
}
