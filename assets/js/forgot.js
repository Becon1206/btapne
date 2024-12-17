// Back button functionality
function goBack() {
    window.history.back();
}

// Handle form submission
document.getElementById('forgotPasswordForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting

    const email = e.target.querySelector('input[type="email"]').value;

    if (validateEmail(email)) {
        alert('Password reset link has been sent to your email!');
    } else {
        alert('Please enter a valid email address.');
    }
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Back to Sign In button
function backToSignIn() {
    window.location.href = './login.html'; // Adjust the path as needed
}
