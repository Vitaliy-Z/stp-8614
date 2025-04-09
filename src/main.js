const mobMenuBtns = document.querySelectorAll('.js-mob-menu-btn');
const mobMenu = document.querySelector('.js-header-mob-menu');
const mobLink = document.querySelectorAll('.js-mob-nav-link');

const toggleMobMenu = () => mobMenu.classList.toggle('is-open');

mobMenuBtns.forEach(btn => btn.addEventListener('click', toggleMobMenu));
mobLink.forEach(btn => btn.addEventListener('click', toggleMobMenu));
