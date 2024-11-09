// script.js with validation

function checkForm() {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    

    const user = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;  // Basic email regex
    const passwordMinLength = 6;  // Minimum password length

    // Check if all fields are filled and the email and password are valid
    if (user && userPattern.test(user) && password.length >= passwordMinLength) {
        document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('submit').disabled = true;
    }
}

// Add event listeners to the input fields
document.getElementById('user').addEventListener('input', checkForm);
document.getElementById('password').addEventListener('input', checkForm);

