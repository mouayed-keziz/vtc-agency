// to toggle the visibility of password
const passwordButton = document.querySelector("button.new_password_button");
const newPasswordInput = document.querySelector("input.new_password_input");
passwordButton.addEventListener("click", () => {
  console.log(newPasswordInput.type);
  if (newPasswordInput.type == "password") {
    newPasswordInput.type = "text";
  } else {
    newPasswordInput.type = "password";
  }
});
// this is for the navBar
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
