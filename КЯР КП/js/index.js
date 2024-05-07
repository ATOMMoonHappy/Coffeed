function loadXMLFile(filename, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    };
    xhttp.open("GET", filename, true);
    xhttp.send();
  }
  
  // Функция для парсинга XML в HTML
  function parseXMLToHTML(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  
    const pElement = document.createElement("p");
    pElement.textContent = xmlDoc.documentElement.textContent;
  
    return pElement;
  }
  
  // Загрузка файла и отображение данных в HTML
  loadXMLFile("./xml/reg.xml", function(xmlData) {
    const pElement = parseXMLToHTML(xmlData);
    const descDiv = document.getElementById("desc");
    descDiv.appendChild(pElement);
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