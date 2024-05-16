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
