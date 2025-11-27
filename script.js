document.addEventListener('DOMContentLoaded', () => {
    const channelCards = document.querySelectorAll('.channel-card');
    const dataStreamElement = document.querySelector('.data-stream');
    const originalFooterText = dataStreamElement.textContent;

    // 1. Channel Card Hover Effect (Detail Reveal)
    channelCards.forEach(card => {
        const detailReveal = card.querySelector('.detail-reveal');
        const detailText = card.getAttribute('data-detail');
        
        // Use JS for the detail text content
        if (detailReveal && detailText) {
            card.addEventListener('mouseenter', () => {
                detailReveal.textContent = detailText;
            });
            card.addEventListener('mouseleave', () => {
                detailReveal.textContent = 'INITIATE'; // Reset text
            });
        }
    });

    // 2. Footer Text Decoding/Scanning Animation Placeholder
    const messages = ["ACCESS GRANTED", "SECURE CHANNEL ESTABLISHED", "PROCESSING DATA..."];
    let messageIndex = 0;

    function animateFooterText() {
        const currentMessage = messages[messageIndex];
        let charIndex = 0;
        dataStreamElement.textContent = ''; // Clear existing text

        const type = setInterval(() => {
            if (charIndex < currentMessage.length) {
                dataStreamElement.textContent += currentMessage.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(type);
                // Wait 2 seconds, then switch to the next message
                setTimeout(() => {
                    messageIndex = (messageIndex + 1) % messages.length;
                    animateFooterText();
                }, 2000); 
            }
        }, 80); // Typing speed

    }

    animateFooterText();
});