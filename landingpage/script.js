document.addEventListener("DOMContentLoaded", () => {
  // Plan Button Selection Logic




  // Movie Poster Grids (Carousel with position change)
  const movieGrids = document.querySelectorAll(".movies-grid");
  function startCarousel() {
    movieGrids.forEach((grid) => {
      let scrollPosition = 0;
      setInterval(() => {
        scrollPosition += 1;
        if (scrollPosition >= grid.scrollWidth - grid.clientWidth) {
          scrollPosition = 0;
        }
        grid.scrollTo(scrollPosition, 0);
      }, 20);
    });
  }
  startCarousel();

  // Enlarge movie poster on click
  const moviePosters = document.querySelectorAll(".movie-poster");
  moviePosters.forEach((poster) => {
    poster.addEventListener("click", () => {
      poster.style.transform = "scale(1.05)";
      setTimeout(() => {
        poster.style.transform = "scale(1)";
      }, 1000);
    });
  });

  // Toggle Movie Poster Positions
  function toggleMoviePositions() {
    movieGrids.forEach((grid) => {
      const posters = Array.from(grid.querySelectorAll(".movie-poster"));
      const shuffledPosters = posters.sort(() => Math.random() - 0.5);
      shuffledPosters.forEach((poster) => grid.appendChild(poster));
    });
  }
  setInterval(toggleMoviePositions, 15000);

  // Plan Section Show/Hide Logic
 




  // Menu Button Interaction
  const menuIcon = document.querySelector(".menu-icon");
  const header = document.querySelector("header");
  if (menuIcon) {
    menuIcon.addEventListener("click", () => {
      header.classList.toggle("active");
      document.body.classList.toggle("menu-open");
      alert("Menu clicked! Feature coming soon.");
    });
  }

  // Form Submission Handling for Email Input
  const emailInput = document.querySelector(".email-signup input");
  const getStartedButton = document.querySelector(".btn-primary");
  if (getStartedButton && emailInput) {
    getStartedButton.addEventListener("click", () => {
      const email = emailInput.value;
      if (validateEmail(email)) {
        // Display success message and redirect to signup page
        alert(`Thank you for signing up, ${email}!`);
        emailInput.value = ""; // Clear input after submission
        window.location.href =
          "../signup-page/signup_page.html?email=" + encodeURIComponent(email);
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }

  // Smooth Scrolling to Sections
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const sectionID = link.getAttribute("href").substring(1);
      const section = document.getElementById(sectionID);
      if (section) {
        section.scrollIntoView({behavior: "smooth"});
      }
    });
  });

  // Dynamic Content Updates for Subscription Plans
  const planButtonsSecondary = document.querySelectorAll(".btn-secondary");
  planButtonsSecondary.forEach((button) => {
    button.addEventListener("click", (event) => {
      const selectedPlan = event.target
        .closest(".plan")
        .querySelector("h3").textContent;
      alert(`You have selected the ${selectedPlan} plan!`);
    });
  });

  // Interactive Avatar Personalization
  const avatarSection = document.querySelector(".avatar");
  if (avatarSection) {
    const avatarCustomizationButton = document.createElement("button");
    avatarCustomizationButton.textContent = "Customize Your Avatar";
    avatarCustomizationButton.classList.add("btn-secondary");
    avatarSection.appendChild(avatarCustomizationButton);
    avatarCustomizationButton.addEventListener("click", () => {
      alert("Avatar customization coming soon!");
    });
  }

  // Handle Dynamic Updates for Movie Categories
  const movieCategories = document.querySelector(".movie-categories");
  if (movieCategories) {
    const categories = ["Action", "Horror", "Comedy", "Drama", "Thriller"];
    categories.forEach((category) => {
      const categoryElement = document.createElement("div");
      categoryElement.classList.add("category");
      categoryElement.textContent = category;
      categoryElement.addEventListener("click", () => {
        alert(`You selected the ${category} category.`);
      });
      movieCategories.appendChild(categoryElement);
    });
  }

  // Function to Validate Email Format
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Function to Handle Pre-order Email Submission
  const preOrderButton = document.querySelector(".btn-pre-order");
  if (preOrderButton) {
    preOrderButton.addEventListener("click", () => {
      alert("Redirecting to the signup page...");
      window.location.href = "../signup-page/signup_page.html";
    });
  }

  // Populate Movie Carousels with Image Placeholders
  function populateCarousel(carouselId, imageCount) {
    const carousel = document.getElementById(carouselId);
    for (let i = 0; i < imageCount; i++) {
      const img = document.createElement("img");
      img.src = "placeholder.png";
      img.alt = "Movie Placeholder";
      img.addEventListener("click", () => {
        alert("More details about this movie coming soon!");
      });
      carousel.appendChild(img);
    }
  }
  populateCarousel("action-carousel", 10);
  populateCarousel("horror-carousel", 8);

  // Form Handling for Pre-order Signup
  const getStartedBtn = document.getElementById("get-started-btn");
  const emailInputField = document.getElementById("email-input");

  function submitEmail() {
    const emailInput = emailInputField.value.trim();
    if (validateEmail(emailInput)) {
      fetch("/auth/preorder", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: emailInput}),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Thank you for signing up!");
            window.location.href = "../signup-page/signup_page.html";
          } else if (data.message === "User already exists") {
            alert("This email is already registered.");
            window.location.href = "../login/login.html";
          } else {
            console.error("Pre-order failed");
          }
        })
        .catch((error) => console.error("Error:", error));
    } else {
      alert("Please enter a valid email address.");
    }
  }

  if (getStartedBtn && emailInputField) {
    getStartedBtn.addEventListener("click", submitEmail);
  }

  if (emailInputField) {
    emailInputField.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        submitEmail();
      }
    });
  }

});




  // handling the movie plans selection ..................
  
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
                        <img src="../signuppage2/mockup.png" alt="Subscription Image" style="max-height: 15rem; margin-left: 42px;">  
                
                                    </li>  
        `;  
  
        premiumDetails.innerHTML = `  
         <li>
                        <img src="../signuppage2/mockup.png" alt="Subscription Image" style="max-height: 15rem; margin-left: 42px;">  
                
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
          
                    <button class="choose-plan-btn " onclick="choosePlan('Standard')" style="margin-top: 85px;">Choose Plan</button>    

        `;  
  
        premiumDetails.innerHTML = `  
          <li>1080p/4K streaming (Ultra HD quality)</li>  
          <li>4 screens</li>  
          <li>Offline downloads available</li>  
          <li>Early access to exclusive content</li>
          
                              <button class="choose-plan-btn " onclick="choosePlan('Premium')"  style="margin-top: 42px;">Choose Plan</button>  

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
          
                              <button class="choose-plan-btn s2" onclick="choosePlan('Standard')" style="margin-top: 85px;">Choose Plan</button>    

        `;  
  
        premiumDetails.innerHTML = `  
          <li>1080p/4K streaming (Ultra HD quality)</li>  
          <li>4 screens</li>  
          <li>Unlimited offline downloads</li>  
          <li>Early access to exclusive content</li>  
          <li>Priority customer support</li>
          
                              <button class="choose-plan-btn " onclick="choosePlan('Premium')" style="margin-top: 0px;">Choose Plan</button>  

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
    window.location.href = '../signup-page/signup_page.html';   
  }









