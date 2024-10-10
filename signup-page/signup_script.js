function saveUserInfo(event) {  
  event.preventDefault(); // Prevent default form submission  
  const username = document.getElementById('username').value;  
  const firstName = document.getElementById('first-name').value;  
  // const middleName = document.getElementById('middle-name').value;  
  // const lastName = document.getElementById('last-name').value;  
  const email = document.getElementById('email').value;  
  const password = document.getElementById('password').value;  

  // Store the data in localStorage  
  localStorage.setItem('username', username);  
  localStorage.setItem('firstName', firstName);  
  // localStorage.setItem('middleName', middleName);  
  // localStorage.setItem('lastName', lastName);  
  localStorage.setItem('email', email);  
  localStorage.setItem('password', password);  

  // Navigate to the next page  
  window.location.href = '../signuppage2/signup2.html'; // next page  
}  