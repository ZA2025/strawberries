console.log('decoration.js is connected');

function addMouseMovement(imageSelector, initialStyles, handleMouseMove) {
    const svg = document.querySelector(imageSelector);
         
    const footer = document.querySelector('.footer');
    if (!svg) {
        console.error(`Element with selector "${imageSelector}" not found`);
        return;
    }
    Object.keys(initialStyles).forEach((styleKey) => {
        svg.style[styleKey] = initialStyles[styleKey];
    });

    let previousMouseX = 0;

    // mouse leave event
    footer.addEventListener('mouseleave', (event) => {
        svg.style.transform = initialStyles.transform;
    });

    footer.addEventListener('mousemove', (event) => {
        const currentMouseX = event.clientX;

        if (currentMouseX < previousMouseX) {
            // Call the handleMouseMove function with the svg and the direction
            handleMouseMove(svg, 'left');
        } else if (currentMouseX > previousMouseX) {
            // Call the handleMouseMove function with the svg and the direction
            handleMouseMove(svg, 'right');
        }

        // Update previousMouseX to the current position
        previousMouseX = currentMouseX;
    });
}

// Usage:
addMouseMovement('.chr-leave', {
    position: 'absolute',
    right: '50px',
    bottom: '-30px',
    transformOrigin: '0% 100%',
    transform: 'translate(0px, 0px) rotate(-60deg)',
    transition: 'transform 2s ease'
}, (svg, direction) => {
    if (direction === 'left') {
        svg.style.transform = 'translate(0px, 0px) rotate(-90deg)';
    } else {
        svg.style.transform = 'translate(0px, 0px) rotate(-20deg)';
    }
});
addMouseMovement('.str', {
    position: 'absolute',
    right: '90px',
    bottom: '-20px',
    transformOrigin: '0% 100%',
    transform: 'translate(0px, 0px) rotate(0deg)',
    transition: 'transform 2s ease'
}, (svg, direction) => {
    if (direction === 'left') {
        svg.style.transform = 'translate(0px, 10px) rotate(-10deg)';
    } else {
        svg.style.transform = 'translate(0px, 0px) rotate(20deg)';
    }
});
addMouseMovement('.red-leaf', {
    position: 'absolute',
    right: '280px',
    bottom: '-55px',
    transformOrigin: '0% 100%',
    transform: 'translate(0px, 0px) rotate(-20deg)',
    transition: 'transform 2s ease'
}, (svg, direction) => {
    if (direction === 'left') {
        svg.style.transform = 'translate(0px, 10px) rotate(-50deg)';
    } else {
        svg.style.transform = 'translate(0px, 10px) rotate(-20deg)';
    }
});
addMouseMovement('.onion', {
    position: 'absolute',
    right: '240px',
    bottom: '-95px',
    transformOrigin: '0% 100%',
    transform: 'translate(0px, 0px) rotate(0deg)',
    transition: 'transform 2s ease'
}, (svg, direction) => {
    if (direction === 'left') {
        svg.style.transform = 'translate(20px, 0px) rotate(-10deg)';
    } else {
        svg.style.transform = 'translate(0px, -50px) rotate(20deg)';
    }
});
addMouseMovement('.flower', {
    position: 'absolute',
    right: '-10px',
    bottom: '-95px',
    transformOrigin: '0% 100%',
    transform: 'translate(10px, 0px) rotate(-10deg)',
    transition: 'transform 2s ease'
}, (svg, direction) => {
    if (direction === 'left') {
        svg.style.transform = 'translate(20px, 0px) rotate(-10deg)';
    } else {
        svg.style.transform = 'translate(0px, -50px) rotate(20deg)';
    }
}); 