document.addEventListener('DOMContentLoaded', () => {
  // Elements from the new HTML structure
  const getStartedButton = document.getElementById('get-started-btn');
  const emailInputField = document.getElementById('email-input');
  const preOrderButton = document.querySelector('.btn-pre-order');

  // Function to handle email submission
  function submitEmail() {
    const emailInput = emailInputField.value.trim();

    if (validateEmail(emailInput)) {
      // Simulating API call to check if the email exists
      fetch('/auth/preorder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput })
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            alert('Thank you for signing up!');
            // Redirect to signup page if success
            window.location.href = '../signup/signup.html';
          } else if (data.message === 'User already exists') {
            alert('This email is already registered.');
            // Redirect to login page if user already exists
            window.location.href = '../login/login.html';
          } else {
            console.error('Pre-order failed');
          }
        })
        .catch(error => console.error('Error:', error));
    } else {
      alert('Please enter a valid email address.');
    }
  }

  // Function to validate email format
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Handle "Get Started" button click event
  if (getStartedButton) {
    getStartedButton.addEventListener('click', submitEmail);
  }

  // Handle Enter key press on the email input field
  if (emailInputField) {
    emailInputField.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        submitEmail();
      }
    });
  }

  // Handle "Pre-order" button click event
  if (preOrderButton) {
    preOrderButton.addEventListener('click', () => {
      // Navigate directly to the countdown page
      window.location.href = '../countdown/countdown.html';
    });
  }
});
