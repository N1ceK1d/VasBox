
const button = document.querySelector('.button');//кнопка, вызывающая окно
const button2 = document.querySelector('.button2');// то, же самое, что и button, но для другой кнопки
const form = document.querySelector('#blablabla');//блок, который содержит форму
const popup = document.querySelector('.popup');//само окно
const close_button = document.querySelector('#close');//кнопка, ввиде крестика для закрытия окна

/*
Добавляем кнопке событие при клике, 
которое будет показывать окно 
куда пользователь должен ввести
свои данные
*/
button.addEventListener('click', () => {
  form.classList.add('open');
  popup.classList.add('popup_open');
});

button2.addEventListener('click', () => {
  form.classList.add('open');
  popup.classList.add('popup_open');
});

/*
Убираем окно
*/
close_button.addEventListener('click', () => {
  form.classList.remove('open');
  popup.classList.remove('popup_open');
});


const moreButton = document.querySelectorAll('.more');//блок с описанием товара
const info = document.querySelector('.info');//блок товара
const productItems = document.querySelector('.product');//блок со всеми товарами

productItems.addEventListener('click', showInfo);

function showInfo() {
  productItems.addEventListener('click', (event) => {
    if(event.target.className == 'more') {
      if(event.target.moreButton.classList.contains('show_product_info')) {
        info.classList.remove('show_product_info');
      } else {
        info.classList.add('show_product_info');
      }
    }
  });
};