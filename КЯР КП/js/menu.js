document.getElementById('coffee').style.display = 'block'; // Показываем раздел "Кофе" по умолчанию

function showCategory(category) {
  var categories = document.getElementsByClassName('content');
  for (var i = 0; i < categories.length; i++) {
    categories[i].style.display = 'none';
  }
  document.getElementById(category).style.display = 'flex';
}

function toggleMenu() {
  var menu = document.querySelector('header ul');
  if (menu.style.left === '0px') {
      menu.style.left = '-100%';
  } else {
      menu.style.left = '0px';
  }
}

