let slideElements = document.querySelectorAll(".slide-element");
let count = 1;
setInterval(() => {
  count++;
  let current = document.querySelector(".current");
  current.classList.remove("current");

  if (count > slideElements.length) {
    slideElements[0].classList.add("current");
    count = 1;
  } else {
    current.nextElementSibling.classList.add("current");
  }
}, 2000);
