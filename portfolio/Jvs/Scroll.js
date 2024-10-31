// Toggle the mobile menu visibility when the menu icon is clicked
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Menu icon toggle functionality for mobile
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');  // Change the icon to an 'X'
    navbar.classList.toggle('active');  // Toggle the visibility of the menu
};


// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

// Add active class to the current section link while scrolling
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // If the scroll position is within the section bounds
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');  // Remove the active class from all links
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');  // Add active class to the current section link
            });
        }
    });

    // Hide the menu and reset icon when a section is clicked or on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Smooth scroll for the page
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Smooth scrolling behavior
        window.scrollTo({
            top: targetSection.offsetTop - 70,  // Adjust offset for sticky header
            behavior: 'smooth'
        });
    });
});

// Scroll-to-top button behavior
const scrollTopButton = document.querySelector('.footer a');

// Show/hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Scroll smoothly to the top when the button is clicked
scrollTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



