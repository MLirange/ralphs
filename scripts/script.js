const nav = document.querySelector("nav");
const toggleMenu = document.getElementById("toggle");
const menuBars = document.querySelectorAll(".lines");

toggleMenu.addEventListener("click", () => {
  nav.classList.toggle("menu-open");
  toggleMenu.classList.toggle("toggle-on");
  menuBars.forEach((elem) => {
    elem.classList.toggle("lines");
    elem.classList.toggle("toggle-on-span");
  });
});
