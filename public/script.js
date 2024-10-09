document.addEventListener('DOMContentLoaded', () => {
  const getStartedButton = document.getElementById('getStartedBtn');
  const preOrderButton = document.getElementById('preOrderBtn');

  // Handle "Get Started" button click event
  if (getStartedButton) {
    getStartedButton.addEventListener('click', () => {
      const emailInput = document.getElementById('email').value.trim();

      // Validate Email Format
      if (validateEmail(emailInput)) {
        // Send email to backend for pre-order
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
