let addedValues;

function useButton(event) {
   addedValues = event.target.value;
}

function equals(event) {
    let firstInput = document.querySelector('#firstInput'.value);
    let secondInput = document.querySelector('#secondNumber'.value);
    let operate = addedValues;
      console.log(firstInput,secondInput);
}