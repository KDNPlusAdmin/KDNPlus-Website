document.addEventListener('DOMContentLoaded', () => {
  const getStartedButton = document.getElementById('getStartedBtn');
  const emailInputField = document.getElementById('email');
  const preOrderButton = document.getElementById('preOrderBtn');

  // Function to send email to the backend for pre-order
  function submitEmail() {
    const emailInput = emailInputField.value.trim();

    if (validateEmail(emailInput)) {
      fetch('/auth/preorder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Thank you for signing up!');
        } else if (data.message === 'User already exists') {
          alert('This email is already registered.');
        } else {
          console.error('Pre-order failed');
        }
      })
      .catch(error => console.error('Error:', error));
    } else {
      alert('Please enter a valid email address.');
    }
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
      // Directly navigate to the countdown page
      window.location.href = '/countdown.html';
    });
  }

  // Function to validate email format
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
