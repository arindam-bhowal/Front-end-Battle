// Pre-Loader
window.addEventListener("load", function () {
  document.querySelector(".preloader").classList.remove("load");
});

//  Navbar
function navIconClick() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
  document.querySelector(".sectionAfterNav").classList.toggle("opac");
}