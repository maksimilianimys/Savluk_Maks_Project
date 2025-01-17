const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.menu-mobile');
const menuLinks = document.querySelectorAll('.menu_mobile-navigator-link a');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
    });
});