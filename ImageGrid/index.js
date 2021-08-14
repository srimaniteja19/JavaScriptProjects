let gallery = document.querySelectorAll(".gallery");
let modal = document.querySelector(".modal");
let fullImg = document.querySelector(".full-img");

Array.from(gallery).forEach((el) => {
  el.addEventListener("click", (e) => {
    modal.classList.add("open");
    fullImg.src = e.target.src;
    fullImg.classList.add("open");
  });
});

modal.addEventListener("click", (e) => {
  if (e.target !== fullImg) {
    modal.classList.remove("open");
    fullImg.classList.remove("open");
  } else {
    console.log(e.target);
  }
});
