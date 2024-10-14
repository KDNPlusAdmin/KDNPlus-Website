import { BASEURL } from "../constants/baseURL.js";

// display error via
const errElem = document.querySelector("#error");
document.addEventListener("DOMContentLoaded", function () {
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
    window.location.href = "../countdown/countdown.html";
  }
});

document.getElementById("login-btn").addEventListener("click", () => {
  const usernameEmail = document.getElementById("username-email").value;
  const password = document.getElementById("login-password").value;

  if (!usernameEmail || !password) {
    errElem.innerHTML = "Please enter email and password";
    return;
  }

  // make request to the server
  const url = `${BASEURL}/users/login`;

  async function login(usernameEmail, password) {
    const body = {
      email: usernameEmail,
      password,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const error = await res.json();
      errElem.innerHTML = error.message;
      return;
    }

    const data = await res.json();

    if (data && data.token) {
      console.log(data.token);

      // Set token in Cookie with security attributes
      const token = data.token;
      const maxAge = 60 * 60 * 24; // 1 day in seconds
      document.cookie = `token=${token}; path=/`;

      // navigate to the profile page
      window.location.href = "../countdown/countdown.html";
    } else {
      alert("Error: Unable to create OTP");
    }
  }
  login(usernameEmail, password);
});
