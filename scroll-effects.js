document.addEventListener('DOMContentLoaded', function() {
    const bookSections = document.querySelectorAll('.section.book');
    const maroonVariants = [
        '#3a0000', // Deep maroon
        '#4a1010', // Reddish maroon
        '#5a2020', // Warm maroon
        '#4a0000', // Rich maroon
        '#5a3030', // Light maroon
        '#3a1010', // Dark reddish
    ];

     //
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get random maroon variant
                const randomColor = maroonVariants[Math.floor(Math.random() * maroonVariants.length)];
                
                // Apply color with smooth transition
                entry.target.style.transition = 'background-color 0.5s ease, transform 0.3s ease';
                entry.target.style.backgroundColor = randomColor;
                
                // Add subtle scale effect
                entry.target.style.transform = 'scale(1.01)';
                
                // Add glow effect to book cover
                const bookCover = entry.target.querySelector('.book-cover');
                if (bookCover) {
                    bookCover.style.transition = 'box-shadow 0.5s ease';
                    bookCover.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.3)';
                }
            } else {
                // Reset when not in view
                entry.target.style.transform = 'scale(1)';
                const bookCover = entry.target.querySelector('.book-cover');
                if (bookCover) {
                    bookCover.style.boxShadow = 'none';
                }
            }
        });
    }, {
        threshold: 0.3, // Trigger when 30% of element is visible
        rootMargin: '0px 0px -50px 0px' // Slightly delayed trigger
    });

    // Start observing each book section
    bookSections.forEach(section => {
        observer.observe(section);
    });
});
