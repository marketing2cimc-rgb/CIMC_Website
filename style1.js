document.addEventListener('DOMContentLoaded', () => {
    // Function to handle scroll-triggered animations (slideInUp)
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    // Add CSS class for animation targeting
    const sectionsToAnimate = document.querySelectorAll('.solution-card, .tech-feature, .cta-banner');
    sectionsToAnimate.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const observer = new IntersectionObserver(animateOnScroll, {
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
    });

    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
});