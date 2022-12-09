//Managing the banner's carrousel
const images = [
  "images/banner1.jpg",
  "images/banner2.jpg",
  "images/banner3.jpg",
];
const banner = document.querySelector(".banner");
const interval = setInterval(function () {
  startCarousel();
}, 3000);
var index = 1;

startCarousel = () => {
  banner.style.backgroundImage = `url(${images[index++]})`;
  banner.classList.remove("fade");
  void banner.offsetWidth;
  banner.classList.add("fade");
  if (index > images.length - 1) index = 0;
};

//Managing products slide 1
const contentSlide1 = document.getElementsByClassName("content-1");
const leftArrowSlide1 = document.getElementById("left1");
const rightArrowSlide1 = document.getElementById("right1");
const itemSlide1 = contentSlide1.length;
let leftSlide1 = 0;
let content_size_slide1 = 25.4;
let total_content_size_slide1 =
  contentSlide1.length * content_size_slide1 - content_size_slide1 * 4;

rightArrowSlide1.addEventListener("click", () => {
  leftSlide1 += content_size_slide1;
  if (leftSlide1 >= total_content_size_slide1)
    leftSlide1 = total_content_size_slide1;
  moveContentSlide1(leftSlide1);
});

leftArrowSlide1.addEventListener("click", () => {
  leftSlide1 -= content_size_slide1;
  if (leftSlide1 <= 0) leftSlide1 = 0;
  moveContentSlide1(leftSlide1);
});

function moveContentSlide1(leftSlide1) {
  for (content_slide1 of contentSlide1) {
    content_slide1.style.left = -leftSlide1 + "%";
  }
}

//Managing products slide 2
const contentSlide2 = document.getElementsByClassName("content-2");
const leftArrowSlide2 = document.getElementById("left2");
const rightArrowSlide2 = document.getElementById("right2");
const itemsSlide2 = contentSlide2.length;
let leftSlide2 = 0;
let content_size_slide2 = 25.4;
let total_content_size_slide2 =
  contentSlide2.length * content_size_slide2 - content_size_slide2 * 4;

rightArrowSlide2.addEventListener("click", () => {
  leftSlide2 += content_size_slide2;
  if (leftSlide2 >= total_content_size_slide2)
    leftSlide2 = total_content_size_slide2;
  moveContentSlide2(leftSlide2);
});

leftArrowSlide2.addEventListener("click", () => {
  leftSlide2 -= content_size_slide2;
  if (leftSlide2 <= 0) leftSlide2 = 0;
  moveContentSlide2(leftSlide2);
});

function moveContentSlide2(leftSlide2) {
  for (content_slide2 of contentSlide2) {
    content_slide2.style.left = -leftSlide2 + "%";
  }
}
