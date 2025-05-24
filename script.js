// Part 5: Input Validation and Initial Setup (script.js)
// Responsible Member: 5

// Reasoning: This member will focus on the initial steps of the getBuild() function: retrieving input values, 
//clearing previous results, and implementing crucial client-side input validation. 
//This ensures that invalid data is caught early, 
//preventing unnecessary API calls and providing immediate feedback to the user.

// Code to Focus On (to be moved to script.js, within getBuild()):

JavaScript

async function getBuild() {
  const budget = document.getElementById("budget").value;
  const location = document.getElementById("location").value;
  const resultsDiv = document.getElementById("results");

  // Clear previous results and messages
  resultsDiv.style.display = "none";
  resultsDiv.innerHTML = "";
  hideMessage();

  // Input validation
  if (!budget || !location) {
    showMessage("Please fill in both budget and location.", true);
    return;
  }
  if (isNaN(budget) || budget <= 0) {
    showMessage("Please enter a valid positive number for budget.", true);
    return;
  }

  showLoadingSpinner(); // Show loading spinner
