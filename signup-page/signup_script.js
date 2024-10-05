/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */

// Function to handle page transitions
function goToPage(pageNumber) {
  const currentPage = document.querySelector(".page.active");
  const nextPage = document.querySelector(`#page-${pageNumber}`);

  // Apply the slide-out animation to the current page
  currentPage.classList.add("slide-out");

  // Remove the active class after the slide-out animation finishes
  setTimeout(() => {
    currentPage.classList.remove("active", "slide-out");
  }, 600); // Match the transition duration

  // Add the slide-in animation to the next page
  nextPage.classList.add("active", "slide-in");
  setTimeout(() => {
    nextPage.classList.remove("slide-in");
  }, 600); // Match the transition duration
}

// Function to handle plan selection and send to the backend
function selectPlan(userId, planId, planName, planPrice) {
  const selectedPlan = {
    UserId: userId,
    PlanId: planId,
    PlanName: planName,
    PlanPrice: planPrice,
  };

  $.ajax({
    url: "/api/subscription-selection/select-plan",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(selectedPlan),
    success: function (response) {
      console.log("Subscription Plan Selected Successfully:", response);
      // Redirect to payment page or next step after successful selection
      goToPage(3);
    },
    error: function (error) {
      console.error("Error Selecting Subscription Plan:", error);
    },
  });
}

// Function to handle Stripe payment submission
async function handleStripePayment(event) {
  event.preventDefault(); // Prevent form submission

  // Create an instance of Stripe using your Publishable Key
  const stripe = Stripe("YOUR_STRIPE_PUBLIC_KEY"); // Replace with your actual Stripe publishable key

  // Collect full name from the form
  const fullName = document.querySelector("#full-name").value;

  try {
    // Create a PaymentMethod using Stripe's client library
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: fullName,
      },
    });

    if (error) {
      document.getElementById("card-errors").textContent = error.message;
    } else {
      // Send the PaymentMethod ID and other details to the backend to create a payment intent
      $.ajax({
        url: "/api/payment/create-payment",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
          amount: 5000, // Replace with the selected plan's price
          currency: "ngn", // Currency can be customized
          paymentMethodId: paymentMethod.id,
        }),
        success: function (response) {
          console.log("Payment successful:", response);
          alert("Payment Successful! Your subscription has been activated.");
          // Redirect to another page or show a success message
        },
        error: function (error) {
          console.error("Error processing payment:", error);
          alert("Payment Failed. Please check your card details and try again.");
        },
      });
    }
  } catch (error) {
    console.error("Error creating Payment Method:", error);
    alert("Invalid card details. Please check and try again.");
  }
}

// Set the first page to be visible by default
document.querySelector("#page-1").classList.add("active");

$(document).ready(function () {
  let currentPlanIndex = 1;
  const totalPlans = 3;
  const animationDuration = 800; // 800ms animation duration (0.8 seconds)

  // Function to switch between plans with fade animation
  function switchPlan() {
    // Fade out the current plan
    $(`#plan-${currentPlanIndex}`).fadeOut(animationDuration, function () {
      // Increment the index, and wrap back to 1 if we exceed total plans
      currentPlanIndex = (currentPlanIndex % totalPlans) + 1;

      // Fade in the next plan
      $(`#plan-${currentPlanIndex}`).fadeIn(animationDuration);
    });
  }

  // On clicking the change plan button, switch plans with animation
  $(".change-plan-btn").click(function () {
    switchPlan();
  });

  // Default behavior: show the first plan by default
  $("#plan-1").show(); // Show the first plan on page load

  // Handle Basic Plan selection
  $("#plan-1 .next-btn").click(function () {
    const userId = "12345"; // Replace with the actual logged-in user ID
    selectPlan(userId, "plan-1", "Basic Plan", 2700);
  });

  // Handle Standard Plan selection
  $("#plan-2 .next-btn").click(function () {
    const userId = "12345"; // Replace with the actual logged-in user ID
    selectPlan(userId, "plan-2", "Standard Plan", 3500);
  });

  // Handle Premium Plan selection
  $("#plan-3 .next-btn").click(function () {
    const userId = "12345"; // Replace with the actual logged-in user ID
    selectPlan(userId, "plan-3", "Premium Plan", 5000);
  });

  // Initialize Stripe Elements
  const stripe = Stripe("YOUR_STRIPE_PUBLIC_KEY"); // Replace with your actual Stripe public key
  const elements = stripe.elements();
  const cardElement = elements.create("card");
  cardElement.mount("#card-element");

  // Handle payment submission on the Payment Details page
  const form = document.getElementById("payment-form");
  form.addEventListener("submit", handleStripePayment);
});
