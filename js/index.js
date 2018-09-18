// Your code goes here
// mouseover ---- Used on "Let's Go!" img
// keydown ------
// wheel -------- Used on nav
// drag / drop --
// load --------- Used on window
// focus -------- Used on form
// resize -------
// scroll ------- Used on fixed icon - to animate
// select -------
// dblclick ---- Used on pick

// =========== MOUSEOVER ==========
let imgContent = document.querySelectorAll(".content-section .img-content img");
imgContent[0].addEventListener("mouseover", function(e) {
  e.target.style.opacity = ".6";
  e.target.style.transition = ".4s";
});

// =========== WHEEL ==========
let nav = document.querySelector(".main-navigation");
window.addEventListener("wheel", function() {
  nav.style.backgroundColor = "#17A2B8";
  nav.style.color = "white";
  nav.style.border = "2px solid #17A2B8";
  nav.style.transition = "1s";
});