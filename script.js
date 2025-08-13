// This script adds a fade-in animation to elements as they are scrolled into view.

document.addEventListener('DOMContentLoaded', () => {
    
    // Select all elements that should fade in
    const fadeElements = document.querySelectorAll('.fade-in-element');

    // Configure the Intersection Observer
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    // Create the observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS transition
                entry.target.classList.add('visible');
                // Stop observing the element once it's visible to save resources
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Attach the observer to each fade-in element
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    console.log("Intersection Observer for animations is active.");
});
