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