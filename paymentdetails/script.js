// Example JavaScript for handling subscription actions
document.querySelector('.subscribe-btn').addEventListener('click', function() {
    alert('Subscription confirmed!');
});

$(document).ready(function() {
    let currentPlanIndex = 1;
    const totalPlans = 3;

    // Function to switch between plans
    function switchPlan() {
        // Hide current plan
        $(`#plan-${currentPlanIndex}`).hide();

        // Increment the index, and wrap back to 1 if we exceed total plans
        currentPlanIndex = (currentPlanIndex % totalPlans) + 1;

        // Show the next plan
        $(`#plan-${currentPlanIndex}`).show();
    }

    // On clicking the change plan button, switch plans
    $(".change-plan-btn").click(function() {
        switchPlan();
    });
});
