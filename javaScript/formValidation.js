console.log("formValidation.js loaded");

var form = document.getElementById('strawberryContactForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Form submitted");

    var name = form.querySelector('.name').value;
    console.log("Name: " + name);
    var email = form.querySelector('.email').value;
    console.log("Email: " + email);
    var message = form.querySelector('.message').value;
    console.log("Message: " + message);

    // Remove existing error messages
    var existingErrors = form.querySelectorAll('.error');
    existingErrors.forEach(function(error) {
        error.remove();
    });

    var hasError = false;

    if (!name) {
        var error = document.createElement('div');
        error.className = 'error';
        error.textContent = 'Name is required';
        form.querySelector('.name').after(error);
        hasError = true;
    }

    if (!email) {
        var error = document.createElement('div');
        error.className = 'error';
        error.textContent = 'Email is required';
        form.querySelector('.email').after(error);
        hasError = true;
    }

    if (!message) {
        var error = document.createElement('div');
        error.className = 'error';
        error.textContent = 'Message is required';
        form.querySelector('.message').after(error);
        hasError = true;
    }

    if (!hasError) {
        // display success message on th top of the form
        var success = document.createElement('div');
        success.className = 'success';
        success.textContent = 'Message sent successfully!';
        form.prepend(success);
        form.reset();

    }
});

// Add input event listeners to remove error messages when the user types into the fields
form.querySelector('.name').addEventListener('input', removeError);
form.querySelector('.email').addEventListener('input', removeError);
form.querySelector('.message').addEventListener('input', removeError);

function removeError(event) {
    var error = event.target.parentNode.querySelector('.error');
    if (error && event.target.value) {
        error.remove();
    }
}