const sidBarBtn = document.querySelector(".sideBar-btn  ");
const sideBar = document.querySelector(".side-bar");
// this is for the navbar
sidBarBtn.addEventListener("click", (e) => {
  if (sideBar.classList.contains("-top-96")) {
    sideBar.classList.remove("-top-96");
    sideBar.classList.add("top-[90px]");
  } else {
    sideBar.classList.add("-top-96");
    sideBar.classList.remove("top-[90px]");
  }
});
// this is for the swiper
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";
const servicesSwiper = new Swiper(".services-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  speed: 1000,
});
// this is for the year in the copyright phrase for the footer
const yearContainer = document.querySelector("span.year");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
yearContainer.innerText = currentYear;
