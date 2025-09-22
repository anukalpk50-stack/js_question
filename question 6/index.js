let numbers = [10, 25, 8];
const numberInput = document.getElementById('numberInput');
const addButton = document.getElementById('addButton');
const arrayDisplay = document.getElementById('arrayDisplay');

function updateDisplay() {
    arrayDisplay.textContent = 'current Array : [ ' + numberInput.joint(', ') + ']';
}
addButton.addEventListener(' click', function() {
    const newNumber = parseInt(numberInput.value);
    if (!isNaN(newNumber)) {
        numbers.push(newNumber);
        updateDisplay();
        numberInput.value = '';
    } else {
        alert('please enter a valid number .');
    }
});
updateDisplay();