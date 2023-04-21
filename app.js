const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const bars = document.querySelectorAll(".bar");

hamburger.addEventListener("click", () => {
  bars.forEach((n) => n.classList.toggle("open"));
  hamburgerMenu.classList.toggle("active");
});
