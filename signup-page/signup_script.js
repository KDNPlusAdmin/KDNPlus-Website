import { BASEURL } from "../constants/baseURL.js";

// TODO: Display server error messages
const errElem = document.querySelector("#error");
// Make sure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("Base URL: ", BASEURL);

  // Function to get a specific cookie by name
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  // navigate to the next page if the token Cookie is already set.
  // User is already logged in
  const token = getCookie("token");
  if (token) {
    window.location.href = "../signuppage2/signup2.html";
  }

  const form = document.getElementById("signup-form");
  form.addEventListener("submit", saveUserInfo);
});

async function saveUserInfo(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById("username").value;
  const firstName = document.getElementById("first-name").value;
  // const middleName = document.getElementById("middle-name").value;
  // const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("email: ", email, "username: ", username, "password: ", password);

  // Validate required fields
  if (!email || !password) {
    errElem.innerHTML = "Please enter email and password";
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
    // Make the POST request to pre-launch endpoint to insert the user into the Users table
    const url = `${BASEURL}/prelaunch/register`;

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
      errElem.innerHTML = errorMsg;
      return;
    }

    const data = await res.json();
    console.log("data", data);

    // Navigate based on result
    if (data.status === "success") {
      console.log(data.token);

      // Set token in Cookie with security attributes
      const token = data.token;
      const maxAge = 60 * 60 * 24; // 1 day in seconds
      document.cookie = `token=${token}; path=/`;

      // navigate to the plans page
      location.href = "../signuppage2/signup2.html";
    } else {
      errElem.innerHTML = "Error: Unable to create OTP";
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    errElem.innerHTML = "An error occurred. Please try again later.";
  }
}
