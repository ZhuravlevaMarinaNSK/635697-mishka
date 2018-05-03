  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  var link = document.querySelector('.week-product__button');
  var popup = document.querySelector('.modal');
  var mask = document.querySelector('.overlay');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function(evt) {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal--show');
    mask.classList.add('modal--show');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
      if (popup.classList.contains('modal--show')) {
    popup.classList.remove('modal--show');
    mask.classList.remove('modal--show');
      }
    }
  });
