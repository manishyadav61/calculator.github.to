let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteNumber() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch {
        display.textContent = 'Error';
        currentInput = '';
    }
}
