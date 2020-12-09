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

let catalogFilterEvents = document.querySelector('.catalog__header')
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

// Аккордеон
let acc = document.getElementsByClassName("filter__accordion-btn");
let i;
// let accBtn = 

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the 
        button that controls the panel */
        // this.classList.toggle("filter__accordion-btn--opened"); пока не нужно

        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
    });
}

let acc2 = document.querySelectorAll('.filter__accordion-btn');

// let panel2 = document.querySelector('.filter__content');
for (let i = 0; i < acc.length; i++){
acc2.addEventListener("click", function() {
  if (acc2.classList.contains('filter__accordion-btn--closed')) {
    acc2.classList.remove('filter__accordion-btn--closed');
    acc2.classList.add('filter__accordion-btn--opened');
  } else {
    acc2.classList.remove('filter__accordion-btn--opened');
    acc2.classList.add('filter__accordion-btn--closed');
} 
})
}
// slider
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
 
  pagination: {
    el: '.swiper-pagination',
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
})