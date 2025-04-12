const mobMenuBtns = document.querySelectorAll('.js-mob-menu-btn');
const mobMenu = document.querySelector('.js-header-mob-menu');
const mobLink = document.querySelectorAll('.js-mob-nav-link');
const header = document.querySelector('.js-header');
const cookieModal = document.querySelector('.js-cookies');
const cookiesBtn = cookieModal.querySelectorAll('.cookie-btn');

const toggleMobMenu = () => {
  mobMenu.classList.toggle('is-open');
  mobMenu.classList.contains('is-open')
    ? (header.style.position = 'static')
    : (header.style.position = 'sticky');
};

const closeCookieModal = () => {
  cookieModal.classList.remove('is-show');
  cookiesBtn.forEach(btn => btn.removeEventListener('click', closeCookieModal));
};

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => cookieModal.classList.add('is-show'), 700);
});

mobMenuBtns.forEach(btn => btn.addEventListener('click', toggleMobMenu));
mobLink.forEach(btn => btn.addEventListener('click', toggleMobMenu));
cookiesBtn.forEach(btn => btn.addEventListener('click', closeCookieModal));
