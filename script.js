// Get references to the HTML elements
const greetingHeader = document.getElementById('greeting-header');
const nameInput = document.getElementById('name-input');
const greetButton = document.getElementById('greet-button');
const redBox = document.querySelector('.box.red');
const blueBox = document.querySelector('.box.blue');
const greenBox = document.querySelector('.box.green');
const yellowBox = document.querySelector('.box.yellow');

// Function to handle the greet button click
greetButton.addEventListener('click', () => {
    const name = nameInput.value;
    if (name) {
        greetingHeader.textContent = `Hello, ${name}`;
    } else {
        greetingHeader.textContent = 'Hello';
    }
});

// Function to handle color box clicks (toggle functionality)
function toggleColor(box, color) {
    box.addEventListener('click', () => {
        // If the box is not already colored, set its color
        if (box.style.backgroundColor === '' || box.style.backgroundColor === 'transparent') {
            box.style.backgroundColor = color;
            // Set text color for readability
            if (color === 'red' || color === 'blue' || color === 'green') {
                box.style.color = 'white';
            } else {
                box.style.color = 'black';
            }
        } else {
            // Otherwise, reset its color to default
            box.style.backgroundColor = '';
            box.style.color = '';
        }
    });
}

// Apply the toggle functionality to each box
toggleColor(redBox, 'red');
toggleColor(blueBox, 'blue');
toggleColor(greenBox, 'green');
toggleColor(yellowBox, 'yellow');