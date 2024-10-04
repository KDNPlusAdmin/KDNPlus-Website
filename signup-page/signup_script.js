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

////////////////////////////////////////////////////////////

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
});
