import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";
// to show and hide the side bar
const sidBarBtn = document.querySelector(".sideBar-btn  ");
const sideBar = document.querySelector(".side-bar");

sidBarBtn.addEventListener("click", (e) => {
  if (sideBar.classList.contains("-top-96")) {
    sideBar.classList.remove("-top-96");
    sideBar.classList.add("top-[100px]");
  } else {
    sideBar.classList.add("-top-96");
    sideBar.classList.remove("top-[100px]");
  }
});

// this si for the testimonials big carousel carousel

const bigSwiper = new Swiper(".testimonial-big-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  speed: 1000,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
const smallSwiper = new Swiper(".testimonial-small-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  speed: 1000,
});

let cars = document.querySelectorAll(".car");
let center = 1;
let left = 0;
let right = 2;
setInterval(() => {
  const current_right = Array.from(cars).find((item, index) => item.getAttribute("attr") == "right_car");
  const current_left = Array.from(cars).find((item, index) => item.getAttribute("attr") == "left_car");
  const current_center = Array.from(cars).find((item, index) => item.getAttribute("attr") == "center_car");
  current_left.setAttribute("attr", "right_car");
  current_right.setAttribute("attr", "center_car");
  current_center.setAttribute("attr", "left_car");

  // upgrade the indexes
  // the current item
  if (center < cars.length - 1) {
    center++;
  } else {
    center = 0;
  }
  left = center > 0 ? center - 1 : cars.length - 1;
  right = center < cars.length - 1 ? center + 1 : 0;
}, 3000);

// this is for the year in the copyright phrase for the footer
const yearContainer = document.querySelector("span.year");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
yearContainer.innerText = currentYear;
