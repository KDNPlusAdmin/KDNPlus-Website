document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Form Submitted');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // TODO: Add form submission logic (e.g., AJAX request)

    // Reset form after submission
    document.getElementById('contactForm').reset();
});
