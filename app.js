const inputText = document.querySelector("input");

const submit = document.querySelector("button");
const errorIcon = document.querySelector(".error");
const errorText = document.querySelector(".error-text");
console.log(errorText);
console.log(errorIcon);
console.log(inputText);
console.log(submit);

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value === "") {
    errorIcon.classList.remove("hidden");
    errorText.classList.remove("hidden");
  } else if (!inputText.value.match(mailformat)) {
    errorIcon.classList.remove("hidden");
    errorText.classList.remove("hidden");
  } else {
    errorIcon.classList.add("hidden");
    errorText.classList.add("hidden");
    alert("Correct mail format");
  }
}
submit.addEventListener("click", () => {
  ValidateEmail(inputText);
});
