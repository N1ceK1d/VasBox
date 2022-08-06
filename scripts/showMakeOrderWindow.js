const button = document.querySelector('.button');//кнопка, вызывающая окно
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

/*
Убираем окно
*/
close_button.addEventListener('click', () => {
  form.classList.remove('open');
  popup.classList.remove('popup_open');
});
