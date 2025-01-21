// Initial count value
let count: number = 0;

// Update the count display
const updateCountDisplay = (): void => {
    const countElement: HTMLElement | null = document.getElementById('count');
    if (countElement) {
        countElement.textContent = count.toString();
    }
};

// Increment the count
const increment = (): void => {
    count += 1;
    updateCountDisplay();
};

// Decrement the count
const decrement = (): void => {
    count -= 1;
    updateCountDisplay();
};

// Reset the count
const reset = (): void => {
    count = 0;
    updateCountDisplay();
};

// Attach event listeners to buttons
const incrementButton: HTMLElement | null = document.getElementById('increment-button');
const decrementButton: HTMLElement | null = document.getElementById('decrement-button');
const resetButton: HTMLElement | null = document.getElementById('reset-button');
if (incrementButton) {
    incrementButton.onclick = increment;
}

if (decrementButton) {
    decrementButton.onclick = decrement;
}

if (resetButton) {
    resetButton.onclick = reset;
}
