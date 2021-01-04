
var panelItem = document.querySelectorAll('.product__panel-title'),
  active = document.getElementsByClassName('.product__panel-active');

Array.from(panelItem).forEach(function(item, i, panelItem) {
  item.addEventListener('click', function(e) {
    if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
      active[0].classList.remove('product__panel-active'); // убрать класс panel-aaactive

    // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
    this.classList.toggle('product__panel-active');
  });
});