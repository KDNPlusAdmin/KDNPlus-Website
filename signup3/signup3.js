$(document).ready(function () {
  // Fetch user info on page load
  $.ajax({
    type: "GET",
    url: "/get_user_info",
    success: function (data) {
      $("#user-info").text(
        "Name: " +
          data.name +
          ", Email: " +
          data.email +
          ", Username: " +
          data.username
      );
    },
  });

  // Function to format the plan string
  function formatPlanString(planString) {
    // Split the input string at the underscore
    const [planName, planPeriod] = planString.split("_");

    // Return the formatted string
    return `${planName} (${planPeriod})`;
  }

  // Display stored plan information
  const chosenPlan = localStorage.getItem("chosenPlan");
  const chosenPlanPrice = localStorage.getItem("chosenPlanPrice");

  // Apply formatting if the chosen plan is in the format 'Plan_period'
  if (chosenPlan && chosenPlan.includes("_")) {
    const formattedPlan = formatPlanString(chosenPlan);
    $("#plan-info").text(
      "Selected Plan: " + formattedPlan + " - " + chosenPlanPrice
    );
  } else {
    $("#plan-info").text(
      "Selected Plan: " + chosenPlan + " - " + chosenPlanPrice
    );
  }

  // Handle form submission (commented out code remains the same)
});
