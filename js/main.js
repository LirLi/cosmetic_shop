let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let btnTranform = document.querySelector('.header__menu-btn');
let headerColor = document.querySelector('.header__wrap--opened');
//открытие меню

// let shareBtn = document.querySelector('.share__btn');
// let share = document.querySelector('.share-wrap');

// const toggleMenu = () => {
// 	navMain.classList.toggle('header__wrap--opened');
// }

// btnTranform.addEventListener('click', btnTranform => {
// 	btnTranform.stopPropagation();
//   toggleMenu();
// });

// document.addEventListener('click', shareBtn => {
// 	let target = shareBtn.target;
// 	let share_is_active = share.classList.contains('share-wrap--active');
	
// 	if (share_is_active) {
// 	  toggleMenu();
// 	}
//   })
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
navToggle.addEventListener('click', function () {
  if (headerColor.classList.contains('header__wrap--closed')) {
    headerColor.classList.remove('header__wrap--closed');
    headerColor.classList.add('header__wrap--opened');
  }
  else {
    headerColor.classList.add('header__wrap--closed');
    headerColor.classList.remove('header__wrap--opened');
  }
});



