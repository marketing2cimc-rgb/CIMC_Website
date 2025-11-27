document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.channel-card');

    cards.forEach(card => {
        const h3 = card.querySelector('h3');
        const originalText = h3.textContent;
        const originalColor = h3.style.color;

        card.addEventListener('mouseenter', () => {
            // Start the "data stream" effect
            h3.textContent = '';
            h3.style.color = 'var(--color-accent-secondary)';

            let charIndex = 0;
            const interval = setInterval(() => {
                if (charIndex < originalText.length) {
                    // Append characters one by one
                    h3.textContent += originalText.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(interval);
                    h3.style.color = 'var(--color-text-light)'; // Reset color after animation
                }
            }, 50); // Speed of typing

            // Add a temporary glow on hover
            card.style.boxShadow = '0 0 30px var(--color-accent-secondary)';
        });

        card.addEventListener('mouseleave', () => {
            // Restore original text and style quickly
            h3.textContent = originalText;
            h3.style.color = originalColor;
            card.style.boxShadow = 'none';
        });
    });
});