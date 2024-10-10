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

  // Display stored plan information
  const chosenPlan = localStorage.getItem("chosenPlan");
  const chosenPlanPrice = localStorage.getItem("chosenPlanPrice");
  $("#plan-info").text(
    "Selected Plan: " + chosenPlan + " - " + chosenPlanPrice
  );

  // Handle form submission
  // $('#submitPayment').on('click', function(e) {
  //     e.preventDefault();
  //     // Collect payment information
  //     const fullName = $('#full-name').val();
  //     const cardDetails = $('#card-details').val();
  //     const expiry = $('#expiry').val();
  //     const cvv = $('#cvv').val();
  //     const address = $('#location').val();

  //     // Here you would typically send this information to your server for processing
  //     console.log('Payment Info: ', { fullName, cardDetails, expiry, cvv, address });

  //     // Simulate successful payment processing
  //     alert('Payment submitted successfully!');

  //     // Clear stored plan data
  //     localStorage.removeItem('chosenPlan');
  //     localStorage.removeItem('chosenPlanPrice');

  //     // Redirect or further actions after payment
  //     // window.location.href = 'thank_you.html'; // Uncomment for redirection after payment
  // });
});
