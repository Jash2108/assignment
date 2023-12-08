/********* create variables *********/
var costPerDay = 35; // Default rate for a full day
var numberOfDaysSelected = 0;

// Elements on the screen that will be clicked or modified
var dayButtons = document.querySelectorAll('.day-selector li');
var fullDayButton = document.getElementById('full');
var halfDayButton = document.getElementById('half');
var clearButton = document.getElementById('clear-button');
var calculatedCostElement = document.getElementById('calculated-cost');

/********* colour change days of week *********/
dayButtons.forEach(function(dayButton) {
    dayButton.addEventListener('click', function() {
        if (!dayButton.classList.contains('clicked')) {
            dayButton.classList.add('clicked');
            numberOfDaysSelected++;
        } else {
            dayButton.classList.remove('clicked');
            numberOfDaysSelected--;
        }

        // Recalculate the total cost
        calculate();
    });
});

/********* clear days *********/
clearButton.addEventListener('click', function() {
    dayButtons.forEach(function(dayButton) {
        dayButton.classList.remove('clicked');
    });

    // Reset relevant variables
    numberOfDaysSelected = 0;
    costPerDay = 35;

    // Recalculate the total cost
    calculate();
});

/********* change rate *********/
halfDayButton.addEventListener('click', function() {
    costPerDay = 20;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');

    // Recalculate the total cost
    calculate();
});

fullDayButton.addEventListener('click', function() {
    costPerDay = 35;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');

    // Recalculate the total cost
    calculate();
});

/********* calculate *********/
function calculate() {
    var totalCost = costPerDay * numberOfDaysSelected;
    calculatedCostElement.textContent = totalCost;
}
