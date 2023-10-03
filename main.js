/* Ativando modo daltonismo */
const btnDalt = document.getElementById("btn-dalt");
let arrayElements = [
  document.getElementById("btn-dalt"),
  document.getElementById("navbar"),
  document.getElementById("btn-acs"),
  document.getElementById("post"),
  ...document.querySelectorAll("header #navbar .nav-list .nav-item a"),
  ...document.querySelectorAll(
    "header #navbar .navbar-options .navbar-btn-font"
  ),
  document.getElementById("banner-btn")
]; 
 let notebookImage = document.getElementById("posts-content-laptop");
 let smartphoneImage = document.getElementById("posts-content-smartphone");
 let signImage = document.getElementById('posts-content-language')


btnDalt.addEventListener("click", () => {
  arrayElements.forEach((element) => {
    element.classList.toggle("protanopia");
    element.classList.toggle("ativate");
  }); 

 if (notebookImage.src.match('dalton')) {
   smartphoneImage.src = "imgs-svg/smartphone-svgrepo-com.svg";
  notebookImage.src = "imgs-svg/laptop-svgrepo-com.svg";
  signImage.src =  "imgs-svg/sign-language-svgrepo-com.svg"
 } else {
   smartphoneImage.src = "imgs-svg/smartphone-dalton-color.svg";
  notebookImage.src = "imgs-svg/laptop-dalton-color.svg";
  signImage.src = "imgs-svg/sign-language-dalton.color.svg";
 }
});

/* Aumentando e diminuindo fonte */

let $btnAumentar = $("#btnAumentar");
let $btnDiminuir = $("#btnDiminuir");
let $elemento = $("body").find("*");
let fonts = [];

function obterTamanhoFonte() {
  for (let i = 0; i < $elemento.length; i++) {
    fonts.push(parseFloat($elemento.eq(i).css("font-size")));
  }
}
obterTamanhoFonte();
$btnAumentar.on("click", function () {
  for (let i = 0; i < $elemento.length; i++) {
    if (fonts[0] <= 24) {
      ++fonts[i];
      $elemento.eq(i).css("font-size", fonts[i]);
    } else {
      window.alert("Não é possível mais aumentar a fonte!");
      break;
    }
  }
});

$btnDiminuir.on("click", function () {
  for (let i = 0; i < $elemento.length; i++) {
    if (fonts[0] >= 16) {
      --fonts[i];
      $elemento.eq(i).css("font-size", fonts[i]);
      console.log(fonts);
    } else {
      window.alert("Não é possível mais diminuir a fonte!");
      break;
    }
  }
});
