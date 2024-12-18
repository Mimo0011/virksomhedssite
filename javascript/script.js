function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function checkFadeIn() {
  const textElement = document.querySelector(".text_container");
  if (isElementInViewport(textElement)) {
    textElement.classList.add("text_visible");
  }
}

window.addEventListener("scroll", checkFadeIn);

window.addEventListener("load", checkFadeIn);
