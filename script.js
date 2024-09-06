const counter = document.getElementById('counter');
const decrementCounter = document.getElementById('decrement');
const incrementCounter = document.getElementById('increment');
const error = document.getElementById('error');
const clearButton = document.getElementById('clear');

let count = 0;

incrementCounter.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementCounter.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCounter();
        error.classList.add('hidden'); // Hide error if decrement is valid
    } else {
        showError();
    }
});

clearButton.addEventListener('click', () => {
    count = 0;
    updateCounter();
    clearButton.classList.add('hidden');
});

function updateCounter() {
    counter.innerHTML = count;

    // Show or hide the Clear button based on count
    if (count > 0) {
        clearButton.classList.remove('hidden');
    } else {
        clearButton.classList.add('hidden');
    }

    // Hide the error message if the count is positive
    if (count > 0) {
        error.classList.add('hidden');
    }
}

function showError() {
    error.classList.remove('hidden'); // Show the error if count is already 0
}
