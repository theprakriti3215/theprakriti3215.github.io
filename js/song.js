const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("slide-menu");
const closeBtn = document.querySelector(".close-btn");

menuIcon.onclick = () => menu.classList.add("open");
closeBtn.onclick = () => menu.classList.remove("open");

document.querySelectorAll("#slide-menu a").forEach(link => {
  link.onclick = () => menu.classList.remove("open");
});
