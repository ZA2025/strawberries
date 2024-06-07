console.log('nav.js is connected');
 
function initializeNav() {
    const burger = document.querySelector('.burger');
    const pageHeaderList = document.querySelector('.pageHeaderList');
    const burgerIcon = document.querySelector('.burger .fa-bars');
    const closeIcon = document.querySelector('.burger .fa-times');

    if (burger && pageHeaderList && burgerIcon && closeIcon) {
        burger.addEventListener('click', () => {
            pageHeaderList.classList.toggle('show');
             
            document.body.classList.toggle('nav-active');
            burgerIcon.style.display = burgerIcon.style.display === 'none' ? 'block' : 'none';
            closeIcon.style.display = closeIcon.style.display === 'none' ? 'block' : 'none';
        });
    }
}
window.onload = initializeNav;