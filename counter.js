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
