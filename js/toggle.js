let menu = document.getElementById("menu");
let btn = document.getElementById("menuBtn");

btn.onclick = function () {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
};