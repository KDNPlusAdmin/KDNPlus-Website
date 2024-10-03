/* eslint-disable no-undef */
// Example JavaScript for handling subscription actions
document.querySelector('.subscribe-btn').addEventListener('click', function() {
    alert('Subscription confirmed!');
});

$(document).ready(function() {
    let currentPlanIndex = 1;
    const totalPlans = 3;
    const animationDuration = 800; // 800ms animation duration (0.8 seconds)

    // Function to switch between plans with fade animation
    function switchPlan() {
        // Fade out the current plan
        $(`#plan-${currentPlanIndex}`).fadeOut(animationDuration, function() {
            // Increment the index, and wrap back to 1 if we exceed total plans
            currentPlanIndex = (currentPlanIndex % totalPlans) + 1;

            // Fade in the next plan
            $(`#plan-${currentPlanIndex}`).fadeIn(animationDuration);
        });
    }

    // On clicking the change plan button, switch plans with animation
    $(".change-plan-btn").click(function() {
        switchPlan();
    });
});