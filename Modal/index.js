let openBtn = document.querySelector(".open");
let closeBtn = document.querySelector(".close");
let modal = document.querySelector(".modal-container");

openBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});
