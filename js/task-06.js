const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  const setLength = parseInt(textInput.dataset.length);
  const inputLength = textInput.value.length;
  if (inputLength === setLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
