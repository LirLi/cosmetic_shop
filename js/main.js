let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let btnTranform = document.querySelector('.header__menu-btn');
let headerColor = document.querySelector('.header__wrap--opened');
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

// Фильтр

let catalogFilterEvents = document.querySelector('.catalog__filter-forEvents')

let catalogBtn = document.querySelector('.catalog__bth')
let catalogBtnClosed = document.querySelector('.catalog__btn--filter')
let catalogBtnOpened = document.querySelector('.catalog__btn--cross')

let catalogFilterToggle = document.querySelector('.filter__wrap');

catalogFilterEvents.addEventListener('click', function () {
  if (catalogFilterToggle.classList.contains('filter__closed')) {
    catalogFilterToggle.classList.remove('filter__closed');
    catalogFilterToggle.classList.add('filter__opened');
  }
  else {
    catalogFilterToggle.classList.add('filter__closed');
    catalogFilterToggle.classList.remove('filter__opened');
  }
});

catalogFilterEvents.addEventListener('click', function () {
  if (catalogFilterToggle.classList.contains('filter__opened')) {
    catalogBtnClosed.classList.remove('catalog__btn--show');
    catalogBtnClosed.classList.add('catalog__btn--hidden');
    catalogBtnOpened.classList.add('catalog__btn--show');
  }
  else {
    catalogBtnOpened.classList.remove('catalog__btn--show');
    catalogBtnOpened.classList.add('catalog__btn--hidden');
    catalogBtnClosed.classList.add('catalog__btn--show');
  }
})

if (catalogFilterToggle.classList.contains('filter__closed')) {
  catalogBtnOpened.classList.add('catalog__btn--hidden');
}
// else {
//   catalogBtnClosed.classList.add('catalog__btn--show');
// }

// let catalogFilterClosed =  document.querySelector('.')

// catalogBtn.addEventListener('click', changeBtnOpen);

// function changeBtnOpen() {
//   catalogBtn.classList.add('catalog__btn--hidden')
// }
// if (changeBtnOpen) {
//   catalogBtnOpened.classList.add('catalog__btn--hidden');
// } 
// catalogBtn.addEventListener('click', changeBtnClose);

// function changeBtnClose() {
  
// }

// else {
//   catalogBtnOpened.classList.add('catalog__btn--show');
// }

// catalogFilterEvents.addEventListener('click', catalogFilterOpen);

// function catalogFilterOpen() {
//   catalogFilterOpened.classList.remove('filter__closed');
// }

// catalogFilterEvents.addEventListener('click', catalogFilterClose);

// function catalogFilterClose{
//   catalogFilterOpened.classList.add('filter__closed');
// }


// catalogFilterEvents.addEventListener('click', catalogFilterCloded);

// function catalogFilterCloded() {
//   catalogFilterOpened.classList.add('filter__closed');
// }

// catalogFilterEvents.addEventListener('click', changeBtn);

// function changeBtn(){
//   catalogBtn.classList.add('catalog__btn--closed');
// }

// if (catalogBtn.contains('catalog__btn--closed')) {
//   catalogBtn.remove('catalog__btn--closed');
// }

