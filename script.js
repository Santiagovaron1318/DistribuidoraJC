const btnLeft = document.querySelector(".btn-left"),
  btnRight = document.querySelector(".btn-right"),
  slider = document.querySelector("#slider"),
  sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", (e) => moveToLeft());
btnRight.addEventListener("click", (e) => moveToRight());

setInterval(() => {
    moveToRight()
}, 8000);

let operator = 0,
  counter = 0,
  widthimg = 100 / sliderSection.length;

function moveToRight() {
  if (counter >= sliderSection.length - 1) {
    counter = 0;
    operator = 0;
    slider.style.transform = `translate(-${operator}%)`;
  } else {
    counter++;

    operator = operator + widthimg;
    slider.style.transform = `translate(-${operator}%)`;
    slider.style.transition = "all ease .6s";
  }
}

function moveToLeft() {
  counter--;
  if (counter < 0) {
    counter = sliderSection.length - 1;
    operator = widthimg * (sliderSection.length - 1);
    slider.style.transform = `translate(-${operator})`;
    slider.style.transition = "none";
  } else {
    operator = operator - widthimg;
    slider.style.transform = `translate(-${operator}%)`;
    slider.style.transition = "all ease .6s";
  }
}
