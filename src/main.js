const mobMenuBtns = document.querySelectorAll('.js-mob-menu-btn');
const mobMenu = document.querySelector('.js-header-mob-menu');
const mobLink = document.querySelectorAll('.js-mob-nav-link');
const header = document.querySelector('.js-header');

const toggleMobMenu = () => {
  mobMenu.classList.toggle('is-open');
  mobMenu.classList.contains('is-open')
    ? (header.style.position = 'static')
    : (header.style.position = 'sticky');
};

mobMenuBtns.forEach(btn => btn.addEventListener('click', toggleMobMenu));
mobLink.forEach(btn => btn.addEventListener('click', toggleMobMenu));
