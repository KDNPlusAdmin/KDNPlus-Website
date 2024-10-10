import { BASEURL } from "../constants/baseURL.js";

// Make sure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("Base URL: ", BASEURL);

  const form = document.getElementById("signup-form");
  form.addEventListener("submit", saveUserInfo);
});

async function saveUserInfo(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById("username").value;
  const firstName = document.getElementById("first-name").value;
  const middleName = document.getElementById("middle-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("email: ", email, "username: ", username, "password: ", password);

  // Validate required fields
  if (!email || !password) {
    alert("Missing email or password");
    return;
  }

  // Store the data in localStorage
  localStorage.setItem("username", username);
  localStorage.setItem("firstName", firstName);
  localStorage.setItem("middleName", middleName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  // Define the body object to be sent
  const body = {
    username,
    firstName,
    middleName,
    lastName,
    email,
    password,
  };

  try {
    // send email & password to the db call
    const url = `${BASEURL}/users/create-otp`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorData = await res.json();
      const errorMsg = errorData.message;
      alert(errorMsg); // Show error message
      return;
    }

    const data = await res.json();
    console.log("data", data);

    // Navigate based on result
    if (data.status === "success") {
      window.location.href = "../otp/otp.html";
    } else {
      alert("Error: Unable to create OTP");
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    alert("An error occurred. Please try again later.");
  }
}
