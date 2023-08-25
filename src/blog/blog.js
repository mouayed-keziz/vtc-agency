// to show and hide the side bar
const sidBarBtn = document.querySelector(".sideBar-btn  ");
const sideBar = document.querySelector(".side-bar");

sidBarBtn.addEventListener("click", (e) => {
  if (sideBar.classList.contains("-top-96")) {
    sideBar.classList.remove("-top-96");
    sideBar.classList.add("top-[90px]");
  } else {
    sideBar.classList.add("-top-96");
    sideBar.classList.remove("top-[90px]");
  }
});
// this is for the year in the copyright phrase for the footer
const yearContainer = document.querySelector("span.year");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
yearContainer.innerText = currentYear;
