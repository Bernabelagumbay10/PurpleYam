// Download app function
function downloadApp() {
    const link = document.createElement('a');
    link.href = 'purpleyum.apk';
    link.download = 'purpleyum.apk';
    link.click();
}

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.section-title, .feature-card, .step, .showcase-item, .testimonial-card, .cta-title, .cta-desc');
    
    animatedElements.forEach(element => {
        element.classList.add('fade-in-up');
        observer.observe(element);
    });

    // Special animation for showcase items
    const showcaseItems = document.querySelectorAll('.showcase-item');
    showcaseItems.forEach((item, index) => {
        item.classList.add('fade-in-scale');
        item.style.animationDelay = `${index * 0.2}s`;
        observer.observe(item);
    });
});