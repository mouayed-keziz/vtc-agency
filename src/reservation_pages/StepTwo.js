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
