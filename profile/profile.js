import { BASEURL } from "../constants/baseURL.js";

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
  if (!token) {
    window.location.href = "../signuppage2/signup2.html";
  }
  async function getProfile() {
    const url = `${BASEURL}/prelaunch/user-profile`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const data = await res.json();
    console.log("data", data);

    if (data && data.status === "success") {
      // Access the first object in the 'data' array
      const { username, email, userPlan: plan } = data.data[0]; // data.data is an array

      // Populate the HTML elements
      document.getElementById(
        "username"
      ).textContent = `Hello ${username.toUpperCase()}`;
      document.getElementById("email").textContent = `Email: ${email}`;
      function formatPlanString(planString) {
        // Split the input string at the underscore
        const [planName, planPeriod] = planString.split("_");

        // Capitalize the first letter of the plan period (optional)
        const formattedPeriod =
          planPeriod.charAt(0).toUpperCase() + planPeriod.slice(1);

        // Return the formatted string
        return `${planName} (${planPeriod})`;
      }

      const formattedString = formatPlanString(plan);
      document.getElementById("plan").textContent = `Plan: ${
        formattedString ?? "Choose a Plan"
      }`;
    }
  }

  getProfile();

  async function logout() {
    const url = `${BASEURL}/users/logout`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const data = await res.json();

    if (data && data.status === "success") {
      // Remove the token Cookie
      document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
      window.location.href = "../signuppage2/signup2.html";
    }
  }

  document.getElementById("logout").addEventListener("click", function () {
    logout();
  });
});
