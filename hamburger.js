// hamburger menu
let hamburgerMenu = document.getElementById("hamburger");
let menuhamburger = document.querySelector(".menu2");
let mark = document.querySelector("#mark");

hamburgerMenu.addEventListener("click", function () {
  menuhamburger.classList.toggle("hide");
});

mark.addEventListener("click", function () {
  menuhamburger.classList.toggle("hide");
});