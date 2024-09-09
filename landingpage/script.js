document.addEventListener('DOMContentLoaded', () => {
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
    });

    // Movie Poster Grids (Carousel with position change)
    const movieGrids = document.querySelectorAll('.movies-grid');

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
    }

    startCarousel();

    // Click event to enlarge the movie poster
    const moviePosters = document.querySelectorAll('.movie-poster');
    moviePosters.forEach(poster => {
        poster.addEventListener('click', () => {
            poster.style.transform = 'scale(1.5)';  // Enlarge poster when clicked
            setTimeout(() => {
                poster.style.transform = 'scale(1)';  // Return to original size after 1 second
            }, 1000);
        });
    });

    // Toggle Movie Poster Positions
    function toggleMoviePositions() {
        movieGrids.forEach(grid => {
            const posters = Array.from(grid.querySelectorAll('.movie-poster'));
            const shuffledPosters = posters.sort(() => Math.random() - 0.5); // Shuffle posters
            shuffledPosters.forEach(poster => grid.appendChild(poster)); // Reorder them in the grid
        });
    }

    // Toggle movie poster positions every 15 seconds
    setInterval(toggleMoviePositions, 15000);

    // Menu Button Interaction
    const menuIcon = document.querySelector('.menu-icon');
    const header = document.querySelector('header');

    menuIcon.addEventListener('click', () => {
        header.classList.toggle('active');
        document.body.classList.toggle('menu-open'); // To handle body overflow when menu is open
        alert('Menu clicked! Feature coming soon.');
    });

    // Form Submission Handling for Email Input
    const emailInput = document.querySelector('.email-signup input');
    const getStartedButton = document.querySelector('.btn-primary');

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

    // Function to Validate Email Format
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

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
