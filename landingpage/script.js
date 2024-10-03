document.addEventListener('DOMContentLoaded', () => {
  // Plan Button Selection Logic
  const planOptions = document.querySelectorAll('.plan-option');
  planOptions.forEach(option => {
    option.addEventListener('click', () => {
      planOptions.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
    });
  });

  // Movie Poster Grids (Carousel with position change)
  const movieGrids = document.querySelectorAll('.movies-grid');
  function startCarousel() {
    movieGrids.forEach(grid => {
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
  const moviePosters = document.querySelectorAll('.movie-poster');
  moviePosters.forEach(poster => {
    poster.addEventListener('click', () => {
      poster.style.transform = 'scale(1.05)';
      setTimeout(() => {
        poster.style.transform = 'scale(1)';
      }, 1000);
    });
  });

  // Toggle Movie Poster Positions
  function toggleMoviePositions() {
    movieGrids.forEach(grid => {
      const posters = Array.from(grid.querySelectorAll('.movie-poster'));
      const shuffledPosters = posters.sort(() => Math.random() - 0.5);
      shuffledPosters.forEach(poster => grid.appendChild(poster));
    });
  }
  setInterval(toggleMoviePositions, 15000);

  // Plan Section Show/Hide Logic
  document.querySelectorAll('.plan-option').forEach(button => {
    button.addEventListener('click', function() {
      const selectedPlan = this.dataset.plan;
      document.querySelectorAll('.plan-section').forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
      });
      document.querySelectorAll('.plan-option').forEach(btn => btn.classList.remove('active'));
      document.querySelector(`.${selectedPlan}-option-section`).classList.add('active');
      this.classList.add('active');
    });
  });

  // Menu Button Interaction
  const menuIcon = document.querySelector('.menu-icon');
  const header = document.querySelector('header');
  if (menuIcon) {
    menuIcon.addEventListener('click', () => {
      header.classList.toggle('active');
      document.body.classList.toggle('menu-open');
      alert('Menu clicked! Feature coming soon.');
    });
  }

  // Form Submission Handling for Email Input
  const emailInput = document.querySelector('.email-signup input');
  const getStartedButton = document.querySelector('.btn-primary');
  if (getStartedButton && emailInput) {
    getStartedButton.addEventListener('click', () => {
      const email = emailInput.value;
      if (validateEmail(email)) {
        // Display success message and redirect to signup page
        alert(`Thank you for signing up, ${email}!`);
        emailInput.value = ''; // Clear input after submission
        window.location.href = '../signup-page/signup_page.html?email=' + encodeURIComponent(email);
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }

  // Smooth Scrolling to Sections
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
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
    button.addEventListener('click', event => {
      const selectedPlan = event.target.closest('.plan').querySelector('h3').textContent;
      alert(`You have selected the ${selectedPlan} plan!`);
    });
  });

  // Interactive Avatar Personalization
  const avatarSection = document.querySelector('.avatar');
  if (avatarSection) {
    const avatarCustomizationButton = document.createElement('button');
    avatarCustomizationButton.textContent = 'Customize Your Avatar';
    avatarCustomizationButton.classList.add('btn-secondary');
    avatarSection.appendChild(avatarCustomizationButton);
    avatarCustomizationButton.addEventListener('click', () => {
      alert('Avatar customization coming soon!');
    });
  }

  // Handle Dynamic Updates for Movie Categories
  const movieCategories = document.querySelector('.movie-categories');
  if (movieCategories) {
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
  }

  // Function to Validate Email Format
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Function to Handle Pre-order Email Submission
  const preOrderButton = document.querySelector('.btn-pre-order');
  if (preOrderButton) {
    preOrderButton.addEventListener('click', () => {
      alert('Redirecting to the signup page...');
      window.location.href = '../signup-page/signup_page.html';
    });
  }

  // Populate Movie Carousels with Image Placeholders
  function populateCarousel(carouselId, imageCount) {
    const carousel = document.getElementById(carouselId);
    for (let i = 0; i < imageCount; i++) {
      const img = document.createElement('img');
      img.src = 'placeholder.png';
      img.alt = 'Movie Placeholder';
      img.addEventListener('click', () => {
        alert('More details about this movie coming soon!');
      });
      carousel.appendChild(img);
    }
  }
  populateCarousel('action-carousel', 10);
  populateCarousel('horror-carousel', 8);

  // Form Handling for Pre-order Signup
  const getStartedBtn = document.getElementById('get-started-btn');
  const emailInputField = document.getElementById('email-input');

  function submitEmail() {
    const emailInput = emailInputField.value.trim();
    if (validateEmail(emailInput)) {
      fetch('/auth/preorder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput })
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            alert('Thank you for signing up!');
            window.location.href = '../signup-page/signup_page.html';
          } else if (data.message === 'User already exists') {
            alert('This email is already registered.');
            window.location.href = '../login/login.html';
          } else {
            console.error('Pre-order failed');
          }
        })
        .catch(error => console.error('Error:', error));
    } else {
      alert('Please enter a valid email address.');
    }
  }

  if (getStartedBtn && emailInputField) {
    getStartedBtn.addEventListener('click', submitEmail);
  }

  if (emailInputField) {
    emailInputField.addEventListener('keypress', event => {
      if (event.key === 'Enter') {
        submitEmail();
      }
    });
  }
});
