// JavaScript to handle the card flip effect
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        // Remove 'flipped' class and close button from all cards
        document.querySelectorAll('.card.flipped').forEach(flippedCard => {
            flippedCard.classList.remove('flipped');
            let closeButton = flippedCard.querySelector('.close-button');
            if (closeButton) {
                flippedCard.removeChild(closeButton);
            }
        });

        // Add 'flipped' class to the clicked card
        card.classList.add('flipped');

        // Create a close button with 'X' icon and append it to the flipped card
        let closeButton = document.createElement('i');
        closeButton.className = 'fa fa-times close-button';
        closeButton.addEventListener('click', (event) => {
            event.stopPropagation();
            card.classList.remove('flipped');
            card.removeChild(closeButton);
        });
        card.appendChild(closeButton);
    });
});