// authentication.js
// authentication.js

// Sample Map to hold user credentials
const userCredentials = new Map();
userCredentials.set("user123", "password123");
userCredentials.set("admin", "admin");
userCredentials.set("guest", "guest123");

// Function to authenticate username and password
function authenticate() {
    // Get the values from the username and password fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username exists in the Map and if the password matches
    if (userCredentials.has(username) && userCredentials.get(username) === password) {
        // If valid, redirect to cloudGaming.html
        window.location.href = "cloudGaming.html";
    } else {
        // If invalid, display an error message
        alert("Invalid username or password. Please try again.");
    }
}

// Attach the function to the login button click event
document.getElementById("loginButton").addEventListener("click", authenticate);
