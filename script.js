const burger = document.querySelector(".header__burger");
const burgerLine = document.querySelector(".header__burger-line");
const burgerBack = document.querySelector(".back-burger");
const navList = document.querySelector(".header__nav-list");
const headerNav = document.querySelector(".header__nav");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const photoSlider = document.querySelector(".photo-slider__block");

function toggleMenu() {
  burger.classList.toggle("open");
  burgerLine.classList.toggle("open");
  burgerBack.classList.toggle("open");
  navList.classList.toggle("open");
  headerNav.classList.toggle("open");
}

burger.addEventListener("click", toggleMenu);
burgerBack.addEventListener("click", toggleMenu);
navList.addEventListener("click", toggleMenu);

let i = 1;
const widthPhoto = 260;
let move = 0;

function slideNext() {
  btnPrev.disabled = false;
  i++;
  move -= widthPhoto;
  photoSlider.style.left = `${move}px`;
  if (i === 6) {
    btnNext.disabled = true;
  }
}

function slideBack() {
  btnNext.disabled = false;
  i--;
  move += widthPhoto;
  photoSlider.style.left = `${move}px`;
  if (i === 1) {
    btnPrev.disabled = true;
  }
}

btnNext.addEventListener("click", slideNext);
btnPrev.addEventListener("click", slideBack);
