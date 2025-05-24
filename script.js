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
