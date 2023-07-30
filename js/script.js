addEventListener('DOMContentLoaded', function () {
  //mobile-menu
  const menuBtn = document.querySelector('.menu__btn');
  const menuList = document.querySelector('.menu__list');

  menuBtn.addEventListener('click', function () {
    menuList.classList.toggle('menu__list--active');
  });

  //форма кнопки
  const formBtn = document.querySelector('.form__btn');
  const contactFormBtn = document.querySelector('.contact__form-btn');

  formBtn.addEventListener('click', function () {
    formBtn.setAttribute('style', 'background-color: #96E28C;');
    formBtn.insertAdjacentHTML(
      'afterend',
      '<div class="form__alert">Ожидайте звонка для подтверждения записи</div>',
    );
  });
  contactFormBtn.addEventListener('click', function () {
    contactFormBtn.setAttribute('style', 'color: #000000; background-color: #BBD4AF;');
    contactFormBtn.innerHTML = 'Отправлено';
    contactFormBtn.insertAdjacentHTML(
      'afterend',
      '<div class="contact__form-alert">Ожидайте звонка для подтверждения записи</div>',
    );
  });
});
