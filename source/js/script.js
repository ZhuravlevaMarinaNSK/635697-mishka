  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  var link = document.querySelector('.week-product__button');
  var cart = document.querySelectorAll('.product__icon');
  var popup = document.querySelector('.modal');
  var mask = document.querySelector('.overlay');
  var map = document.querySelector('.map__img');
  var mapWrap = document.querySelector('.map__wrapper');

  navMain.classList.remove('main-nav--nojs');

  if (map) {
    map.classList.remove('map__img--nojs');
    mapWrap.classList.remove('map__wrapper--nojs');
  }

  navToggle.addEventListener('click', function(evt) {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  if (link) {
    link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal--show');
    mask.classList.add('modal--show');
  });
}

  if (cart) {
    for (var i=0; i<= (cart.length-1); i++) {
      cart[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.add('modal--show');
      mask.classList.add('modal--show');
    });
  }
}

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains('modal--show')) {
        popup.classList.remove('modal--show');
        mask.classList.remove('modal--show');
      }
    }
  });

  mask.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
      mask.classList.remove('modal--show');
    }
  });
