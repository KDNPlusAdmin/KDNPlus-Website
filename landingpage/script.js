document.addEventListener('DOMContentLoaded', () => {
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
  });

  // Movie Poster Grids (Carousel with position change)
  const movieGrids = document.querySelectorAll('.movies-grid');
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

  // Click event to enlarge the movie poster
  const moviePosters = document.querySelectorAll('.movie-poster');
  moviePosters.forEach((poster) => {
      poster.addEventListener('click', () => {
          poster.style.transform = 'scale(1.5)';
          setTimeout(() => {
              poster.style.transform = 'scale(1)');
          }, 1000);
      });
  });

  // Toggle Movie Poster Positions
  function toggleMoviePositions() {
      movieGrids.forEach((grid) => {
          const posters = Array.from(grid.querySelectorAll('.movie-poster'));
          const shuffledPosters = posters.sort(() => Math.random() - 0.5);
          shuffledPosters.forEach((poster) => grid.appendChild(poster));
      });
  }
  setInterval(toggleMoviePositions, 15000);

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
  });

  // Form Submission Handling for Email Input
  const emailInput = document.querySelector('.email-signup input');
  const getStartedButton = document.querySelector('.btn-primary');
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

  // Function to Validate Email Format
  function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  }
});
