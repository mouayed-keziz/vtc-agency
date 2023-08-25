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
// this is to check all the checkBoxes when we check the checkAll button
const checkAllButton = document.querySelector("input.all_travels_checkbox");
const allSingleCheckBoxes = document.querySelectorAll("input.single_travel_checkbox");
checkAllButton.addEventListener("input", (e) => {
  if (e.target.checked) {
    allSingleCheckBoxes.forEach((item, index) => {
      item.checked = true;
    });
  } else {
    allSingleCheckBoxes.forEach((item, index) => {
      item.checked = false;
    });
  }
  toggleDeleteButton(e.target.checked);
});

// this is to show and hide the delete button
const deleteButton = document.querySelector(".delete_button_container");
allSingleCheckBoxes.forEach((item, index) => {
  item.addEventListener("input", () => {
    // check if there is single checked checkbox
    const checkBoxesArray = Array.from(allSingleCheckBoxes);
    const checkedItems = checkBoxesArray.find((item, index) => item.checked);
    toggleDeleteButton(checkedItems);
  });
});

const toggleDeleteButton = (test) => {
  if (test) {
    deleteButton.classList.remove("invisible");
    deleteButton.classList.add("visible");
  } else {
    deleteButton.classList.add("invisible");
    deleteButton.classList.remove("visible");
  }
};
