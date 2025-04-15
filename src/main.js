const mobMenuBtns = document.querySelectorAll('.js-mob-menu-btn');
const mobMenu = document.querySelector('.js-header-mob-menu');
const navLink = document.querySelectorAll('.js-nav-link');
const header = document.querySelector('.js-header');
const cookieModal = document.querySelector('.js-cookies');
const cookiesBtn = cookieModal.querySelectorAll('.js-cookie-btn');

const toggleMobMenu = () => {
  mobMenu.classList.toggle('is-open');
  mobMenu.classList.contains('is-open')
    ? (header.style.position = 'static')
    : (header.style.position = 'sticky');
};

const handleScroll = e => {
  e.preventDefault();

  const targetEl = document.querySelector(e.currentTarget.getAttribute('href'));

  mobMenu.classList.remove('is-open');
  header.style.position = 'sticky';

  if (!targetEl) return;

  const targetPosition =
    targetEl.getBoundingClientRect().top + window.scrollY - header.offsetHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
};

const closeCookieModal = () => {
  cookieModal.classList.remove('is-show');
  localStorage.setItem('firstLoad', 'fasle');
  cookiesBtn.forEach(btn => btn.removeEventListener('click', closeCookieModal));
};

document.addEventListener('DOMContentLoaded', () => {
  localStorage.getItem('firstLoad') ??
    setTimeout(() => {
      cookieModal.classList.add('is-show');
    }, 700);
});

mobMenuBtns.forEach(btn => btn.addEventListener('click', toggleMobMenu));
navLink.forEach(btn => btn.addEventListener('click', handleScroll));
cookiesBtn.forEach(btn => btn.addEventListener('click', closeCookieModal));
