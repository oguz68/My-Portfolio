let balance = 1000;  // Initial balance

// Function to deposit money
function deposit() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
        displayMessage("Please enter a valid amount to deposit.", "error");
    } else {
        balance += amount;
        updateBalance();
        displayMessage(`You have successfully deposited £${amount}.`, "success");
    }
}

// Function to withdraw money
function withdraw() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
        displayMessage("Please enter a valid amount to withdraw.", "error");
    } else if (amount > balance) {
        displayMessage("Insufficient funds. Please try a smaller amount.", "error");
    } else {
        balance -= amount;
        updateBalance();
        displayMessage(`You have successfully withdrawn £${amount}.`, "success");
    }
}

// Update the balance display
function updateBalance() {
    document.getElementById("balance").textContent = `£${balance}`;
}

// Display success or error messages
function displayMessage(message, type) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.style.color = type === "error" ? "red" : "green";
}