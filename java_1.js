document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    let errorMessages = [];

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validation
    if (username === '') {
        errorMessages.push("Username is required.");
    }

    if (email === '' || !validateEmail(email)) {
        errorMessages.push("Valid email is required.");
    }

    if (phone === '' || !/^\d{10}$/.test(phone)) {
        errorMessages.push("Phone number must be 10 digits.");
    }

    if (password === '' || !validatePassword(password)) {
        errorMessages.push("Password must be at least 7 characters long, contain at least one uppercase letter, one digit, and one special character (&, $, #, @).");
    }

    if (confirmPassword !== password) {
        errorMessages.push("Passwords do not match.");
    }

    if (errorMessages.length > 0) {
        document.getElementById('errorMessages').innerHTML = errorMessages.join('<br>');
    } else {
        document.getElementById('errorMessages').innerHTML = "Form submitted successfully!";
    }
});

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,3}$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@])[A-Za-z\d&$#@]{7,}$/;
    return passwordPattern.test(password);
}
