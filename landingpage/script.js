document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
  // Pre-order button functionality - Direct Redirect
  const preOrderBtn = document.getElementById('preOrderBtn');
  if (preOrderBtn) {
      preOrderBtn.addEventListener('click', function() {
          // Directly navigate to the countdown page
          window.location.href = '/countdown.html';
      });
  }

  // Plan Button Selection Logic
  const planOptions = document.querySelectorAll('.plan-option');
  planOptions.forEach((option) => {
      option.addEventListener('click', () => {
          planOptions.forEach((opt) => opt.classList.remove('active'));
          option.classList.add('active');
      });
=======
  // Plan Button Selection Logic
  const planOptions = document.querySelectorAll('.plan-option');

  // Add click event listeners to each plan option
  planOptions.forEach(option => {
    option.addEventListener('click', () => {
      // Remove active class from all options
      planOptions.forEach(opt => opt.classList.remove('active'));

      // Add active class to the clicked option
      option.classList.add('active');
    });
>>>>>>> 2fd0016c14f3629c3f9524bdb32e402d4614cb2e
  });

  // Movie Poster Grids (Carousel with position change)
  const movieGrids = document.querySelectorAll('.movies-grid');
<<<<<<< HEAD
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
=======

  // Carousel effect for auto-scrolling
  function startCarousel() {
    movieGrids.forEach(grid => {
      let scrollPosition = 0;
      setInterval(() => {
        scrollPosition += 1; // Scroll slowly
        if (scrollPosition >= grid.scrollWidth - grid.clientWidth) {
          scrollPosition = 0; // Reset scroll when reaching the end
        }
        grid.scrollTo(scrollPosition, 0);
      }, 20); // Adjust this interval for speed
    });
>>>>>>> 2fd0016c14f3629c3f9524bdb32e402d4614cb2e
  }
  startCarousel();

  // Click event to enlarge the movie poster
  const moviePosters = document.querySelectorAll('.movie-poster');
<<<<<<< HEAD
  moviePosters.forEach((poster) => {
      poster.addEventListener('click', () => {
          poster.style.transform = 'scale(1.5)';
          setTimeout(() => {
              poster.style.transform = 'scale(1)');
          }, 1000);
      });
=======
  moviePosters.forEach(poster => {
    poster.addEventListener('click', () => {
      poster.style.transform = 'scale(1.05)';  // Enlarge poster when clicked
      setTimeout(() => {
        poster.style.transform = 'scale(1)';  // Return to original size after 1 second
      }, 1000);
    });
>>>>>>> 2fd0016c14f3629c3f9524bdb32e402d4614cb2e
  });

  // Toggle Movie Poster Positions
  function toggleMoviePositions() {
<<<<<<< HEAD
      movieGrids.forEach((grid) => {
          const posters = Array.from(grid.querySelectorAll('.movie-poster'));
          const shuffledPosters = posters.sort(() => Math.random() - 0.5);
          shuffledPosters.forEach((poster) => grid.appendChild(poster));
      });
=======
    movieGrids.forEach(grid => {
      const posters = Array.from(grid.querySelectorAll('.movie-poster'));
      const shuffledPosters = posters.sort(() => Math.random() - 0.5); // Shuffle posters
      shuffledPosters.forEach(poster => grid.appendChild(poster)); // Reorder them in the grid
    });
>>>>>>> 2fd0016c14f3629c3f9524bdb32e402d4614cb2e
  }
  setInterval(toggleMoviePositions, 15000);

<<<<<<< HEAD
  // Default selection for the basic plan
  const basicOption = document.querySelector('.basic-option');
  if (basicOption) {
      basicOption.classList.add('active');
  }

  // Show section based on button clicked
  document.querySelectorAll('.plan-option').forEach((button) => {
      button.addEventListener('click', (event) => {
          const selectedPlan = event.target.dataset.plan;

          document.querySelectorAll('.plan-section').forEach((section) => {
              section.style.display = 'none';
          });

          document.querySelector(`.${selectedPlan}-option-section`).style.display = 'block';
      });
=======

  ///////////////////////////////////////////////////////////////////////////////////////
  
  
  // JavaScript to show/hide the sections based on which button is clicked
  document.querySelectorAll('.plan-option').forEach(function(button) {
      button.addEventListener('click', function() {
          const selectedPlan = this.dataset.plan;
  
          // Remove 'active' class from all sections and buttons
          document.querySelectorAll('.plan-section').forEach(function(section) {
              section.classList.remove('active');
              section.classList.add('hidden');
              
          });
          document.querySelectorAll('.plan-option').forEach(function(btn) {
              btn.classList.remove('active');
          });
          
          // Add 'active' class to the selected section and button
          document.querySelector(`.${selectedPlan}-option-section`).classList.add('active');
            this.classList.add('active');
        

          
        });
        
    
  });




  // Menu Button Interaction
  const menuIcon = document.querySelector('.menu-icon');
  const header = document.querySelector('header');

  menuIcon.addEventListener('click', () => {
    header.classList.toggle('active');
    document.body.classList.toggle('menu-open'); // To handle body overflow when menu is open
    alert('Menu clicked! Feature coming soon.');
>>>>>>> 2fd0016c14f3629c3f9524bdb32e402d4614cb2e
  });

  // Form Submission Handling for Email Input
  const emailInput = document.querySelector('.email-signup input');
  const getStartedButton = document.querySelector('.btn-primary');
<<<<<<< HEAD
  if (getStartedButton) {
      getStartedButton.addEventListener('click', () => {
          const email = emailInput.value;
          if (validateEmail(email)) {
              alert(`Thank you for signing up, ${email}!`);
              emailInput.value = ''; // Clear the input field after submission
          } else {
              alert('Please enter a valid email address.');
          }
      });
  }
=======

  getStartedButton.addEventListener('click', () => {
    const email = emailInput.value;
    if (validateEmail(email)) {
      alert(`Thank you for signing up, ${email}!`);
      emailInput.value = ''; // Clear the input field after submission
    } else {
      alert('Please enter a valid email address.');
    }
  });

  // Smooth Scrolling to Sections
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const sectionID = link.getAttribute('href').substring(1);
      const section = document.getElementById(sectionID);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Dynamic Content Updates for Subscription Plans
  const planButtonsSecondary = document.querySelectorAll('.btn-secondary');
  planButtonsSecondary.forEach(button => {
    button.addEventListener('click', (event) => {
      const selectedPlan = event.target.closest('.plan').querySelector('h3').textContent;
      alert(`You have selected the ${selectedPlan} plan!`);
    });
  });

  // Interactive Avatar Personalization
  const avatarSection = document.querySelector('.avatar');
  const avatarCustomizationButton = document.createElement('button');
  avatarCustomizationButton.textContent = 'Customize Your Avatar';
  avatarCustomizationButton.classList.add('btn-secondary');
  avatarSection.appendChild(avatarCustomizationButton);

  avatarCustomizationButton.addEventListener('click', () => {
    alert('Avatar customization coming soon!');
  });

  // Handle Dynamic Updates for Movie Categories
  const movieCategories = document.querySelector('.movie-categories');
  const categories = ['Action', 'Horror', 'Comedy', 'Drama', 'Thriller'];

  categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.classList.add('category');
    categoryElement.textContent = category;
    categoryElement.addEventListener('click', () => {
      alert(`You selected the ${category} category.`);
    });
    movieCategories.appendChild(categoryElement);
  });
>>>>>>> 2fd0016c14f3629c3f9524bdb32e402d4614cb2e

  // Function to Validate Email Format
  function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  }
<<<<<<< HEAD
});
=======

  // Populate Movie Carousels with Image Placeholders
      function populateCarousel(carouselId, imageCount) {
          const carousel = document.getElementById(carouselId);
          for (let i = 0; i < imageCount; i++) {
              const img = document.createElement('img');
              img.src = 'placeholder.png'; // Replace with your image source
              img.alt = 'Movie Placeholder';
              img.addEventListener('click', () => {
                  alert('More details about this movie coming soon!');
              });
              carousel.appendChild(img);
          }
      }

      populateCarousel('action-carousel', 10); // Populate Action Carousel with 10 images
      populateCarousel('horror-carousel', 8); // Populate Horror Carousel with 8 images
  });


  //////////////////////////////////////////////////////////////////////////////

// ......................................................................
////////////////////////////////////////////////////////////////////////////







>>>>>>> 2fd0016c14f3629c3f9524bdb32e402d4614cb2e
