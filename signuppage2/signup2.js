document.addEventListener("DOMContentLoaded", function () {  
  const basicPrice = document.getElementById("basic-price");  
  const standardPrice = document.getElementById("standard-price");  
  const premiumPrice = document.getElementById("premium-price");  

  // Plan details  
  const basicDetails = document.querySelector(".plan-card:nth-child(1) .plan-details");  
  const standardDetails = document.querySelector(".plan-card:nth-child(2) .plan-details");  
  const premiumDetails = document.querySelector(".plan-card:nth-child(3) .plan-details");  

  // Event Listeners for switching plans  
  document.getElementById("weekly").addEventListener("click", function () {  
    updatePricingAndDetails("weekly");  
    setActiveButton(this);  
  });  

  document.getElementById("monthly").addEventListener("click", function () {  
    updatePricingAndDetails("monthly");  
    setActiveButton(this);  
  });  

  document.getElementById("yearly").addEventListener("click", function () {  
    updatePricingAndDetails("yearly");  
    setActiveButton(this);  
  });  

  // Function to update both the pricing and the card details  
  function updatePricingAndDetails(period) {  
    if (period === "weekly") {  
      // Update Prices  
      basicPrice.textContent = "₦1200/week";  
      standardPrice.textContent = "";  
      premiumPrice.textContent = "";  

      // Update Details for Weekly Plans  
      basicDetails.innerHTML = `  
        <li>480p streaming (SD quality)</li>  
        <li>Mobile-only access</li>  
        <li>Offline downloads not available</li>  
        <li>Ad-supported</li>  
      `;  

      standardDetails.innerHTML = `  
       <li>
                      <img src="mockup.png" alt="Subscription Image" style="max-height: 10rem; margin-left: 42px;">  
              
                                  </li>  
      `;  

      premiumDetails.innerHTML = `  
       <li>
                      <img src="mockup.png" alt="Subscription Image" style="max-height: 10rem; margin-left: 42px;">  
              
                                  </li>
      `;  

    } else if (period === "monthly") {  
      // Update Prices  
      basicPrice.textContent = "₦2500/month";  
      standardPrice.textContent = "₦5500/month";  
      premiumPrice.textContent = "₦8500/month";  

      // Update Details for Monthly Plans  
      basicDetails.innerHTML = `  
        <li>480p streaming (SD quality)</li>  
        <li>Mobile-only access</li>  
        <li>Limited offline downloads</li>  
        <li>Ad-supported</li>  
      `;  

      standardDetails.innerHTML = `  
        <li>720p streaming (HD quality)</li>  
        <li>1 screen</li>  
        <li>Offline downloads available</li>  
      `;  

      premiumDetails.innerHTML = `  
        <li>1080p/4K streaming (Ultra HD quality)</li>  
        <li>4 screens</li>  
        <li>Offline downloads available</li>  
        <li>Early access to exclusive content</li>  
      `;  

    } else if (period === "yearly") {  
      // Update Prices  
      basicPrice.textContent = "₦25000/year";  
      standardPrice.textContent = "₦60000/year";  
      premiumPrice.textContent = "₦90000/year";  

      // Update Details for Yearly Plans  
      basicDetails.innerHTML = `  
        <li>480p streaming (SD quality)</li>  
        <li>Mobile-only access</li>  
        <li>Unlimited offline downloads</li>  
        <li>No ads</li>  
      `;  

      standardDetails.innerHTML = `  
        <li>720p streaming (HD quality)</li>  
        <li>2 screens</li>  
        <li>Unlimited offline downloads</li>  
      `;  

      premiumDetails.innerHTML = `  
        <li>1080p/4K streaming (Ultra HD quality)</li>  
        <li>4 screens</li>  
        <li>Unlimited offline downloads</li>  
        <li>Early access to exclusive content</li>  
        <li>Priority customer support</li>  
      `;  
    }  
  }  

  // Function to handle active toggle button styling  
  function setActiveButton(activeButton) {  
    document.querySelectorAll(".toggle-btn").forEach((btn) => {  
      btn.classList.remove("active");  
    });  
    activeButton.classList.add("active");  
  }  
});  

// ..............................PAYMENT PLAN..................   
function choosePlan(planName) {  
  // Retrieve the price dynamically based on the current plan price displayed  
  let price;  
  if (planName === 'Basic') {  
      price = document.getElementById("basic-price").textContent;  
  } else if (planName === 'Standard') {  
      price = document.getElementById("standard-price").textContent;  
  } else if (planName === 'Premium') {  
      price = document.getElementById("premium-price").textContent;  
  }  

  // Store the chosen plan in localStorage  
  localStorage.setItem('chosenPlan', planName);  
  localStorage.setItem('chosenPlanPrice', price);  
  // Navigate to the next page (Final Step)  
  window.location.href = '../signup3/signup3.html';   
}