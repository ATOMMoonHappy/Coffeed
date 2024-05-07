document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    // Предотвращаем стандартную отправку формы
    event.preventDefault();

    // Валидация имени
    const firstName = document.getElementById('first-name').value;
    if (!firstName.match(/^[а-яА-ЯёЁ]+$/)) {
      alert('Пожалуйста, введите корректное имя.');
      return;
    }

    // Валидация фамилии
    const lastName = document.getElementById('last-name').value;
    if (!lastName.match(/^[а-яА-ЯёЁ]+$/)) {
      alert('Пожалуйста, введите корректную фамилию.');
      return;
    }

    // Валидация email
    const email = document.getElementById('email').value;
    if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      alert('Пожалуйста, введите корректный email.');
      return;
    }

    // Валидация даты рождения
    const dob = document.getElementById('dob').value;
    if (!dob.match(/^\d{4}-\d{2}-\d{2}$/)) {
      alert('Пожалуйста, введите корректную дату рождения.');
      return;
    }

    // Валидация номера телефона
    const phone = document.getElementById('phone').value;
    if (!phone.match(/^\+?\d{10,12}$/)) {
      alert('Пожалуйста, введите корректный номер телефона.');
      return;
    }

    // Если все проверки пройдены, форма отправляется
    form.submit();
  });
});


function toggleMenu() {
  var menu = document.querySelector('header ul');
  if (menu.style.left === '0px') {
      menu.style.left = '-100%';
  } else {
      menu.style.left = '0px';
  }
}



let mybutton = document.getElementById("scrollToTopButton");

// При прокрутке вниз на 20px от верхней части документа, показываем кнопку
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// При нажатии на кнопку, плавно перематываем на верх
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}