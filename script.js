// script.js

// Add 'show' class to sections when they are scrolled into view
function animateOnScroll() {
    var sections = document.querySelectorAll('.section');

    sections.forEach(function(section) {
        if (isElementInViewport(section)) {
            section.classList.add('show');
        }
    });
}

// Check if an element is in the viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Do something with the form data (e.g., send it to a server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Display confirmation message
    var confirmation = document.createElement('p');
    confirmation.textContent = 'Your message has been sent. Thank you!';
    confirmation.style.color = '#f1c40f';
    document.getElementById('contactForm').appendChild(confirmation);

    // Reset form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

// Trigger animations on page load
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();

    // Additional animations or actions can be added here
});
