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

// this is to active and disactive the date and hour inputs for retour
const backRadio = document.querySelector("input.retour_radio_input");
const allerRadio = document.querySelector("input.aller_radio_input");

// those are the inputs for the back (retour) info
const backDateInput = document.querySelector("input.retour_date_input");
const backHourInput = document.querySelector("input.retour_hour_input");
backRadio.addEventListener("input", (e) => {
  if (e.target.checked) {
    backDateInput.disabled = false;
    backHourInput.disabled = false;
  }
});
allerRadio.addEventListener("input", (e) => {
  if (e.target.checked) {
    backDateInput.disabled = true;
    backHourInput.disabled = true;
  }
});

// this is for the length of the preferences textArea
const preferences = document.querySelector("textarea.preferences");
const lengthContainer = document.querySelector(".preferences_length");
const length = preferences.value.length;
lengthContainer.innerText = length;
preferences.addEventListener("input", (e) => {
  lengthContainer.innerText = e.target.value.length;
});
