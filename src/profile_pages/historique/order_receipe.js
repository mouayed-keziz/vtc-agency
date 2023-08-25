// to show and hide the side bar
const sidBarBtn = document.querySelector(".sideBar-btn  ");
const sideBar = document.querySelector(".side-bar");

sidBarBtn.addEventListener("click", (e) => {
  if (sideBar.classList.contains("-top-[500px]")) {
    sideBar.classList.remove("-top-[500px]");
    sideBar.classList.add("top-[100px]");
  } else {
    sideBar.classList.add("-top-[500px]");
    sideBar.classList.remove("top-[100px]");
  }
});
