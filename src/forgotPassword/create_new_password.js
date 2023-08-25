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
// to toggle the visibility of confirmed password
const confirmPasswordButton = document.querySelector("button.confirm_password_button");
const confirmPasswordInput = document.querySelector("input.confirm_password_input");
confirmPasswordButton.addEventListener("click", () => {
  console.log(confirmPasswordInput.type);
  if (confirmPasswordInput.type == "password") {
    confirmPasswordInput.type = "text";
  } else {
    confirmPasswordInput.type = "password";
  }
});
