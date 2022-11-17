const button = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-main');

function resizeUpdate() {
  if (document.body.offsetWidth >= 768) {
    nav.setAttribute('aria-expanded', false);
    nav.classList.remove('nav-main-show');
    button.classList.remove('nav-main-button-close');
  }
}

function toggleMenu() {
  if (nav.getAttribute('aria-expanded') === 'false') {
    nav.setAttribute('aria-expanded', true);
    nav.classList.add('nav-main-show');
    button.classList.add('nav-main-button-close');
  } else {
    nav.setAttribute('aria-expanded', false);
    nav.classList.remove('nav-main-show');
    button.classList.remove('nav-main-button-close');
  }
}

window.addEventListener('resize', resizeUpdate, false);
button.addEventListener('click', toggleMenu, false);