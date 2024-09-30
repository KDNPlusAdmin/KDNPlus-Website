//  JavaScript for Accordion 

    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.accordion-icon');

            content.classList.toggle('active');
            icon.textContent = content.classList.contains('active') ? '-' : '+';
        });
    });
