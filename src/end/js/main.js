const menu = document.getElementById("menu");
const menuContent = document.getElementById("menu-content");
const navbar = document.getElementById("navbar");

menu.addEventListener("click", e => {
  menu.classList.toggle("open");
  menuContent.classList.toggle("open");
  setTimeout(() => {
    navbar.classList.toggle("open");
  }, 300);
});
