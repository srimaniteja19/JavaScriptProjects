let openBtn = document.querySelector(".open");
let bar = document.querySelector("ul");
let closeBtn = document.querySelector(".close");
function openSideBar(e) {
  bar.classList.add("click");
  openBtn.style.visibility = "hidden";
}
function closeBar(e) {
  bar.classList.remove("click");
  openBtn.style.visibility = "visible";
}
openBtn.addEventListener("click", openSideBar);
closeBtn.addEventListener("click", closeBar);
