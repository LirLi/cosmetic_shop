let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let btnTranform = document.querySelector('.header__menu-btn');
navToggle.addEventListener ('click', function(){
  if (navMain.classList.contains('main-nav--closed')){
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
navToggle.addEventListener('click', function () {
   if (btnTranform.classList.contains('header__menu-btn--closed')) {
      btnTranform.classList.remove('header__menu-btn--closed');
      btnTranform.classList.add('header__menu-btn--opened');
   } else {
      btnTranform.classList.add('header__menu-btn--closed');
      btnTranform.classList.remove('header__menu-btn--opened');
   }
});