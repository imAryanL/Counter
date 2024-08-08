# Counter Program

## Description
A simple web application that allows users to increase, decrease, and reset a counter. The current value of the counter is displayed on the screen.

## Features
- Increase the counter value
- Decrease the counter value
- Reset the counter value to zero

## Technologies Used
- HTML
- CSS
- JavaScript

## Usage
1. Open `index.html` in your web browser.
2. Use the buttons to increase, decrease, or reset the counter.

## How to Run
1. Clone the repository or download the project files.
2. Open `index.html` in any web browser.
3. Use the buttons to interact with the counter.

## JavaScript Explanation
The `counter.js` file contains the following:

### Variables
- **decreaseBtn**: References the decrease button element.
- **resetBtn**: References the reset button element.
- **increaseBtn**: References the increase button element.
- **countLabel**: References the label element displaying the counter value.
- **count**: A variable to store the current counter value.

### Function: increaseBtn.onclick
- **Purpose**: Increases the counter value by 1.
- **Functionality**:
  - Increments the `count` variable.
  - Updates the text content of `countLabel` with the new count value.

### Function: decreaseBtn.onclick
- **Purpose**: Decreases the counter value by 1.
- **Functionality**:
  - Decrements the `count` variable.
  - Updates the text content of `countLabel` with the new count value.

### Function: resetBtn.onclick
- **Purpose**: Resets the counter value to 0.
- **Functionality**:
  - Sets the `count` variable to 0.
  - Updates the text content of `countLabel` with the new count value.

```javascript
// Counter Program

// get references to the buttons and label
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

// initialize the count variable
let count = 0;

// function to increase the count
increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

// function to decrease the count
decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

// function to reset the count
resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}
```

![count](https://github.com/user-attachments/assets/ee5f56be-ffbd-49bf-8851-9f51e12aa135)
