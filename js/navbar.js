const show = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');
const menu = document.querySelector('.nav-items');

function toggleMenu() {
  if (menu.classList.contains('isHidden')) {
    menu.classList.remove('isHidden');
  } else {
    menu.classList.add('isHidden');
  }
}

show.addEventListener('click', toggleMenu);
close.addEventListener('click', toggleMenu);